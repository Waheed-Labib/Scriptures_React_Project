import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SurahListProvider from './contexts/SurahListProvider.jsx'
import SelectedTranslationsProvider from './contexts/SelectedTranslationsIdsProvider.jsx'
import MsgProvider from './contexts/MsgProvider.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SurahListProvider>
        <SelectedTranslationsProvider>
          <MsgProvider>
            <App />
          </MsgProvider>
        </SelectedTranslationsProvider>
      </SurahListProvider>
    </AuthProvider>
  </StrictMode>,
)
