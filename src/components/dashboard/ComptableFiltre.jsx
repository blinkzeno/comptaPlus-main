/* eslint-disable react/prop-types */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

import { useEffect } from "react";
const ComptableFiltre = ({ comptables, setComptablesFiltres }) => {
  // États pour les filtres et la recherche
  const [filtreRecherche, setFiltreRecherche] = useState("");
  
  const [filtreStatut, setFiltreStatut] = useState("Tous");

  const comptablesFiltres = comptables.filter(
    (comptable) =>
      (filtreRecherche === "" ||
        comptable.nom.toLowerCase().includes(filtreRecherche.toLowerCase()) ||
        comptable.email
          .toLowerCase()
          .includes(filtreRecherche.toLowerCase())) &&
     
      (filtreStatut === "Tous" || comptable.statut === filtreStatut)
  );

  useEffect(() => {
    setComptablesFiltres(comptablesFiltres);
  }, [comptablesFiltres, filtreRecherche,  filtreStatut, setComptablesFiltres]);

  return (
    <div className="flex space-x-4 mb-4">
      <div className="flex items-center w-full">
        <Search className="absolute ml-3 text-gray-500" />
        <Input
          placeholder="Rechercher par nom ou email"
          className="pl-10 w-full"
          value={filtreRecherche}
          onChange={(e) => setFiltreRecherche(e.target.value)}
        />
      </div>
      
      <Select value={filtreStatut} onValueChange={setFiltreStatut}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Statut" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Tous">Tous les statuts</SelectItem>
          <SelectItem value="Actif">Actif</SelectItem>
          <SelectItem value="Inactif">Inactif</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ComptableFiltre;
