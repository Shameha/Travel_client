// import React from 'react';

import { useEffect, useState } from "react";

const Country = () => {
const [users,setUser]= useState()

    useEffect(()=>{

fetch('http://localhost:5000/country_side/country')
.then(user =>setUser(user.data))
.catch(err => console.error(err))


    },[])

    return (
        <div>
            {/* tourCollection.find({country: req.params.country}) */}
    country:{
        users.map(user=>{
 return <p key={user._id}>{user.country}</p>
        })
    }
        </div>
    );
};

export default Country;

