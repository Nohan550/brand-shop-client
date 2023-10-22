import { Link, useRouteError } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);


    return (
      <div className="flex justify-center items-center h-[500px] lg:h-[800px]">
         <div id="error-page" className=" text-center space-y-5">
    
           <h1 className="text-9xl flex justify-center"><MdErrorOutline></MdErrorOutline></h1>
      <p className="">
        <i className="text-8xl font-semibold">{error.status}</i> 
        
      </p>
      <p>
      <i className="text-3xl font-medium">{error.statusText}</i>
      </p>
      <Link to="/"><button className="btn  my-5 btn-neutral btn-lg btn-wide">Home</button></Link>
    </div>
      </div>
    );
};

export default ErrorPage;