import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ComptableTable from "../../components/dashboard/ComptableTable";
import ComptableFiltre from "../../components/dashboard/ComptableFiltre";
import ComptableForm from "../../components/dashboard/ComptableForm";
import { Plus } from "lucide-react";
import { compatblesIems } from "../../lib/dashboardcontent";

const GestionComptables = () => {
  const [isOpen, setIsOpen] = useState(false);
  // État pour stocker la liste des comptables
  const [comptables, setComptables] = useState(compatblesIems);

  const [comptablesFiltres, setComptablesFiltres] = useState([]);

  const [comptableModifie, setCompatableModifie] = useState(null);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Gestion des Comptables</CardTitle>
            <Button onClick={() => setIsOpen(true)} variant="default">
              <Plus className="mr-2" /> Ajouter un Comptable
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Zone de filtres et recherche */}
          <ComptableFiltre
            comptables={comptables}
            setComptablesFiltres={setComptablesFiltres}
          />
          {/* Tableau des comptables */}
          <ComptableTable
            comptables={comptablesFiltres}
            setComptables={setComptables}
            setIsOpen={setIsOpen}
            setCompatableModifie={setCompatableModifie}
          />

          {/* Message si aucun résultat */}
          {comptablesFiltres.length === 0 && (
            <div className="text-center text-gray-500 py-4">
              Aucun comptable trouvé
            </div>
          )}
        </CardContent>
      </Card>
      <ComptableForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        comptables={comptables}
        setComptables={setComptables}
        comptableModifie={comptableModifie}
        setCompatableModifie={setCompatableModifie}
      />
    </>
  );
};

export default GestionComptables;
