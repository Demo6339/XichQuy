import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Assets/Global/Styles/root.css'
import '../Assets/Global/Scripts/root.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)