


import { IoCheckmark } from "react-icons/io5";
import Button from "../../Homepage/miniComponents/Button";

type Typage = {
  image?: string;
  alt: string;
  paragraphe1: string;
  paragraphe2: string;
  textBlue: string;
  textOrange: string;
  list1: string;
  list2: string;
  list3?: string;
  textbutton: string;
};

const Section1 = ({
  image,
  alt,
  paragraphe1,
  paragraphe2,
  textBlue,
  textOrange,
  list1,
  list2,
  list3,
  textbutton,
}: Typage) => {
  return (
    <div className="flex justify-center items-center gap-20 my-32 flex-wrap">
      {/* Image */}
      <div className="size-96 max-lg:w-80 max-lg:h-80 max-md:w-64 max-md:h-64 bg-gris ">
       { image && <img src={image} alt={alt} className="size-full " /> }
      </div>

      {/* Texte */}
      <div className="w-1/2 max-lg:w-7/12 max-md:w-full space-y-4 p-5 rounded-lg bg-jauneOr/5 text-sm flex flex-col items-start justify-around">
       
   <p className="  text-3xl max-lg:text-2xl max-md:text-xl font-dmserif text-blue">
          {paragraphe1}
    </p>
         <div className=" space-y-5 ">

         
        <p className="text-base leading-7  max-md:text-sm">{paragraphe2}</p>
        <p className="text-blue font-dmserif text-2xl max-lg:text-xl max-md:text-lg">
          {textBlue}{" "}
          <span className="text-jauneOr">{textOrange}</span>
        </p>
         </div>
      

        <ul className="space-y-4 mb-3">
          <li className="flex">
            <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />{" "}
             {list1}
          </li>
          <li className="flex">
            <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />{" "}
            {list2}
          </li>
          {list3 && (
            <li className="flex">
              <IoCheckmark className="text-jauneOr inline size-5 max-md:size-4" />{" "}
              {list3}
            </li>
          )}
        </ul>

        <Button text={textbutton} />
      </div>
    </div>
  );
};

export default Section1;
