import  { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-auto mr-1" />
          <h1 className="text-xl font-bold text-blue-700">ComptaPlus</h1>
        </Link>

        {/* Bouton pour le menu (visible sur les petits écrans) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
         
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
         
        </button>

        {/* Navigation (visible sur les grands écrans) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              À propos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Bouton Connectez-vous (visible sur les grands écrans) */}
        <Link to="/connexion" className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Connectez-vous
        </Link>
      </div>

      {/* Menu déroulant (visible uniquement sur petits écrans) */}
      {isMenuOpen && (
        <ul className="mt-4 md:hidden bg-gray-100 p-4 rounded shadow-lg">
          <li className="mb-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-500">
              Accueil
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/about" className="block text-gray-700 hover:text-blue-500">
              À propos
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/contact" className="block text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </li>
          <Link to="/connexion" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Connectez-vous
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
