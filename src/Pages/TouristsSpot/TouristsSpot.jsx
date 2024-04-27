// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const TouristsSpot = () => {
const tours = useLoaderData();

    return (
        <div>
            <h1 className="text-3xl font-bold text-center">
               All tourist sports
            </h1>

            <details className="dropdown">
  <summary className="m-1 btn">Chose</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mx-10">
           {
                tours.map(tour =><Card key={tour._id}
                tour={tour}></Card>)
            }
           </div>
        </div>
    );
};

export default TouristsSpot;