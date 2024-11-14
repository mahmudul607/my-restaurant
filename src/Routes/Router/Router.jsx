
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";

import ErrorPage from "../../components/ErrorPage/ErrorPage";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,

     
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        }
     
        
      
      ]
    }
    
  ]);



export default Router;