import { IoCheckmark } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";

// un petit composant  utilisé comme liste d'element avec icon checked en orange
// text2 du composant "EnsavoirPlus" de la section "nos solution" dans la page  Home page
// text3 fonction avec les icons en chapeau de diplome
const Coche= ({text , text2 ,text3}:{text?:string  ,text2?:string, text3?:string})=> {
    return (
        <>
{            text &&   <li className=" font-dmserif "><IoCheckmark className="inline text-jauneOr"/> <p className="inline"> {text} </p> </li>
}

{            text2 &&   <li className="mb-2  flex  "><GiCheckMark className="  text-jauneOr mr-2  "/>
<div className=" w-full "> <p className="  text-start    "> {text2} </p> 
</div  >
 
 </li>
}

{            text3 &&   <li className="  "> <i className="fa-solid fa-graduation-cap text-jauneOr mr-2"></i> <p className="inline"> {text3} </p> </li>
}
        </>
    );
}

export default Coche ;