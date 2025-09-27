import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../Assets/Global/Scripts/root.jsx'
import AppRoutes from '../../Server/Routes/routes.jsx'
import '../Assets/Global/Styles/root.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)