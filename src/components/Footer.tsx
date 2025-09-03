import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Section 1: Company Info & Contact */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">Prometh</span>
                <span className="text-yellow-400">eor</span>
              </span>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p>Email: contact@prometheor.fr</p>
              <p>Téléphone: 01.23.45.67.89</p>
            </div>
            
            {/* Call to action */}
            <p className="text-sm">Devenir conseillère ?</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <FaFacebook className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              <FaLinkedin className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-yellow-400" />
            </div>
          </div>
          
          {/* Section 2: Useful Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liens utiles</h3>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:text-yellow-400">CGV</p>
              <p className="cursor-pointer hover:text-yellow-400">Politique de confidentialité</p>
              <p className="cursor-pointer hover:text-yellow-400">Plan du site</p>
            </div>
          </div>
          
          {/* Section 3: Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2 text-sm">
              <p className="cursor-pointer hover:text-yellow-400">Contactez-nous</p>
            </div>
          </div>
          
          {/* Section 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-sm">Inscrivez-vous à la newsletter pour restez informés !</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Adresse mail" 
                className="flex-1 px-3 py-2 rounded-l-full border border-yellow-400 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="px-4 py-2 bg-yellow-400 text-white rounded-r-full text-sm font-medium hover:bg-yellow-500 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 


