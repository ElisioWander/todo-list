import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { NewTaskModalProvider } from './Context/NewTaskModalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewTaskModalProvider>
    <App />
    </NewTaskModalProvider>
  </React.StrictMode>
)
