// import React from 'react';

import { createContext, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

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


const updateUseprofile=(name,photo) =>{
    return updateProfile(auth.currentUser, {
         displayName:name, 
         photoURL:photo
       })
 
 }

 const googleLogin = () =>{
    signInWithPopup(auth,provider)
    .then((result) => {
      const user = result.user;
    // toast.success('login succssfully',user);
  console.log(user);

    }).catch((error) => {
    // toast.error(error.massage)
    console.error(error);
    });
}
 

const signIn = (email,password) =>{
    setLoding(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const userInfo={
    user,
    loading,
    creatUser,
    signIn,
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