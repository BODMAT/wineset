import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './nullstyle.scss'
import { App } from '../App/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
