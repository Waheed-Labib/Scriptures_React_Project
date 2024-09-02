import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SurahListProvider from './contexts/SurahListProvider.jsx'
import VersesInfoProvider from './contexts/VersesInfoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SurahListProvider>
      <VersesInfoProvider>
        <App />
      </VersesInfoProvider>
    </SurahListProvider>
  </StrictMode>,
)
