import { HiArrowRight } from "react-icons/hi2";
type Typage={
   text:string,
   icons?:boolean
}

const Button=({text , icons}:Typage)=> {
    return ( 
          <button className=" max-lg:text-xs text-white text-sm space-x-2   bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
  {text}   
{             icons &&     <HiArrowRight className="font-semibold text-lg  inline "/>
}       </button>
     );
}



export default Button;