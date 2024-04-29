// import React from 'react';
import image from "../../assets/San_Sebastian_food.jpg"
import image1 from "../../assets/P1250424-1024x683.jpg"
import image2 from "../../assets/Historical-sites-Roman-Forts-HERO-credit-English-Heritage.jpg"
import image3 from "../../assets/Things_to_do_in_Lake_Como_Comer_See_Reisetipps+Image+2021-06-09+at+16.55.16+(1).jpeg"



const Extra = () => {
    return (
        <section className="py-6 dark:bg-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image1} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image2} />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src={image3} />
		</div>
	</div>
</section>
    );
};

export default Extra;