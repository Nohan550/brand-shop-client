import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Marquee from "react-fast-marquee";
import Footer from "../component/Footer/Footer";

const Main = () => {
    return (
        <div className="">
           <div className="md:hidden">
           <Marquee style={{width:415}} speed={120} pauseOnHover={true} >
            <div className="text-xl flex   py-5 ">
           
               <p className="pr-5  ">VibeMos is the official distributer of</p>
               
              
               <p className=" pr-5  " >Apple,Samsung,Sony,Google,Intel  ETC</p>
               
               <p className="pr-5 ">Find Your best Deal at VibeMos</p>
            </div>
           
            </Marquee>
           </div>
            <div className="hidden md:block">
            <Marquee  speed={120} pauseOnHover={true} >
            <div className="text-2xl flex   py-5 ">
           
               <p className="pr-32  ">VibeMos is the official distributer of</p>
               
              
               <p className=" pr-32  " >Apple,Samsung,Sony,Google,Intel  ETC</p>
               
               <p className="pr-32 ">Find Your best Deal at VibeMos</p>
            </div>
           
            </Marquee>
            </div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;