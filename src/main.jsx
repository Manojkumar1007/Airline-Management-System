import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './auth/AuthContext'
import { FlightProvider } from './Helper/FlightContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <FlightProvider>
        <App />
      </FlightProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
