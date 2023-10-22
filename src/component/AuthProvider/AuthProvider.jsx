import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
         
  const provider = new GoogleAuthProvider();
     const[user,setUser]=useState(null);
     const[loading,setLoading] =useState(true)

  const createUser = (email, password,name) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password,name);
  };

 const logIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
 }
  const googleLogin =()=>{
    return signInWithPopup(auth, provider)
  }
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth, inUser=>{
        // console.log('user',inUser)
        setUser(inUser);
        setLoading(false)
    })
   return ()=> {
    unSubscribe()
   }
  },[])
  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    googleLogin,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
