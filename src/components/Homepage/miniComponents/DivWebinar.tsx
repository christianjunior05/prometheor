
import { HiArrowRight } from "react-icons/hi2";
const  DivWebinaire=()=> {
    return (
        < div className=" flex flex-col h-72 w-60 rounded-md">
            <div className=" bg-gris rounded-t-md h-1/2">
                
            </div>
            <div className=" bg-white rounded-b-md h-1/2 p-4 leading-7 flex flex-col items-start justify-center">
                <span className="block font-roboto text-xs bg-blue text-white px-3 py-1 rounded-full">WEBINAR</span>
                <span className="block font-dmserif text-blue">Gestion du Stress</span>
                         <button className="text-jauneOr  " > <span>Lire l'article </span> <HiArrowRight className="inline " /> </button>   

            </div>
        </div>
    );
}

export default DivWebinaire;