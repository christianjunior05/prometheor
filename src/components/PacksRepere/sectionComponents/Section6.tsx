import Title from "../../Homepage/miniComponents/Title";
import Button from "../../Homepage/miniComponents/Button";

type Typage={
  image:string,
  text1:string,
  text2:string,
  icon:boolean,
  paragraphe1?:string,
  paragraphe2?:string,
  textbutton1:string,
  textbutton2?:string,
}
const Section6= ({ image,
  text1,
  text2,
  icon,
  paragraphe1,
  paragraphe2,
  textbutton1,
  textbutton2
}:Typage)=> {
    return ( <div className="  flex items-center justify-center space-x-10 max-sm:space-x-0 my-20 ">

  <div className=" size-96  rounded-xl">
    <img src={`/${image}`} alt="image" className="size-full object-cover rounded-xl "/>
  </div>
  <div className="   w-7/12 space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex flex-col ">
<Title text1={text1} text2={text2} />
{paragraphe1 && <p className="   " > {paragraphe1} </p> }
{paragraphe2 && <p className="  " > {paragraphe2} </p> }
<div className="space-x-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-x-0 max-sm:space-y-6 ">

    <Button text={textbutton1} icons={icon} />
 { textbutton2 && <Button text={textbutton2} icons={icon} />}
</div>

  </div>
          </div> );
}

export default Section6 ;