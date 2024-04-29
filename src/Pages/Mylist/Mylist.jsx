// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
// import { FaTachographDigital } from "react-icons/fa6";

const Mylist = () => {
    const {user} = useContext(AuthContex);
    const [item,setItem] = useState([])
    console.log(user);
    useEffect(() =>{
     fetch(`http://localhost:5000/intour/${user?.email}`)
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
      });
    },[user])


    return (
      <div className="overflow-x-auto">

        {
          item.map( p =>{
            <div><h2>hello</h2></div>
          })
        }
  {/* <table className="table"> */}
    {/* head */}
    {/* <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {/* {
      item.map(p=>
        <tr key={p._id}>
        <th>{p.spot}</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      )
    }
      {/* row 2 */}
    
    {/* </tbody> */}
  {/* </table> */}
</div>
    );
};

export default Mylist;