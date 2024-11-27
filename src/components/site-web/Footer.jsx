import logo from "@/assets/logo.png"
import { FacebookIcon, Instagram, LinkedinIcon, YoutubeIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="mb-8 flex items-center justify-center md:justify-start md:mb-0">
          <img src={logo} alt="logo" className="w-20 h-auto" />
          <p className="text-gray-400">
            Simplifiez votre gestion financière avec notre solution tout-en-un
          </p>
        </div>

        {/* Produits */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Produits</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Fonctionnalités
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Témoignages
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Entreprise */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Entreprise</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                À Propos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Réseaux Sociaux */}
        <div>
          <h2 className="text-lg font-semibold mb-4">New lister</h2>
          <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="votre Email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              S&apos;inscrire
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <YoutubeIcon className="w-6 h-6" /> 
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
             <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8">
        © 2023 Emmanuel AMELA. Tous les droits sont réservés.
      </div>
    </footer>
  );
}

export default Footer;
