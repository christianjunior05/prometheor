import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

// concerne la section " Rencontrez nos conseillers "
//DIV du block droit

const InfoProfile = () => {
  return (
    <div className=" flex items-center gap-5   ">
      <div className="text-lg    rounded-lg border  shadow-jauneOr/15 shadow-md h-full   ">
        <div className=" ">
          <img
            src="/photo6.png"
            alt=""
            className=" rounded-t-xl size-full object-cover "
          />
        </div>

        <div className="  p-2  ">
          <span className="font-lato text-xl text-blue">Virginie Colette</span>

          <ul className="leading-8  ">
            <li>
              {" "}
              <FiPhone className="text-jauneOr inline mr-1 " />{" "}
              <span>06 30 40 07</span>{" "}
            </li>
            <li>
              {" "}
              <MdOutlineEmail className="text-jauneOr inline mr-1 " />{" "}
              <span>virginie.colette@prometheor.fr</span>{" "}
            </li>
            <li>
              {" "}
              <MdOutlineLocationOn className="text-jauneOr inline mr-1 " />{" "}
              <span>Yveline</span>
            </li>
          </ul>
          <button className="text-jauneOr  ">
            {" "}
            <span>En savoir plus virginie </span>{" "}
            <HiArrowRight className="inline " />{" "}
          </button>
        </div>
      </div>

      <div className=" flex flex-col items-center gap-5">
        <IoIosArrowDown className="border text-3xl p-1 cursor-pointer rounded-full text-gray-400 border-gray-400" />
        <IoIosArrowDown className="border text-3xl p-1 cursor-pointer rounded-full text-blue border-blue" />
      </div>
    </div>
  );
};

export default InfoProfile;
