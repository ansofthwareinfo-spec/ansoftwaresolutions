/**
 * A&N Software Solutions — website form receiver (Google Apps Script).
 *
 * Saves website form submissions as rows in this Google Sheet:
 *   Contact page form -> "contactus" tab
 *   Jobs page form    -> "jobs" tab (candidates share their resume as a Drive/OneDrive/Dropbox link)
 *
 * Setup: see README.md in this folder. Paste this whole file into
 * Extensions > Apps Script of your Google Sheet, then deploy it as a Web app.
 */

/**
 * Optional: the Google Sheet ID — the long part of the sheet's URL between /d/ and /edit:
 * https://docs.google.com/spreadsheets/d/THIS-PART/edit
 * Leave '' when this script was opened from the sheet (Extensions > Apps Script); it then uses that sheet.
 */
const SHEET_ID = '';

/** Optional: an email address to notify on every new submission. Leave '' to turn off. */
const NOTIFY_EMAIL = '';

const TIME_ZONE = 'Asia/Kolkata';
const MAX_FIELD_LENGTH = 5000;

/** Each form: the sheet tab it writes to, and its columns as [payload key, column header]. */
const FORMS = {
  contact: {
    sheet: 'contactus',
    fields: [
      ['fullName', 'Full name'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['company', 'Company'],
      ['service', 'What they need'],
      ['budget', 'Budget'],
      ['message', 'Details'],
      ['consent', 'Consent'],
    ],
  },
  'job-application': {
    sheet: 'jobs',
    fields: [
      ['fullName', 'Full name'],
      ['email', 'Email'],
      ['phone', 'Phone'],
      ['position', 'Applied for'],
      ['skills', 'Key skills'],
      ['experience', 'Experience'],
      ['noticePeriod', 'Notice period'],
      ['location', 'Current location'],
      ['linkedin', 'LinkedIn'],
      ['resumeLink', 'Resume link'],
      ['coverLetter', 'Notes'],
      ['consent', 'Consent'],
    ],
  },
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const data = JSON.parse(e.postData.contents);
    const form = FORMS[data.form];
    if (!form) return json({ ok: false, error: 'Unknown form' });

    // Honeypot: bots fill the hidden "website" field; accept silently and save nothing.
    if (data.website) return json({ ok: true });

    if (!isEmail(data.email)) return json({ ok: false, error: 'Invalid email' });
    if (data.form === 'job-application' && !isLink(data.resumeLink)) {
      return json({ ok: false, error: 'Invalid resume link' });
    }

    lock.waitLock(20000);
    const sheet = getSheet(form);
    const row = [Utilities.formatDate(new Date(), TIME_ZONE, 'yyyy-MM-dd HH:mm:ss')].concat(
      form.fields.map(([key]) => cell(data[key])),
    );
    sheet.appendRow(row);
    lock.releaseLock();

    notify(form, row);
    return json({ ok: true });
  } catch (err) {
    console.error(err);
    return json({ ok: false, error: 'Could not save the submission' });
  }
}

/** Opening the Web app URL in a browser shows this — a quick way to confirm the deployment works. */
function doGet() {
  return json({ ok: true, message: 'A&N Software Solutions form receiver is running.' });
}

/** Returns the form's tab (creating it if missing) and adds a bold, frozen header row when the tab is empty. */
function getSheet(form) {
  const book = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName(form.sheet) || book.insertSheet(form.sheet);
  if (sheet.getLastRow() === 0) {
    const headers = headersOf(form);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function headersOf(form) {
  return ['Submitted at (IST)'].concat(form.fields.map(([, header]) => header));
}

/** Cleans a value for a cell: trims, limits length, and blocks spreadsheet formula injection. */
function cell(value) {
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  if (value === undefined || value === null) return '';
  let text = String(value).trim().slice(0, MAX_FIELD_LENGTH);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function isEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

function isLink(value) {
  return typeof value === 'string' && /^https:\/\/\S+$/.test(value.trim()) && value.length <= 500;
}

function notify(form, row) {
  if (!NOTIFY_EMAIL) return;
  try {
    const body = headersOf(form).map((header, i) => `${header}: ${row[i]}`).join('\n');
    MailApp.sendEmail(NOTIFY_EMAIL, `New website submission (${form.sheet}): ${row[1]}`, body);
  } catch (err) {
    console.error(err); // a failed email must never lose the saved row
  }
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}
