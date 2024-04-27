// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
// import { useState } from "react";

const Home = () => {
    const tours = useLoaderData();
    // const [dataLength ,setDataLength] = useState(6);
    return (
        <div>
            <div>
            <h2 className="text-center text-3xl font-bold">Tourists Spots</h2>
            
            </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mx-10">
           {
                tours.slice(0,6).map(tour =><Card key={tour._id}
                tour={tour}></Card>)
            }
           </div>
           </div>
    );
};

export default Home;