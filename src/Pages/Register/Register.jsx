// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

const Register = () => {
    const {creatUser,updateUseprofile} = useContext(AuthContex);
   
   
    const handleRegister = e =>{
        e.preventDefault();
    console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        const photo = form.get('photo');

        console.log(email,name,password,photo);

        creatUser(email,password)
        .then(result =>{
          updateUseprofile(name,photo)
          
          .then(()=>{

            console.log("Updation complete",result.user);
            
            // toast.success("Register success");
            // navigate(location?.state?location.state: '/');

            
          })
        })
        .catch(error =>{
          console.error(error)
        })


    }

    return (
        <div >
        {/* <Helmet><title>Bella thorn| Register</title></Helmet> */}
      <h1 className="text-3xl my-10 text-center">Please Register</h1>
       <form onSubmit={handleRegister} className="card-body  mx-auto md:w-3/4 lg:w-1/2">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo url</span>
        </label>
        <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
      </div>
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
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
    <p className="text-center mt-4">Already have an accout?<Link className="text-green-800 font-bold" to="/login">Login</Link></p>

     </div>
    );
};

export default Register;