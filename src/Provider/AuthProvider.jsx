// import React from 'react';

import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthContex = createContext(null)


const AuthProvider = ({children}) => {

const[user,setUser] = useState(null);
const [loading,setLoding] = useState(true);
const creatUser =(email,password) =>{
    setLoding(true);
    return createUserWithEmailAndPassword(auth,email,password)
}


const updateUseprofile=(name,image) =>{
    return updateProfile(auth.currentUser, {
         displayName:name, 
         photoURL:image
       })
 
 }

 const googleLogin = () =>{
    signInWithPopup(auth,provider)
    .then((result) => {
      const user = result.user;
    toast.success('login succssfully',user);
  console.log(user);

    }).catch((error) => {
    toast.error(error.massage)
    console.error(error);
    
    <ToastContainer />

    });
}
 

const signIn = (email,password) =>{
    setLoding(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut = () =>{
  setLoding(true);
  return signOut(auth);
}

useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth,currentUser =>{
  console.log("user in auth",currentUser);
  setUser(currentUser)
  setLoding(false)
 });
 return () =>{
  unsubscribe();
 }
},[])

const userInfo={
    user,
    loading,
    creatUser,
    signIn,
    logOut,
    updateUseprofile,
    googleLogin,
}


    return (
       <AuthContex.Provider value={userInfo}>
             {children}
       </AuthContex.Provider>
       
    );
  };

export default AuthProvider;