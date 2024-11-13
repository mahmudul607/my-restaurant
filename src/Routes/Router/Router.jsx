
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Portfolio from "../../Pages/Portfolio/Portfolio";






  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,

     
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/portfolio",
          element: <Portfolio></Portfolio>
        }
     
        
      
      ]
    }
    
  ]);



export default Router;