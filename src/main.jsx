import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppContextProvider from './contextApi/AppContext.jsx'
import makeServer from './mirage/server.js'
import { BrowserRouter } from 'react-router-dom'

makeServer();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </StrictMode>,
)
