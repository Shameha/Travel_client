// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
// import { FaTachographDigital } from "react-icons/fa6";

const Mylist = () => {
    const {user} = useContext(AuthContex);
    const [item,setItem] = useState([])
    console.log(item);

    useEffect(() =>{
     fetch(`http://localhost:5000/intour/${user?.email}`)
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
        setItem(data)
      });
    },[user?.email])

const handleDelete =_id=>{
console.log(_id);
}
    return (
      <div className="overflow-x-auto">

        {/* {
          item.map(p=>{
          return <p>{p.spot}</p>
          })
        } */}
         
  <table className="table">
    {/* head */}
 <thead>
      <tr>
        <th>place</th>
        <th>country</th>
        <th>Cost</th>
        <th>Season</th>
      </tr>
    </thead>
    <tbody>
      
     {
      item.map(p=>
        <tr key={p._id}>
        <th>{p.spot}</th>
        <td>{p.country}</td>
        <td>{p.cost}</td>
        <td>{p.season}</td>
           {/* row 2 */}
    <div className="flex gap-5">
    <Link to={`/update/${p._id}`}><button className="btn btn-accent">Update</button></Link>
    <button onClick={()=> handleDelete()} className="btn btn-secondary">Delete</button>

    </div>
      </tr>
      )
    }
   
    </tbody>
  </table>

</div>
    );
};

export default Mylist;