// import React from 'react';

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div >
        
        <h1 className="text-3xl my-7 text-center">Please Login</h1>
         <form className="card-body  mx-auto md:w-3/4 lg:w-1/2">
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
          <input type={(open === false)? "password":"text"}placeholder="password" name="password" className="input input-bordered" required />
          <div className="text-xl absolute top-10 right-5">
         {/* {
          (open === false)?<FaEyeSlash onClick={toggle} />:<IoEyeSharp onClick={toggle}  />
         } */}
         
         
          
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
     {/* <Button></Button> */}
     </div>
      <p  className="text-center mt-4"> Do not have an account <Link className="text-green-800 font-bold" to="/register">Register</Link></p>
      {/* <ToastContainer /> */}
       </div>
    );
    
};

export default Login;