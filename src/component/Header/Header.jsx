import { Link, NavLink } from "react-router-dom";
import { SiBilibili } from "react-icons/si";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext} from "react";
import logo from "/user.png"
import { MdOutlineLightMode,MdOutlineModeNight } from "react-icons/md";
import Marquee from "react-fast-marquee";
import useTheme from "../hook/useTheme";

const Header = () => {
  const {user,logOut} =useContext(AuthContext);
  const{changeMode,mode}=useTheme() ;
  const page = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-sky-900 text-white " : "bg-blue-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-sky-900 text-white" : "bg-blue-600"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-sky-900 text-white" : "bg-blue-600"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  
  const HandleLogOut = ()=>{
    logOut()
    .then()
    .catch()
}
  return (
    <>

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
    <div className="navbar bg-blue-600 md:pr-5 lg:px-5 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {page}
          </ul>
        </div>
        <div className="flex items-center gap-2 text-2xl md:text-3xl font-semibold">
          <SiBilibili></SiBilibili> <h1>VibeMos</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">{page}</ul>
      </div>
      <div className="navbar-end space-x-28 ">
      

      {
          user?
          <div className="w-8 md:w-10 flex gap-2  items-center ">
         
        <button onClick={changeMode} className="text-2xl"> {
          mode=="light"?<MdOutlineModeNight></MdOutlineModeNight> : <MdOutlineLightMode></MdOutlineLightMode>
         }</button>
             
           <img className="rounded-full" src={user.photoURL ? user.photoURL: logo} alt="" />
           <h1 className="text-lg font-semibold">{user.displayName ? user.displayName : "User"}</h1>
          
        </div>

          :
            
            <div className="w-10">
        
            </div>
        }
      {
          user ?
          <button onClick={HandleLogOut} className="btn btn-outline btn-info text-base md:text-xl btn-sm md:btn-lg font-medium">Logout</button>
          :
          <Link to="/login">
          <button className="btn btn-outline btn-info text-base md:text-xl btn-sm md:btn-lg font-medium">Login</button>
        </Link>
        } 
      </div>
    </div>
    </>
  );
};

export default Header;
