import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Закомментируйте StrictMode для разработки:
  // <StrictMode>
    <App />
  // </StrictMode>
)
