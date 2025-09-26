import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from '../../Server/Routes/routes.jsx'
import '../Assets/Global/Styles/root.css'
import '../Assets/Global/Scripts/root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)