import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
   const[regError,setRegError] =useState('')
   const[showPass,setShowPass] =useState(false)
  const {createUser} =useContext(AuthContext)
  const handleRegister = e =>{
        e.preventDefault()
         
         const email =e.target.Email.value;
         const password =e.target.Password.value;


         if(password.length <6){
          setRegError("Password should be atleast 6 characters");
          return;
         }
         else if(!/[A-Z]/.test(password)){
                  setRegError("Password must contain one Uppercase");
                  return;
         }
         else if(!/[!#$%&? "<<]/.test(password)){
               setRegError("Password must contain one special character");
                      return;
         }



           setRegError('')
        
      createUser(email,password)
       .then(result =>{
        toast.success("Successfully Registered", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          e.target.reset()

         console.log(result.user)
       })
      .catch((error) => {
      
       const errorMessage = error.message;
       setRegError(errorMessage) 
       // ..
     })
   
  }
  
    
   
    return (
        <div className="hero min-h-[559px] bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
      
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <form onSubmit={handleRegister} className="card-body">
          

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
                <span className="relative -top-8 left-52" onClick={()=> setShowPass(!showPass)}>{
                  showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
                </span>
                <label className="label">
                  <p className="label-text-alt text-base">Registered? Please <Link className="link link-hover text-blue-600 font-semibold" to="/login">Login</Link></p>
                </label>
              </div>
                     
              {
              regError && <p className="text-red-500 w-52">{regError}</p>
            }

              <div className="form-control">
                <button className="btn bg-blue-500 text-white">Register</button>
              </div>
            </form>

            
           <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    );
};

export default Register;