import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import RegistrationForm from './registrationForm'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="registration-Form" element={<RegistrationForm/>}/>
  </Routes> 

  
  </BrowserRouter>
)
