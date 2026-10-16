import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource-variable/outfit'
import App from './App.jsx'
import './styles/global.css'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production pages are prerendered (scripts/prerender.mjs), so React takes over the existing
// markup; the dev server serves an empty #root and renders from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
