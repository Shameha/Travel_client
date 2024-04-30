// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";
import Extra from "../Extra/Extra";
import ExtraSection from "../Extra/ExtraSection";
import { useTypewriter } from "react-simple-typewriter";
// import { useState } from "react";

const Home = () => {
    const tours = useLoaderData();
    
        const [text] = useTypewriter({
          words: ['France',
          'Italy',
          'Spain',
          'England',
          'Netherlands',
          'Switzerland'],
          loop: 0
        })
    
    // const [dataLength ,setDataLength] = useState(6);
    return (
        <div>
            <div className="mt-20 lg:mt-2 md:mt-20">
            <Banner></Banner>
            </div>
            <div className="mt-20">
            <h2 className="text-center text-3xl py-5 font-bold">Tourist spot </h2>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 mx-10">
           {
                tours.slice(0,6).map(tour =><Card key={tour._id}
                tour={tour}></Card>)
            }
           </div>
           </div>
           <h1 className="text-center font-bold text-3xl mt-10">Popular sides</h1>
           <Extra></Extra>
           <h1 className="text-start text-3xl py-5 font-bold mx-10">About the {text}</h1>
           <ExtraSection></ExtraSection>
           
           </div>
    );
};

export default Home;