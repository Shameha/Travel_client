import { FaDollarSign } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdAccessTime } from "react-icons/md";
import { GiCongress } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

const Card = ({ tour }) => {
    const { spot, cost, season, time, visitor, photo, _id } = tour;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
<Zoom>
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex gap-2">
                    <ImLocation />
                    <h2 className="card-title">{spot}</h2>
                </div>

                <div className="flex gap-20">
                    <div className="flex gap-2">
                        <FaDollarSign />
                        <p>{cost}</p>
                    </div>
                    <div className="flex gap-2">
                        <TiWeatherPartlySunny />
                        <p>{season}</p>
                    </div>
                </div>
                
                <div className="flex gap-20">
                    <div className="flex gap-2">
                        <MdAccessTime />
                        <p>{time}</p>
                    </div>
                    <div className="flex gap-2">
                        <GiCongress />
                        <p>{visitor}</p>
                    </div>
                </div>
                
                <div className="card-actions justify-center">
                    <Link to={`/detail/${_id}`}>
                        <button className="btn bg-blue-300">View Details</button>
                    </Link>
                </div>
            </div>
            </Zoom>
        </div>
    );
};

export default Card;