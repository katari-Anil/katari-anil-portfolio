import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Seed Katari Anil's GitHub as the "dev activity" link for the tablet.
try {
  localStorage.setItem('df-dev-activity-link', 'https://github.com/katari-Anil')
} catch {
  /* localStorage unavailable */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
