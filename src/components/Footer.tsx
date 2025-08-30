import Button from "./lewis/miniComponents/Button"
const Footer=()=> {
  return (
      <div className=" pl-20 place-content-center bg-footer my-10 h-[500px] bg-no-repeat bg-cover bg-center">
           <div className="  mb-5  w-2/5 h-80  py-5 px-10 bg-white/50 rounded-xl">
           <h2 className=" mb-5 font-dmserif text-5xl text-blue "> Prêt à passer à l’étape suivante ?</h2>
           <p className=" mb-5 font-lato text-">Choisissez dès maintenant l’un de nos conseillers pour définir ensemble la formule la plus adaptée.</p>
           <p className=" mb-5 font-lato ">Prendre un rendez-vous :</p>   
           <Button text="Trouvez un conseiller" icons={true} />

           </div>
       </div>
  )
}
export default Footer 


