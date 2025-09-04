import { HiArrowRight } from "react-icons/hi2";

type Typage={
    Title:string,
    text:string,
    textbutton:string,
    image:string
}
const Section5=({Title,text,textbutton ,image}:Typage)=>{
    return ( 
         <div className={` ${image} max-sm:pl-5   pl-20 place-content-center  my-10 h-[400px] bg-no-repeat bg-cover `} >
           <div className="  space-y-5 max-md:w-4/5  w-2/5   py-5 pl-10 bg-white/50 rounded-xl">
           <h2 className=" max-sm:text-3xl font-dmserif text-4xl text-blue "> {Title} </h2>
           <p className="  font-lato  text-sm"> {text} </p>
                     <button className=" text-white  max-sm:text-sm  bg-jauneOr py-3 px-5  font-montserrat font-semibold  rounded-lg hover:bg-jauneOr/80      ">
                         {textbutton}  
               <HiArrowRight className="font-semibold text-xl  inline "/>
             </button>

           </div>
  </div>

     );
}

export default Section5;