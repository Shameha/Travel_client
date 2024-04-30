import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";


const TouristsSpot = () => {
    const tours = useLoaderData();
    const [sortedTours, setSortedTours] = useState(tours);

    const sortByCost = () => {
        const sortedTourists = [...sortedTours].sort((a, b) => a.cost - b.cost);
        setSortedTours(sortedTourists);
    };

    return (
        <div>
            <div className="dropdown lg:ml-28 mb-10">
                <div tabIndex={0} role="button" className="btn m-1">
                    Sort by
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a onClick={sortByCost}>Cost</a>
                    </li>
                </ul>
            </div>
             
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 lg:gap-10 md:gap-10  mx-10">
                {sortedTours.map(tour => <Card key={tour._id} tour={tour} />)}
            </div>
            
        </div>
    );
};

export default TouristsSpot;