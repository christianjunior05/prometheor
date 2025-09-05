
const Footer=()=> {
  return (
      <div className=" bg-blue text-white  p-10  ">

        <div className=" flex max-md:flex-col max-lg:space-y-5 flex-wrap justify-between items-start " >
      <ul  className=" ">
          <li className="mb-5"><img src="/logo.png" alt=" logo" /></li>
          <li className="mb-5">Email : contact@educompetence.fr</li>
          <li className="mb-5"> Telephone : 01.23.45.67.89 </li>
          <li className="mb-5"> Devenir conseillère ? </li>
        </ul>

        <ul className="  ">
          <li className="mb-5">Lien utiles </li>
          <li className="mb-5">CGV</li>
          <li className="mb-5"> Politique de confidentialité </li>
          <li className="mb-5"> Plan du site</li>
        </ul>


        <ul className="  ">
          <li className="mb-5">Support </li>
          <li className="mb-5">Contactez-nous </li>
        
        </ul>

         <div className=" ">
          <ul>
            <li className="mb-5">Newsletter</li>
            <li className="mb-5">Inscrivez-svous à la newsletter pour restez informés !</li>
          </ul>
          <form action="" className=" w-80 bg-white flex rounded-full p-1 ">
            <input type="email" name="" id="" placeholder=" Adresse mail" className="  py-2 bg-transparent w-4/5 rounded-full placeholder:text-black text-black mx-5 outline-none" />
            <button className=" border bg-jauneOr w-40 rounded-full"> S'inscrire </button>
          </form>
         </div>
        </div>
       <img src="/appliFooter.png" alt="" className="my-10" />

       <span>© 2025 Educompétence | Tous droits réservés</span>
      </div>
  )
}
export default Footer 


