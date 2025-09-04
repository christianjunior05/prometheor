
import { GoPlus } from "react-icons/go";
import Button from "../../Homepage/miniComponents/Button";

type Typage = {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  textButton: string;
  icons: boolean;
  image: string;
};

const Section3 = ({
  text1,
  text2,
  text3,
  text4,
  textButton,
  image,
  icons,
}: Typage) => {
  return (
    <div
      className={`${image} bg-cover bg-center h-[500px] flex flex-col justify-center my-20`}
    >
      <div className="space-y-5 ml-20 max-sm:mx-2 max-[1100px]:w-3/5 max-[740px]:w-4/5   w-2/5 shrink-0  p-6 rounded-xl bg-white/70">
        <h5 className="text-xl max-md:text-lg md:text-2xl font-dmserif text-blue">
          {text1}
        </h5>

        <ul className="text-blue text-sm space-y-2">
          <li className="max-md:text-xs" >
            <GoPlus className="text-jauneOr inline mr-1" /> {text2}
          </li>
          <li className="max-md:text-xs" >
            <GoPlus className="text-jauneOr inline mr-1" /> {text3}
          </li>
          <li className="max-md:text-xs" >
            <GoPlus className="text-jauneOr inline mr-1" /> {text4}
          </li>
        </ul>

        <Button text={textButton} icons={icons} />
      </div>
    </div>
  );
};

export default Section3;
