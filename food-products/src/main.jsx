import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InputContext from '../context/InputContext.jsx'
import BarcodeContext from '../context/BarcodeContext.jsx'

createRoot(document.getElementById('root')).render(
  <BarcodeContext>

    <InputContext>

      <App />
    </InputContext>
  </BarcodeContext>

)
