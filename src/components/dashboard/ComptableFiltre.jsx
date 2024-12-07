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
  const [filtreRole, setFiltreRole] = useState("Tous");
  const [filtreStatut, setFiltreStatut] = useState("Tous");

  const comptablesFiltres = comptables.filter(
    (comptable) =>
      (filtreRecherche === "" ||
        comptable.nom.toLowerCase().includes(filtreRecherche.toLowerCase()) ||
        comptable.email
          .toLowerCase()
          .includes(filtreRecherche.toLowerCase())) &&
      (filtreRole === "Tous" || comptable.role === filtreRole) &&
      (filtreStatut === "Tous" || comptable.statut === filtreStatut)
  );

  useEffect(() => {
    setComptablesFiltres(comptablesFiltres);
  }, [comptablesFiltres, filtreRecherche, filtreRole, filtreStatut, setComptablesFiltres]);

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
      <Select value={filtreRole} onValueChange={setFiltreRole}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Rôle" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Tous">Tous les rôles</SelectItem>
          <SelectItem value="Comptable">Comptable</SelectItem>
          <SelectItem value="Superviseur">Superviseur</SelectItem>
        </SelectContent>
      </Select>
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
