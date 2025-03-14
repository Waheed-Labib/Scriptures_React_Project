import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SurahListProvider from './contexts/SurahListProvider.jsx'
import SelectedTranslationsProvider from './contexts/SelectedTranslationsIdsProvider.jsx'
import AuthProvider from './contexts/authProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SurahListProvider>
        <SelectedTranslationsProvider>

          <App />

        </SelectedTranslationsProvider>
      </SurahListProvider>
    </AuthProvider>
  </StrictMode>,
)
