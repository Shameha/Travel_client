// import React from 'react';

import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivatRoute = ({children}) => {
    const {user,loading} =useContext(AuthContex)

if(loading){
    return <span className="loading loading-bars loading-lg"></span>
}

  if(user){
    return children;
}
    return <Navigate to="/login"></Navigate>
};

export default PrivatRoute;