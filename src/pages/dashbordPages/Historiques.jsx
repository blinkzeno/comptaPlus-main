/* eslint-disable no-unused-vars */
import  { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Table,TableHeader, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Historiques = () => {
  const [actions, setActions] = useState([
    {
      id: 1,
      systeme: "Système A",
      date: "2024-11-01 14:32",
      utilisateur: "Jean Dupont",
      type: "Ajout",
      description: "Ajout d'une pièce comptable",
      statut: "Succès",
    },
    {
      id: 2,
      systeme: "Système B",
      date: "2024-11-02 09:45",
      utilisateur: "Marie Curie",
      type: "Modification",
      description: "Modification du journal des ventes",
      statut: "Succès",
    },
    {
      id: 3,
      systeme: "Système A",
      date: "2024-11-03 12:20",
      utilisateur: "Louis Pasteur",
      type: "Suppression",
      description: "Suppression d'une entrée de journal",
      statut: "Échec",
    },
  ]);

  // États pour le filtre et la recherche
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSysteme, setFilterSysteme] = useState("Tous");
  const [filterType, setFilterType] = useState("Tous");

  // Gestion des filtres
  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredActions = actions.filter((action) => {
    return (
      (filterSysteme === "Tous" || action.systeme === filterSysteme) &&
      (filterType === "Tous" || action.type === filterType) &&
      action.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-8 space-y-6 min-h-screen">
      <h1 className="text-2xl font-bold">Historique des Actions</h1>

      {/* Barre de recherche et filtres */}
      <div className="flex justify-between items-center space-x-4">
        <Input
          placeholder="Rechercher une action..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/2"
        />
        <Select value={filterSysteme} onValueChange={setFilterSysteme} className="w-1/4">
          <SelectTrigger>
            <span>{filterSysteme}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tous">Tous les systèmes</SelectItem>
            <SelectItem value="Système A">Système A</SelectItem>
            <SelectItem value="Système B">Système B</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterType} onValueChange={setFilterType} className="w-1/4">
          <SelectTrigger>
            <span>{filterType}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Tous">Tous les types</SelectItem>
            <SelectItem value="Ajout">Ajout</SelectItem>
            <SelectItem value="Modification">Modification</SelectItem>
            <SelectItem value="Suppression">Suppression</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tableau des actions */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Système Comptable</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Utilisateur</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredActions.length > 0 ? (
            filteredActions.map((action) => (
              <TableRow key={action.id}>
                <TableCell>{action.systeme}</TableCell>
                <TableCell>{action.date}</TableCell>
                <TableCell>{action.utilisateur}</TableCell>
                <TableCell>{action.type}</TableCell>
                <TableCell>{action.description}</TableCell>
                <TableCell>
                  <Badge
                    variant={action.statut === "Succès" ? "success" : "destructive"}
                  >
                    {action.statut}
                  </Badge>
                </TableCell>
                <TableCell className="flex">
                  <Button variant="outline">Voir</Button>
                 
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="7" className="text-center">
                Aucune action trouvée.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Historiques;
