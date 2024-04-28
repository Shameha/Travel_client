// import React from 'react';

import { useContext, useEffect } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
// import { FaTachographDigital } from "react-icons/fa6";

const Mylist = () => {
    const {user} = useContext(AuthContex);
    console.log(user);
    useEffect(() =>{
     fetch(`http://localhost:5000/tour/${user?.email}`)
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
      });
    },[user])


    return (
        <div>
        <h1>all list</h1>         
        </div>
    );
};

export default Mylist;