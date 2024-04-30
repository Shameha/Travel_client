// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useTypewriter } from "react-simple-typewriter";
// import { FaTachographDigital } from "react-icons/fa6";

const Mylist = () => {
    const {user} = useContext(AuthContex);
    const [item,setItem] = useState([])
    console.log(item);

    useEffect(() =>{
     fetch(`https://assingment-lyart.vercel.app/intour/${user?.email}`)
      .then(res=>res.json())
      .then(data =>{
        console.log(data);
        setItem(data)
      });
    },[user?.email])

const handleDelete =id=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://assingment-lyart.vercel.app/delete/${id}`,
{
   method:'DELETE',
  // headers:{
  //   'content-type':'application/json'
  // },
  // body:JSON.stringify(info)

}

)
.then(res=>res.json())
.then(data=>{
  // console.log(data);
  if(data.deleteCount>0){
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
})
}
      
    });
}

const [text] = useTypewriter({
  words: ['place',
  'country',
  'Cost',
  'Season',
  ],
  loop: 0
})


    return (
      <div className="overflow-x-auto">

      <h1 className="text-center">This Table represent |{text} </h1>

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
    <div className="lg:flex md:flex grid gap-5">
    <Link to={`/update/${p._id}`}><button className="btn btn-accent">Update</button></Link>
    <button onClick={()=> handleDelete(p._id)} className="btn btn-secondary">Delete</button>

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