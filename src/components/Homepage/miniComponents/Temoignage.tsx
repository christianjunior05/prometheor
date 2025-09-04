import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import DivTemoignage from "./DivTemoignage";
// section Temoignage d'anciens élèves

const Temoignage=() =>{
    return (


//         <div className="flex   max-md:mx-5 max-md:gap-5 max-md:m-auto items-center     justify-between  my-20   ">
//      <FiArrowLeft className=" max-sm:hidden border size-10 p-2 shrink-0  rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />
//                <div className="flex max-md:gap-5 max-lg:justify-center  flex-wrap ">
    
//   <DivTemoignage className="bg-jauneOr/5 size-80 max-md:size-72 flex flex-col  justify-around p-5  shadow-jauneOr/20 shadow-lg  font-lato" commentaire="“Une aide constructive et enrichissante tant pour découvrir les formations que pour rédiger les lettres de motivation. Un immense merci !
//    Charles, élève de terminale”" image={false} nom="Charles" profession="Élève de terminale"  />
//   <DivTemoignage className="bg-jauneOr/5 size-80 max-md:size-72 flex flex-col justify-around p-5 shadow-jauneOr/20 shadow-lg  font-lato" commentaire="“Superbe expérience ! J’ai réalisé plusieurs entretiens
//    et tests pour Parcoursup qui m’ont bien aidé pour l’orientation tant pour les spécialités 
//    que pour les écoles.”" image={false} nom="Léa" profession="classe de terminale" />
//   <DivTemoignage className="bg-jauneOr/5 size-80 max-md:size-72 flex flex-col justify-around p-5  shadow-jauneOr/20 shadow-lg  font-lato" commentaire="Super conseillère qui a me suit depuis le début de mon lycée.
//    Elle a su me donner les bons conseils ainsi que les bonnes préparations aux concours. 
//    Je recommande vraiment son professionnalisme ainsi que sa gentillesse !"
//     image={false} nom="Jules" profession="Élève de terminale" />
    
    
//            </div>
//   <FiArrowRight className=" max-sm:hidden border shrink-0 size-10 p-2 rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />
//         </div>

<div className="flex p-5   max-md:mx-5 max-md:gap-5 max-md:m-auto items-center     justify-between  my-20   ">
     <FiArrowLeft className=" max-sm:hidden border size-10 p-2 shrink-0  rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />
               <div className="flex gap-5 max-[1140px]:flex-wrap max-[1140px]:justify-center ">
    
  <DivTemoignage className="bg-jauneOr/5 size-80 max-md:size-72 flex flex-col  justify-around p-5  shadow-jauneOr/20 shadow-lg  font-lato" commentaire="“Une aide constructive et enrichissante tant pour découvrir les formations que pour rédiger les lettres de motivation. Un immense merci !
   Charles, élève de terminale”" image={false} nom="Charles" profession="Élève de terminale"  />
  <DivTemoignage className="bg-jauneOr/5 size-80 max-md:size-72 flex flex-col justify-around p-5 shadow-jauneOr/20 shadow-lg  font-lato" commentaire="“Superbe expérience ! J’ai réalisé plusieurs entretiens
   et tests pour Parcoursup qui m’ont bien aidé pour l’orientation tant pour les spécialités 
   que pour les écoles.”" image={false} nom="Léa" profession="classe de terminale" />
  <DivTemoignage className="bg-jauneOr/5 size-80 max-md:size-72 flex flex-col justify-around p-5  shadow-jauneOr/20 shadow-lg  font-lato" commentaire="Super conseillère qui a me suit depuis le début de mon lycée.
   Elle a su me donner les bons conseils ainsi que les bonnes préparations aux concours. 
   Je recommande vraiment son professionnalisme ainsi que sa gentillesse !"
    image={false} nom="Jules" profession="Élève de terminale" />
    
    
           </div>
  <FiArrowRight className=" max-sm:hidden border shrink-0 size-10 p-2 rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />
        </div>
     
     );
}

export default Temoignage;