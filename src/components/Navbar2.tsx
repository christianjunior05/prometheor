import { HiOutlineLockClosed } from "react-icons/hi2"; 
import { FaGraduationCap } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar2() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-blue flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <FaGraduationCap className="w-6 h-6 text-yellow-400" />
        <span className="text-xl font-bold text-white">
          <span>Prometh</span>
          <span className="text-yellow-400">eor</span>
        </span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-8 text-white text-sm font-medium">
        <li>
          <Link 
            to="/" 
            className={`cursor-pointer hover:text-yellow-400 transition-colors ${isActive('/') ? 'text-yellow-400' : ''}`}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link 
            to="/qui-sommes-nous-2" 
            className={`cursor-pointer hover:text-yellow-400 transition-colors ${isActive('/qui-sommes-nous-2') ? 'text-yellow-400' : ''}`}
          >
            Nos préparations
          </Link>
        </li>
        <li>
          <Link 
            to="/formations-adultes" 
            className={`cursor-pointer hover:text-yellow-400 transition-colors ${isActive('/formations-adultes') ? 'text-yellow-400' : ''}`}
          >
            Formations adultes certifiées
          </Link>
        </li>
        <li>
          <Link 
            to="/qui-sommes-nous" 
            className={`cursor-pointer hover:text-yellow-400 transition-colors ${isActive('/qui-sommes-nous') ? 'text-yellow-400' : ''}`}
          >
            Qui sommes-nous ?
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={`cursor-pointer hover:text-yellow-400 transition-colors ${isActive('/contact') ? 'text-yellow-400' : ''}`}
          >
            Contact
          </Link>
        </li>
        <li className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400 transition-colors">
          <HiOutlineLockClosed className="w-4 h-4" />
          <span>Connexion</span>
        </li>
      </ul>
    </nav>
  )
}
