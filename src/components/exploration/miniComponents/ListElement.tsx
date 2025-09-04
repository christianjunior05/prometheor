import { TbPointFilled } from "react-icons/tb";

const  ListElement=({text}:{text:string})=> {
    return ( 
              <li className=""> <TbPointFilled className="inline"/> <span> {text} </span> </li>


    );
}

export default ListElement;