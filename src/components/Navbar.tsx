// import '../App.css'
// import { HiOutlineLockClosed } from "react-icons/hi2";
// import { Link } from "react-router-dom";
// import { CiMenuBurger } from "react-icons/ci";
// import { IoMdClose } from "react-icons/io";
// import { useState } from "react";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

  

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className=" bg-blue text-white font-lato relative z-50  ">
//       <div className="flex justify-between items-baseline p-7">
//         {/* Logo */}
//         <div className="w-48 max-md:block max-lg:hidden">
//           <img src="/logo.png" alt="Logo" className="w-full object-cover" />
//         </div>

//         {/* Liens Desktop */}
//      <ul className="  md:flex space-x-6 items-center text-xs lg:text-base   whitespace-nowrap">
//   <li className="hover:text-jauneOr transition-all cursor-pointer ">
//     <Link to="/"> Accueil</Link>

  
//   </li>
//   <li className=" menu  hover:text-jauneOr transition-all  cursor-pointer   ">

//    Nos offres d'orientation
//   <ul className=" ChildMenu    absolute z-20 text-white   leading-10 bg-blue w-44  rounded-md  ">
//       <li className="cursor-pointer pl-2    bg-blue hover:text-jauneOr transition-all   "><Link to="/trajectoire">Pack trajectoire </Link> </li>
//       <li className="cursor-pointer pl-2    bg-blue hover:text-jauneOr transition-all  "> <Link to="/exploration" >Pack exploration</Link>  </li>
//       <li className="cursor-pointer pl-2    bg-blue hover:text-jauneOr transition-all  "> <Link to="repere">Pack repere </Link> </li>
//       <li className="cursor-pointer pl-2      rounded-b-md   bg-blue hover:text-jauneOr transition-all  "> <Link to="/parcours" >Pack parcoursup 360</Link>  </li>
//     </ul>

//   </li>
//   <li className="menu  hover:text-jauneOr transition-all   space-y-5  cursor-pointer  ">
//     Nos stages

//     <ul className="absolute ChildMenu text-white    bg-blue   rounded-md ">
//       <li className="cursor-pointer hover:text-jauneOr p-2 rounded-md transition-all bg-blue ">Concours et test post Bac</li>
//     </ul>
//   </li>
//   <li className="hover:text-jauneOr transition-all cursor-pointer ">
//     Nos conseillers
//   </li> 
//   <li className="hover:text-jauneOr transition-all cursor-pointer ">Qui sommes-nous</li>
//   <li className="hover:text-jauneOr transition-all cursor-pointer ">Nous contacter</li>
//   <li className="hover:text-jauneOr transition-all cursor-pointer ">Blog</li>
//   <li className="flex items-center space-x-2 text-jauneOr cursor-pointer ">
//     <HiOutlineLockClosed />
//     <span>Connexion</span>
//   </li>
//     </ul>


//         {/* Bouton Burger Mobile */}
//         <button
//           className="text-3xl md:hidden hover:text-jauneOr"
//           onClick={toggleMenu}
//         >
//           <CiMenuBurger />
//         </button>
//       </div>

//       {/* Menu Mobile (slide depuis la droite) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-blue text-white shadow-lg transform transition-transform duration-300 ease-in-out
//         ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-gray-600">
//           <span className="text-lg font-bold">Menu</span>
//           <IoMdClose
//             className="text-2xl cursor-pointer hover:text-jauneOr"
//             onClick={toggleMenu}
//           />
//         </div>
//         <ul className="flex flex-col space-y-4 p-6">
//           <li onClick={toggleMenu}>
//             <Link to="/">Accueil</Link>
//           </li>
//           <li onClick={toggleMenu}>
//             <Link to="/repere">Offres d'orientation</Link>
//           </li>
//           <li onClick={toggleMenu}>
//             <Link to="/exploration">Stages</Link>
//           </li>
//           <li onClick={toggleMenu}>
//             <Link to="/trajectoire">Conseillers</Link>
//           </li>
//           <li onClick={toggleMenu}>Qui sommes-nous</li>
//           <li onClick={toggleMenu}>Nous contacter</li>
//           <li onClick={toggleMenu}>Blog</li>
//           <li className="flex items-center space-x-2 text-jauneOr" onClick={toggleMenu}>
//             <HiOutlineLockClosed />
//             <span>Connexion</span>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }



import '../App.css'
import { HiOutlineLockClosed } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null); // gérer sous-menus mobile

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (menu:string) =>
    setSubmenuOpen(submenuOpen === menu ? null : menu);

  return (
    <nav className="bg-blue text-white font-lato relative z-50">
      <div className="flex justify-between items-baseline p-7">
        {/* Logo */}
        <div className="w-48 max-md:block max-lg:hidden">
          <img src="/logo.png" alt="Logo" className="w-full object-cover" />
        </div>

        {/* Liens Desktop */}
        <ul className="hidden md:flex space-x-6 items-center text-xs lg:text-base whitespace-nowrap">
          <li className="hover:text-jauneOr transition-all cursor-pointer ">
            <Link to="/">Accueil</Link>
          </li>

          <li className="menu hover:text-jauneOr transition-all cursor-pointer relative">
            Nos offres d'orientation
            <ul className="ChildMenu absolute z-20 text-white leading-10 bg-blue w-44 rounded-md">
              <li className="cursor-pointer pl-2 bg-blue hover:text-jauneOr transition-all">
                <Link to="/trajectoire">Pack trajectoire</Link>
              </li>
              <li className="cursor-pointer pl-2 bg-blue hover:text-jauneOr transition-all">
                <Link to="/exploration">Pack exploration</Link>
              </li>
              <li className="cursor-pointer pl-2 bg-blue hover:text-jauneOr transition-all">
                <Link to="/repere">Pack repere</Link>
              </li>
              <li className="cursor-pointer pl-2 rounded-b-md bg-blue hover:text-jauneOr transition-all">
                <Link to="/parcours">Pack parcoursup 360</Link>
              </li>
            </ul>
          </li>

          <li className="menu hover:text-jauneOr transition-all cursor-pointer relative">
            Nos stages
            <ul className="absolute ChildMenu text-white bg-blue rounded-md">
              <li className="cursor-pointer hover:text-jauneOr p-2 rounded-md transition-all bg-blue">
                Concours et test post Bac
              </li>
            </ul>
          </li>

          <li className="hover:text-jauneOr transition-all cursor-pointer">
            Nos conseillers
          </li>
          <li className="hover:text-jauneOr transition-all cursor-pointer">
            Qui sommes-nous
          </li>
          <li className="hover:text-jauneOr transition-all cursor-pointer">
            Nous contacter
          </li>
          <li className="hover:text-jauneOr transition-all cursor-pointer">
            Blog
          </li>
          <li className="flex items-center space-x-2 text-jauneOr cursor-pointer">
            <HiOutlineLockClosed />
            <span>Connexion</span>
          </li>
        </ul>

        {/* Bouton Burger Mobile */}
        <button
          className="text-3xl md:hidden hover:text-jauneOr"
          onClick={toggleMenu}
        >
          {menuOpen ? <IoMdClose /> : <CiMenuBurger />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue text-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-600">
          <span className="text-lg font-bold">Menu</span>
          <IoMdClose
            className="text-2xl cursor-pointer hover:text-jauneOr"
            onClick={toggleMenu}
          />
        </div>

        <ul className="flex flex-col space-y-4 p-6">
          <li onClick={toggleMenu} className='cursor-pointer hover:text-jauneOr' >
            <Link to="/">Accueil</Link>
          </li>

          {/* Sous-menu Mobile : Open */}
          <li className=''>


            <button
              className="w-full text-left flex justify-between items-center cursor-pointer hover:text-jauneOr transition-all"
              onClick={() => toggleSubmenu("open")}
            >
              Nos offres d'orientation
              <span>{submenuOpen === "open" ? "-" : "+"}</span>
            </button>
            {submenuOpen === "open" && (
              <ul className="pl-4 mt-2 space-y-2 text-sm transition-all ">
                <li onClick={toggleMenu}  className='cursor-pointer hover:text-jauneOr transition-all'  >
                  <Link to="/trajectoire">Pack trajectoire</Link>
                </li>
                <li onClick={toggleMenu}  className='cursor-pointer hover:text-jauneOr transition-all'  >
                  <Link to="/exploration">Pack exploration</Link>
                </li>
                <li onClick={toggleMenu}  className='cursor-pointer hover:text-jauneOr transition-all'  >
                  <Link to="/repere">Pack repere</Link>
                </li>
                <li onClick={toggleMenu}  className='cursor-pointer hover:text-jauneOr transition-all'  >
                  <Link to="/parcours">Pack parcoursup 360</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Sous-menu Mobile : Ouvrir */}
          <li  className=''>
            <button
              className="w-full text-left flex justify-between items-center cursor-pointer hover:text-jauneOr"
              onClick={() => toggleSubmenu("ouvrir")}
            >
              Nos stages
              <span>{submenuOpen === "ouvrir" ? "-" : "+"}</span>
            </button>
            {submenuOpen === "ouvrir" && (
              <ul className="pl-4 mt-2 space-y-2 text-sm  ">
                <li onClick={toggleMenu} className="cursor-pointer hover:text-jauneOr" >Concours et test post Bac</li>
              </ul>
            )}
          </li>

          <li onClick={toggleMenu} className='cursor-pointer hover:text-jauneOr transition-all' >
            <Link to="/trajectoire">Nos conseillers</Link>
          </li>
          <li onClick={toggleMenu} className='cursor-pointer hover:text-jauneOr transition-all' >Qui sommes-nous</li>
          <li onClick={toggleMenu} className='cursor-pointer hover:text-jauneOr transition-all' >Nous contacter</li>
          <li onClick={toggleMenu} className='cursor-pointer hover:text-jauneOr transition-all' >Blog</li>
          <li
            className="flex items-center space-x-2 text-jauneOr "
            onClick={toggleMenu}
          >
            <HiOutlineLockClosed />
            <span>Connexion</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

