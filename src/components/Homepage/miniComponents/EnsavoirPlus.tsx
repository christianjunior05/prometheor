
import Coche from "./Coche";
import { HiArrowRight } from "react-icons/hi2";
// dans la section "nos solution d'orientation" de la page HomePage
type Typage ={
  titre1:string,
  titre2:string,
  objectif:string,
  text1:string,
  text2:string,
  text3?:string,
  image:string,

}


const EnsavoirPlus= (
{    titre1,
  titre2,
  objectif,
  text1,
  text2,
  text3,image}:Typage
)=> {
    return ( 
  //       <div className="w-80  max-md:mb-5   shadow-black/5 shadow-sm rounded-2xl     ">
  //   <div className="w-full rounded-t-2xl">
  //   <img src={image}  alt="" className="size-full rounded-t-2xl" />
  //   </div>
  //   <div className=" px-10 py-10  ">
  //     <h3 className=" text-start text-blue font-dmserif text-lg "> {titre1}  <span className="text-jauneOr "> {titre2} </span> :</h3>
  //     <p className="my-5  text-start text-sm ">
  //       <span className="text-jauneOr">Objectif :</span>
  //       <span> {objectif} </span>

  //     </p>
  //     <ul className=" text-xs leading-5">
  //        <Coche text2={text1}  />
  //        <Coche text2={text2} />
  //        <Coche text2={text3}   />
  //     </ul>
  //   </div>
  
  // <button className="bg-blue text-white w-full py-2 rounded-b-2xl  font-montserrat ">  En savoir plus <HiArrowRight className="inline"/> </button>

  //       </div>

<div className="w-80 min-h-[500px] max-md:mb-5 shadow-black/5 shadow-sm rounded-2xl flex flex-col">
  <div className="w-full rounded-t-2xl">
    <img src={image} alt="" className="size-full rounded-t-2xl" />
  </div>

  <div className="px-10 py-10 flex-1">
    <h3 className="text-start text-blue font-dmserif text-lg">
      {titre1} <span className="text-jauneOr"> {titre2} </span> :
    </h3>
    <p className="my-5 text-start text-sm">
      <span className="text-jauneOr">Objectif :</span>
      <span> {objectif} </span>
    </p>
    <ul className="text-xs leading-5">
      <Coche text2={text1} />
      <Coche text2={text2} />
      <Coche text2={text3} />
    </ul>
  </div>

  <button className="bg-blue text-white w-full py-2 rounded-b-2xl font-montserrat">
    En savoir plus <HiArrowRight className="inline" />
  </button>
</div>


   
     );
}

export default EnsavoirPlus ;