// import React from 'react';
// import React from 'react';

import { useLoaderData } from "react-router-dom";
import CountryCard from "../CountryCard/CountryCard";

const Country = () => {
    const country = useLoaderData();
    // const [sortedTours, setSortedTours] = useState(tours);
    return (
        <div>
           <h1 className="text-center font-bold text-3xl mt-10">Country section</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10">


    {
        country.slice(0,6).map(country_side => <CountryCard key={country_side._id} country_side={country_side} ></CountryCard>)
    }
          </div>
        </div>
    );
};

export default Country;
