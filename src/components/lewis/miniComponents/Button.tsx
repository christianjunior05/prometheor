import { HiArrowRight } from "react-icons/hi2";
type Typage={
   text:string,
   icons?:boolean
}

const Button=({text , icons}:Typage)=> {
    return ( 
          <button className=" text-white    bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                <a href="" className="  "> {text}  </a>
{             icons &&     <HiArrowRight className="font-semibold text-xl  inline "/>
}       </button>
     );
}



export default Button;