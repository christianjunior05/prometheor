import { HiOutlineLockClosed } from "react-icons/hi2"; 


export default function Navbar() {
  return (
   <nav className="bg-blue flex items-center justify-between p-5  ">
    <img src="/logo.png" alt="" />

<ul className=" flex text-sm  text-white items-center font-lato justify-between  w-9/12">
<li> Accueil</li>
<li> Nos  offres  d'orientation </li>
<li> Nos stages</li>
<li> Nos conseillers </li>
<li> Qui sommes-nous </li>
<li> Nous contacter </li>
<li> Blog</li>
<li> Nous contacter</li>
<li className="flex items-center   w-24 justify-evenly text-jauneOr">
    <HiOutlineLockClosed/>
   <span> Connexion</span>
</li>
    </ul>

    
   </nav>
  )
}
