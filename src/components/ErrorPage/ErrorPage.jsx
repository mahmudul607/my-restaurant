import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error =  useRouteError();


    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">

            <h1>Oops!</h1>
            <p>Sorry!, This page is under construction.</p>
            <p className="text-red-600">
                <i>{error.statusText || error.message}</i>
            </p>
            
        </div>
    );
};

export default ErrorPage;