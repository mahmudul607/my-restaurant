import { Outlet } from "react-router-dom";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';





const Main = () => {
    return (
        <>
          
          
           <MainNavbar></MainNavbar>
         
            <Outlet></Outlet>
           
        </>
    );
};

export default Main;