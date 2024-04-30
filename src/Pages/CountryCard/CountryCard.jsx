// import React from 'react';

const CountryCard = ({country_side}) => {
    const{image,description,country} = country_side;
    return (
    
            <div className="card w-96 bg-base-100 shadow-xl mt-10">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{country}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="btn btn-primary">See more spots</button>
    </div>
  </div>

        </div>
    );
};

export default CountryCard;