import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import DivTemoignage from "../../Homepage/miniComponents/DivTemoignage";


// cette section est un composant qui elle meme utilise des composants pour fonctionner
type Typage={
  
    img1:boolean,
    img2:boolean,
    img3:boolean,
    commentaire1:string,
    commentaire2:string,
    commentaire3:string,
    profession1:string,
    profession2:string,
    profession3:string,
    nom1:string,
    nom2:string,
    nom3:string,
    dimenssion ?:string

}

const Section4=({
     
    img1,
    img2,
    img3,
    commentaire1,
    commentaire2,
    commentaire3,
    profession1,
    profession2,
    profession3,
    nom1,
    nom2,
    nom3,
    dimenssion 
}:Typage)=> {
    return (  
        <div className=" bg-blue  py-14 my-20 ">
            <h3 className="text-3xl font-dmserif text-jauneOr mb-14 text-center "> Ce qu'ils disent de l'accompagnement</h3>
              <div className="flex items-center gap-10  justify-center ">
                           <FiArrowLeft className=" max-sm:hidden border size-10 p-2 shrink-0  rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />

                           <div className="flex gap-10  flex-wrap justify-center items-center ">
                
              <DivTemoignage className={`${dimenssion} max-sm:space-y-2  bg-white     p-5 text-sm   flex flex-col  justify-around `}
               commentaire={commentaire1} 
               image={img1} nom={nom1}  profession={profession1} />
             
              <DivTemoignage
              
              className={`${dimenssion} bg-white  max-sm:space-y-2   size-80  p-5  text-sm   flex flex-col  justify-around `}
              
              commentaire={commentaire2} 
                 image={img2}  nom={nom2}   profession={profession2}  />
           
              <DivTemoignage
               className={`${dimenssion} bg-white max-sm:space-y-2   size-80  p-5  text-sm  flex flex-col  justify-around    `}
               
               commentaire={commentaire3} 
                image={img3} nom={nom3}  profession={profession3}  />
               </div>
                      <FiArrowRight className=" max-sm:hidden border shrink-0 size-10 p-2 rounded-full text-jauneOr border-jauneOr cursor-pointer hover:bg-jauneOr hover:text-white transition-all " />

                    </div>
        </div>
    );
}

export default Section4;