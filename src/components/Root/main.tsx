import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './nullstyle.css'
import './tailwind.css'

import { App } from '../App/App.tsx'

createRoot(document.getElementById('root')!).render(
  //comment cause of double auth
  //<StrictMode>
  <App />
  //</StrictMode>,
)
