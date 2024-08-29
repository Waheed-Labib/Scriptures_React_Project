import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SurahProvider from './contexts/SurahProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SurahProvider>
      <App />
    </SurahProvider>
  </StrictMode>,
)
