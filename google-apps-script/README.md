# Contact & job forms → Google Sheets

Each Contact page and Jobs page submission is saved as a new row in one Google Sheet:

| Website form | Sheet tab |
|---|---|
| Contact page | `contactus` |
| Jobs page (job application) | `jobs` |

Candidates share their resume as a Google Drive, OneDrive or Dropbox link, saved in the **Resume link** column.

```
Website form ──POST (JSON)──▶ Google Apps Script Web app ──▶ Google Sheet (contactus / jobs tab)
```

## 1. Create the sheet and the script

1. Create a new Google Sheet (for example "A&N Website Enquiries") with the company Google account.
2. In the sheet, open **Extensions → Apps Script**.
3. Delete everything in `Code.gs` and paste the full contents of [`Code.gs`](Code.gs) from this folder.
4. Optional: `SHEET_ID` at the top can stay `''` because the script is opened from the sheet. Fill it in
   (the part of the sheet URL between `/d/` and `/edit`) only if you created the script separately at script.google.com.
5. Optional: to get an email for each enquiry, set `NOTIFY_EMAIL` at the top, e.g. `'info@ansoftwaresolutions.in'`.
6. Click **Save** (disk icon).

The script adds the header row to an empty `contactus` or `jobs` tab on the first submission, and creates the tab if it doesn't exist.

## 2. Deploy as a Web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**, then **Authorize access**, and choose your Google account.
   If you see "Google hasn't verified this app", click **Advanced → Go to (project name) (unsafe)**.
   This is your own script, so this is expected.
5. Copy the **Web app URL**. It looks like `https://script.google.com/macros/s/AKfy.../exec`.

To check it works, open that URL in a browser. You should see:
`{"ok":true,"message":"A&N Software Solutions form receiver is running."}`

## 3. Connect the website

**Local development:** create a file named `.env.local` in the project root (it is git-ignored):

```
VITE_FORMS_ENDPOINT=https://script.google.com/macros/s/AKfy.../exec
```

Restart `npm run dev`.

**Live site (Vercel):** Project → **Settings → Environment Variables** → add
`VITE_FORMS_ENDPOINT` with the same URL for **Production** (and Preview if you use it),
then **redeploy**. Vite reads the variable at build time, so a redeploy is required.

## Updating the script later

After editing the script, use **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy**.
This keeps the same Web app URL. Creating a *new deployment* instead gives a new URL,
and the website would need the new one.

## Notes

- Text starting with `=`, `+`, `-` or `@` is saved with a leading `'` so it can't run as a spreadsheet formula
  (a phone number like `+91 …` shows normally in the sheet).
- Submissions caught by the hidden spam field are accepted but not saved.
- Without `VITE_FORMS_ENDPOINT`, these forms are simulated in local development and shows an error
  on a production build, so a missing setting is never mistaken for a sent message.
