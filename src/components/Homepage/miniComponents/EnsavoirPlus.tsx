
import Coche from "./Coche";
import { HiArrowRight } from "react-icons/hi2";
// dans la section "nos solution d'orientation" de la page HomePage
const EnsavoirPlus= ()=> {
    return ( 
        <div className="w-80  max-md:mb-5   shadow-black/5 shadow-sm rounded-2xl     ">
    <div className="w-full rounded-t-2xl">
    <img src="/photo2.png" alt="" className="size-full rounded-t-2xl" />
    </div>
    <div className=" px-10 py-10 border">
      <h3 className=" text-start text-blue font-dmserif text-lg ">Pack <span className="text-jauneOr ">Repère</span> :</h3>
      <p className="my-5  text-start text-sm ">
        <span className="text-jauneOr">Objectif :</span>
        <span>apporter un premier éclairage complet et répondre à vos questions.</span>

      </p>
      <ul className=" text-xs leading-5">
         <Coche text2="Pour les collégiens qui veulent valider leur choix de voie (générale, technologique ou professionnelle)." />
         <Coche text2="Pour aider les lycéens à choisir leurs spécialités et répondre à des interrogations spécifiques" />
         <Coche text2=" Pour les parents qui s'interrogent sur l'orientation de leur enfant" />
      </ul>
    </div>
  
  <button className="bg-blue text-white w-full py-2 rounded-b-2xl  font-montserrat ">  En savoir plus <HiArrowRight className="inline"/> </button>

        </div>
   
     );
}

export default EnsavoirPlus ;