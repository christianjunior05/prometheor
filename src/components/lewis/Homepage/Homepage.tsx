
import Footer from "../../Footer"
import Button from "../miniComponents/Button"
export default function Homepage() {
  return (
    <div>
    <div className=" pl-20 place-content-center bg-header h-[500px] bg-no-repeat bg-cover bg-center">
        <div className="  text-white   font-dmserif   ">
          <h1 className="text-5xl my-4 ">La promesse d'une orientation choisie</h1>
          <p className="text-xl my-6">Donnez à votre enfant les clés de sa réussite, en toute confiance. </p>
         <Button text=" Découvrir nos offres"  icons={true} />
        </div>
    </div>

    <Footer/>
    </div>

  )
}
