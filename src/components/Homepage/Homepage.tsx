import { HiArrowRight } from "react-icons/hi2"
import Footer from "../footer"

export default function Homepage() {
  return (
    <div>
    <div className=" pl-20 place-content-center bg-header h-[500px] bg-no-repeat bg-cover bg-center">
        <div className="text-white  h-40 font-dmserif flex flex-col  justify-between ">
          <h1 className="text-4xl">La promesse d'une orientation choisie</h1>
          <p>Donnez à votre enfant les clés de sa réussite, en toute confiance. </p>
       <div className="  bg-jauneOr text-center place-content-center rounded-lg hover:bg-jauneOr/80  w-1/6 h-12  items-center justify-center  ">
                <a href="" className=" font-montserrat"> Découvrir nos offres  </a>
                 <HiArrowRight className="  inline "/>
       </div>
        </div>
    </div>

    <Footer/>
    </div>

  )
}
