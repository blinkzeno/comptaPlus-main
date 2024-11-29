/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader,TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Historique = () => {
  // État pour les données des opérations
  const [operations, setOperations] = useState([
    {
      id: 1,
      date: "2024-11-01 14:32",
      utilisateur: "Jean Dupont",
      type: "Ajout",
      description: "Ajout d'une pièce comptable",
      statut: "Succès",
    },
    {
      id: 2,
      date: "2024-11-02 09:45",
      utilisateur: "Marie Curie",
      type: "Modification",
      description: "Modification du journal des ventes",
      statut: "Rejeté",
    },
  ]);

  // États pour la recherche et le filtre
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Tous");

  // Gestion des filtres
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredOperations = operations.filter((op) => {
    return (
      (filterType === "Tous" || op.type === filterType) &&
      op.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Historique des Opérations</h1>

      {/* Barre de recherche et filtre */}
      <div className="flex justify-between items-center space-x-4">
        <Input
          placeholder="Rechercher une opération..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/2"
        />
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-1/4">
            <span>{filterType}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tous">Tous</SelectItem>
            <SelectItem value="Ajout">Ajout</SelectItem>
            <SelectItem value="Modification">Modification</SelectItem>
            <SelectItem value="Suppression">Suppression</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table des opérations */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Utilisateur</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Statut</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOperations.length > 0 ? (
            filteredOperations.map((op) => (
              <TableRow key={op.id}>
                <TableCell>{op.date}</TableCell>
                <TableCell>{op.utilisateur}</TableCell>
                <TableCell>{op.type}</TableCell>
                <TableCell>{op.description}</TableCell>
                <TableCell>
                  <Badge
                    variant={op.statut === "Succès" ? "success" : "destructive"}
                    className={`${op.statut === "Succès" ? "bg-green-500" : "bg-red-500"}`}
                  >
                    {op.statut}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="5" className="text-center">
                Aucune opération trouvée.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Historique;
