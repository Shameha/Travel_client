// import React from 'react';
import Swal from 'sweetalert2'

const AddTouristsSpot = () => {
const handleTourist = e =>{
e.preventDefault();
const form = e.target;

const spot = form.spot.value;
const country = form.country.value;
const location = form.location.value;
const description = form.description.value;
const cost = form.cost.value;
const season = form.season.value;
const time = form.time.value;
const visitor = form.visitor.value;
const name = form.name.value;
const email = form.email.value;
const photo = form.photo.value;

const newTour = {spot,country,location,description,cost,season,time,visitor,name,email,photo}
console.log(newTour);
//send data
fetch('http://localhost:5000/tour',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(newTour)

})
.then( res=>res.json())
.then(data=>{
  console.log(data);
if(data.insertedId){
  Swal.fire({
    title: 'success',
    text: 'Tourists sopt are added',
    icon: 'success',
    confirmButtonText: 'Cool'
  })

}
})



}


    return (
        <div className="min-h-screen">
        <h1 className="text-3xl font-bold text-center mt-2">Tourist spots</h1>
        <p className="text-sm text-center mt-2" >A diverse range of places, including natural wonders, cultural and historical landmarks, architectural marvels, recreational facilities, and entertainment venues.</p>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
        
      <form onSubmit={handleTourist} className="card-body w-auto">
        {/* tourists spots,country nname */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">tourists spot name</span>
          </label>
          <input type="text" placeholder="tourists_spot" name="spot" className="input input-bordered w-full" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">country Name</span>
          </label>
          <input type="text" placeholder="country_Name" name="country" className="input input-bordered" required />
        </div>
       </div>
       {/* location,short discrition */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control  md:w-1/2">
          <label className="label">
            <span className="label-text">location</span>
          </label>
          <input type="text" placeholder="location" name="location" className="input input-bordered w-full" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">short description</span>
          </label>
          <input type="text" placeholder="short description" name="description" className="input input-bordered" required />
        </div>
       </div>
       {/* avarage cost,seasonality */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">average cost</span>
          </label>
          <input type="number" placeholder="average cost" name="cost" className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">seasonality</span>
          </label>
          <input type="text" placeholder="seasonality" name="season" className="input input-bordered" required />
        </div>
       </div>
       {/* travel tiime,visitors */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">travel_time</span>
          </label>
          <input type="text" placeholder="travel_time" name="time" className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">total Visitors Per Year</span>
          </label>
          <input type="text" placeholder="total Visitors Per Year" name="visitor" className="input input-bordered" required />
        </div>
       </div>
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            {/* name and email */}
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <input type="submit" value="Add tourist" className="btn btn-block bg-purple-400" />
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default AddTouristsSpot;