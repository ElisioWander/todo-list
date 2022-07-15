import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ModalContextProvider } from './Context/ModalContex'
import { ThemeProvider } from './Context/ThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
