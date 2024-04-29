// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
// import { useState } from "react";

const Home = () => {
    const tours = useLoaderData();
    // const [dataLength ,setDataLength] = useState(6);
    return (
        <div>
            <Banner></Banner>
            <div className="mt-20">
            <h2 className="text-center text-3xl font-bold">Tourists Spots</h2>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mx-10">
           {
                tours.slice(0,6).map(tour =><Card key={tour._id}
                tour={tour}></Card>)
            }
           </div>
           </div>
           <h1 className="text-center font-bold text-3xl mt-10">Popular sides</h1>
           <Extra></Extra>
           </div>
    );
};

export default Home;