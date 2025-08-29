import { HiArrowRight } from "react-icons/hi2"

const Footer=()=> {
  return (
      <div className=" pl-20 place-content-center bg-footer my-10 h-[500px] bg-no-repeat bg-cover bg-center">
           <div className="  flex flex-col justify-between  w-2/5 h-80  py-5 px-10 bg-white/50 rounded-xl">
           <h2 className="font-dmserif text-5xl text-blue "> Prêt à passer à l’étape suivante ?</h2>
           <p className="font-lato text-">Choisissez dès maintenant l’un de nos conseillers pour définir ensemble la formule la plus adaptée.</p>
           <p className="font-lato ">Prendre un rendez-vous :</p>
       <div className="  bg-jauneOr text-white text-center place-content-center rounded-lg hover:bg-jauneOr/80  w-1/2   h-12  items-center justify-center  ">
                <a href="" className="  font-montserrat"> Trouver un conseiller  </a>
                    <HiArrowRight className="inline"/>
                 </div>
            
           </div>
       </div>
  )
}
export default Footer 


