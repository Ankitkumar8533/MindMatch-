import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CardProvider } from './context/cardsEmoji.jsx'

createRoot(document.getElementById('root')).render(
  <CardProvider>
   <App />
  </CardProvider>
    
  
)
