import { useLoaderData } from "react-router-dom";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Details = () => {
    const tour = useLoaderData();
    const{spot,country,location,description,cost,season,time,visitor,photo}= tour
    
    // const idInt = parseInt(id);
    // const tours = tour.find(tours => tours.id === idInt);
    
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{spot}</h1>
            <div className="py-6 flex gap-2">
            <FaLocationDot />
            <p className=" text-2xl">{country}</p>
            </div>
            <p>{description}</p>
        <div className="flex gap-20">
            <div className="flex gap-2 py-6">
            <FaLocationCrosshairs />
            <p>{location}</p>
            </div>
        <div className="py-6 flex gap-2">
        <TiWeatherCloudy />
        <p >{season}</p>
        </div>
        </div>
          <div className="flex gap-10">
            <div className="py-6 flex gap-2">
            <MdOutlineAttachMoney />
          <p>{cost}</p>
            </div>
            <div className="py-6 flex gap-2">
            <FaPeopleGroup />
            <p >{visitor}</p>
            </div>
            <div className="py-6 flex gap-2" >
            <MdAccessTime />
            <p>{time}</p>
            </div>
          </div>

          </div>
        </div>
      </div> 
    );
};

export default Details;