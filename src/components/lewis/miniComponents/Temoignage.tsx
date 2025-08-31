import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import DivTemoignage from "./DivTemoignage";
// section Temoignage d'anciens élèves

const Temoignage=() =>{
    return (


        <div className="flex items-center gap-10  justify-center my-20">
     <FiArrowLeft className="border  size-10 p-2 rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />
               <div className="flex gap-10 flex-wrap">
    
  <DivTemoignage commentaire="“Une aide constructive et enrichissante tant pour découvrir les formations que pour rédiger les lettres de motivation. Un immense merci !
Charles, élève de terminale”" image={true} nom="Charles" profession="Élève de terminale"  />
  <DivTemoignage commentaire="“Superbe expérience ! J’ai réalisé plusieurs entretiens
   et tests pour Parcoursup qui m’ont bien aidé pour l’orientation tant pour les spécialités 
   que pour les écoles.”" image={true} nom="Léa" profession="classe de terminale" />
  <DivTemoignage commentaire="Super conseillère qui a me suit depuis le début de mon lycée.
   Elle a su me donner les bons conseils ainsi que les bonnes préparations aux concours. 
   Je recommande vraiment son professionnalisme ainsi que sa gentillesse !"
    image={true} nom="Jules" profession="Élève de terminale" />
    
    
           </div>
  <FiArrowRight className="border  size-10 p-2 rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />
        </div>
     
     );
}

export default Temoignage;