import { Link, NavLink } from "react-router-dom";
import { SiBilibili } from "react-icons/si";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import logo from "/user.png"

const Header = () => {
  const {user,logOut} =useContext(AuthContext);
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
    <div className="navbar bg-blue-600 md:px-10 text-white">
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
        <div className="flex items-center gap-2 text-3xl font-semibold">
          <SiBilibili></SiBilibili> <h1>VibeMos</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-medium">{page}</ul>
      </div>
      <div className="navbar-end space-x-20">


      {
          user?
          <div className="w-10 flex gap-3  items-center ">
           <img className="rounded-full" src={user.photoURL ? user.photoURL: logo} alt="" />
           <h1 className="text-lg font-semibold">{user.displayName ? user.displayName : "User"}</h1>
        </div>

          :
            
            <div className="w-10">
        
            </div>
        }
      {
          user ?
          <button onClick={HandleLogOut} className="btn btn-outline btn-info text-xl font-medium">Logout</button>
          :
          <Link to="/login">
          <button className="btn btn-outline btn-info text-xl font-medium">Login</button>
        </Link>
        } 
      </div>
    </div>
  );
};

export default Header;
