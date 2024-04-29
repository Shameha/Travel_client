// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";
// import { useState } from "react";

const TouristsSpot = () => {
const tours = useLoaderData();

    const [tourists, setTourists] = useState(tours);
    const [sortedBy, setSortedBy] = useState(""); 

    // Function to sort 
    const sortByAverageCost = () => {
        const sortedTourists = [...tourists].sort((a, b) => a.cost - b.cost);
        setTourists(sortedTourists);
        setSortedBy("average_cost");
    };

    //handle sorting
    const handleSort = (type) => {
        if (type === "average_cost") {
            sortByAverageCost();
        }
        
    };


    return (
        <div>
            <h1 className="text-3xl font-bold text-center">
               All tourist sports
            </h1>
            <div className="dropdown lg:ml-28 mb-10">
                <div tabIndex={0} role="button" className="btn m-1">
                    Sort by
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleSort("average_cost")}>
                        <a>Average Cost</a>
                    </li>
                    
                </ul>
            </div>
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