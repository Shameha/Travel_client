// import React from 'react';

import { useLoaderData } from "react-router-dom";

const TouristsSpot = () => {
const tours = useLoaderData();

    return (
        <div>
            <h1>
                here all card:{tours.length}
            </h1>
        </div>
    );
};

export default TouristsSpot;