// import React from 'react';

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/gratis-png-ilustracion-de-viajes-mundiales-mapa-del-mundo-viajes-mundiales-viajes-globales.png"
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContex);
const handleSignOut =()=>{
logOut()
.then()
.catch()
}

    const navLink = <>

<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/tourist">Tourists Spot</NavLink></li>
    <li><NavLink to="/addedTour">Add Tourists Spot</NavLink></li>
  
    <li><NavLink to="/list">My List</NavLink></li>

  </>
    return (
        <div>
       <div className="navbar bg-gray-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <img src={logo} width={50} height={50} alt="" />
    <a className=" text-xl font-bold"> Visit Vista</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLink}
    </ul>
  </div>
  
  <div className="navbar-end">


<div className="tooltip mt-5" data-tip={user?.displayName||""}
>
  
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS Navbar component" src={user?.photoURL||""} /> 


      
    </div>
  </div>
</div>
<p>{user?.email}</p>


{
  user ?<button onClick={handleSignOut} className="btn mt-5 ">Sign Out</button> :
    <Link to="/login"><button className="btn ">Login</button></Link>
}
</div>
<Link to='/register'><button type="button" className="btn">Register</button></Link>
</div>
</div> 
        
    );
};

export default Navbar;