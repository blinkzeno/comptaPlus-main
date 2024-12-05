/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { TrashIcon, ArrowRightIcon } from 'lucide-react'; // Icônes pour les boutons
import { Link } from "react-router-dom";

const SystemeCard = ({ systeme }) => {
  const { id, nom, devise, dateCreation } = systeme;


  const handleSupprimer = () => {
    alert(`Supprimer le système ${nom}`);
  };

  return (
    <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{nom}</h3>
        <p className="text-sm text-gray-600">Devise : {devise}</p>
        <p className="text-sm text-gray-600">Créé le : {new Date(dateCreation).toLocaleDateString()}</p>
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between items-center">


          {/* Bouton Supprimer */}
          <Button
            onClick={handleSupprimer}
            variant="outline"
            color="red"
            className="flex items-center space-x-2 py-2 px-4 rounded-lg text-sm"
          >
            <TrashIcon className="h-5 w-5" />
            <span>Supprimer</span>
          </Button>
          {/* Bouton Entrer */}
          <Link to={`/dashboard/systeme-comptables/${id}`}>
          <Button
            
            variant="outline"
            color="blue"
            className="flex items-center space-x-2 py-2 px-4 rounded-lg text-sm"
          >
            <ArrowRightIcon className="h-5 w-5" />
            <span>Entrer</span>
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SystemeCard;