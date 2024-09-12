import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SurahListProvider from './contexts/SurahListProvider.jsx'
import SelectedTranslationsProvider from './contexts/SelectedTranslationsIdsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SurahListProvider>
      <SelectedTranslationsProvider>
        <App />
      </SelectedTranslationsProvider>
    </SurahListProvider>
  </StrictMode>,
)
