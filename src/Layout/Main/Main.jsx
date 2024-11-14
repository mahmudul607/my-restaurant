import { Outlet } from "react-router-dom";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import PreLoader from "../../components/PreLoader/PreLoader";





const Main = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        const timer = setTimeout(() =>{
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    },[])

    return (
        <>{
            loading ? <>
            <PreLoader></PreLoader>
            
            </> 
            : 
            <>
            <MainNavbar></MainNavbar>
         
            <Outlet></Outlet>
            
            </>
        }
          
          
           
           
        </>
    );
};

export default Main;