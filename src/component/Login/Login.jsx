import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import ggLogo from "/google.png"
import { AuthContext } from "../AuthProvider/AuthProvider";



const Login = () => {
   const {logIn,googleLogin} = useContext(AuthContext)
  const location = useLocation() ;

  console.log(location)
  const navigate = useNavigate() 
  const[showPass,setShowPass] =useState(false)
  const[logError,setLogerror]=useState('')
   const handleLogin = e =>{
    e.preventDefault()
    const email =e.target.Email.value;
    const password =e.target.Password.value;
    setLogerror('')
    logIn(email,password)
    .then( result => {

      toast.success('Login Successful', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        e.target.reset();
        navigate(location?.state ? location.state : '/');
      
    })
    .catch( error => {
      setLogerror(error.message)
      console.log(error.message)
    })
   }
   const handleGoogle =()=>{
    
    googleLogin()
    .then( result => {
      toast.success('Login Successful', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        navigate(location?.state ? location.state : '/');
      console.log(result.user)
    })
    .catch( error =>{
      console.log(error.message)
    })
  }
    return (
        <div className="hero min-h-[559px] bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPass? 'text' : 'password'} placeholder="password" name="Password" className="input input-bordered" required />
                <span className="relative -top-8 left-48" onClick={()=> setShowPass(!showPass)}>{
                  showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
                </span>
        
                <label className="label">
                  <p  className="label-text-alt text-base">New Here? Please <Link className="link link-hover text-blue-600 font-semibold" to="/register">Register</Link></p>
                </label>
              </div>
              {logError && <p className="text-red-500 w-52">{logError}</p>}
              <div className="form-control ">
                <button className="btn bg-blue-500 text-white">Login</button>
              </div>
            </form>
            <div onClick={handleGoogle} className="flex justify-center items-center mb-4 border rounded-2xl border-zinc-950 p-2  gap-2 w-52 mx-auto"> <img src={ggLogo} className="w-6" alt="" /> 
            <h1>Login With Google</h1></div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    );
};

export default Login;