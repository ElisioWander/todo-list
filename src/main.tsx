import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ModalContextProvider } from './Context/ModalContex'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
)
