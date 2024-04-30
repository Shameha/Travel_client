// import React from 'react';
import image from "../../assets/pexels-pixabay-54097.jpg"
import image1 from "../../assets/pexels-pixabay-208733.jpg"
import image2 from "../../assets/pexels-chaitaastic-1796715.jpg"
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";


const ExtraSection = () => {
    return (
       <div>
         <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto space-y-12">
		<Fade>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={image} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600"></span>
				<h3 className="text-3xl font-bold">Geography</h3>
				<p className="my-6 dark:text-gray-600">Spain shares borders with Portugal, France, Andorra, and Morocco. Its diverse geography includes mountains, plains, and beautiful coastline along the Mediterranean Sea, the Atlantic Ocean, and the Bay of Biscay.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		</Fade>

<Zoom>

		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src={image1} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join,  free</span>
				<h3 className="text-3xl font-bold">Culture</h3>
				<p className="my-6 dark:text-gray-600"> England has made significant contributions to world culture in literature, music, theater, and sports. The works of renowned authors like William Shakespeare, Charles Dickens, and Jane Austen have left a lasting impact on literature. English footbal is a beloved sport worldwide, and England Premier League is one of the most popular football leagues globally.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		</Zoom>
		<Zoom>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={image2} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">Join free</span>
				<h3 className="text-3xl font-bold">Design</h3>
				<p className="my-6 dark:text-gray-600">The Eiffel Tower is an iron lattice tower standing at 330 meters (1,083 feet) tall, making it one of the tallest structures in Paris. At the time of its construction, it was the tallest man-made structure in the world, holding that title until the completion of the Chrysler Building in New York City in 1930.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		</Zoom>
	</div>
</section>
       </div>
    );
};

export default ExtraSection;