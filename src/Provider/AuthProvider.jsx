// import React from 'react';

import { createContext } from "react";


export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {

const userInfo={}

    return (
       <AuthContex.Provider value={userInfo}>
             {children}
       </AuthContex.Provider>
    );
};

export default AuthProvider;