import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Saludo} from './Saludo.jsx'
import {Traducido} from './Saludotraducido.jsx'
import {Contenedor} from './contenedor.jsx' 
import { Contador } from './contador.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Contenedor>
    <Saludo nombre="Hola Usuario"/>
    <Traducido nombre="Mundo" idioma="gr"/>
    <Contador/>
    </Contenedor>
  </StrictMode>,

)
