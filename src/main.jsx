import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SurahListProvider from './contexts/SurahListProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SurahListProvider>
      <App />
    </SurahListProvider>
  </StrictMode>,
)
