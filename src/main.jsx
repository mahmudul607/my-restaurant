import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './responsive.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router/Router.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   

      <RouterProvider router={Router} />
    
    
  </React.StrictMode>,
)
