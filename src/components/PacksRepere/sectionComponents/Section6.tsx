import Title from "../../Homepage/miniComponents/Title";
import Button from "../../Homepage/miniComponents/Button";

type Typage={
  image:string,
  text1:string,
  text2:string,
  icon:boolean
  textbutton1:string,
  textbutton2:string,
}
const Section6= ({ image,
  text1,
  text2,
  icon,
  textbutton1,
  textbutton2
}:Typage)=> {
    return ( <div className="flex items-center justify-center space-x-10 max-sm:space-x-0 my-20 flex-wrap">

  <div className=" size-96 rounded-xl">
    <img src={`/${image}`} alt="image" className="size-full object-cover rounded-xl "/>
  </div>
  <div className="space-y-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center ">
<Title text1={text1} text2={text2} />
<div className="space-x-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:space-x-0 max-sm:space-y-6 ">

    <Button text={textbutton1} icons={icon} />
<Button text={textbutton2} icons={icon} />
</div>

  </div>
          </div> );
}

export default Section6 ;