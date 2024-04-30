// import React from 'react';

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import Button from "./Button";
// import { IoEyeSharp } from "react-icons/io5";
// import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {

    const { signIn  } = useContext(AuthContex);
    const[open,setOpen] = useState(false);
    const location= useLocation();
    // console.log(location);
const navigate = useNavigate()


    const handleLogin = e =>{
        e.preventDefault();
    console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
      
          const password = form.get('password');
        console.log(email,password);


        signIn (email,password)
        .then(result =>{
          console.log(result.user);
          navigate(location?.state?location.state:'/')
        //   toast.success("Login sucessFully")
          //navigate
        //   navigate(location?.state?location.state: '/');
        })
        .catch(error =>{
          console.error(error)
        })
    
    }
    const toggle =() =>{
      setOpen(!open)
    }


    return (
        <div >
        
        <h1 className="text-3xl my-7 text-center">Please Login</h1>
         <form onSubmit={handleLogin} className="card-body  mx-auto md:w-3/4 lg:w-1/2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
<div className="relative">
<div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type={(open === false)? "password":"text"} placeholder="password" name="password" className="input input-bordered" required />
        <div className="text-xl absolute top-10 right-5">
       {
        (open === false)? <FaEye onClick={toggle} />: <FaEyeSlash onClick={toggle}  />
       } 
       
       
        
       </div>
       
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      
      
    </div>
</div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
     <div className=" mx-auto md:w-3/4 lg:w-1/2">
     <Button></Button>
     </div>
      <p  className="text-center mt-4"> Do not have an account <Link className="text-green-800 font-bold" to="/register">Register</Link></p>
      {/* <ToastContainer /> */}
       </div>
    );
    
};

export default Login;