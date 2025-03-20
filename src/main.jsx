import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Auth0Provider
        domain="dev-28ot3utuxggamnjt.us.auth0.com"
        clientId="fdabjn4vYxAZs7o8FAl51pBgONIlDGEZ"
        authorizationParams={{
          redirect_uri: "http://localhost:5173/home",
        }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
)
