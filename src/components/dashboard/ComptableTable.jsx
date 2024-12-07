/* eslint-disable react/prop-types */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";


const ComptableTable = ({ comptables, setIsOpen, setComptables,  setCompatableModifie }) => {
   
const supprimerComptable = (id) => {
  // Logique pour supprimer le comptable avec l'ID spécifique
  const comptablesFiltres = comptables.filter((c) => c.id !== id);
  setComptables(comptablesFiltres);
  
  console.log(`Supprimer le comptable avec ID : ${id}`);
};

const HandleModification = (id) => {
  const comptable = comptables.find((c) => c.id === id);
  setCompatableModifie(comptable);
  setIsOpen(true);
  console.log(`Modifier le comptable avec ID : ${id}`);
};

return (

  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Nom et Prénom</TableHead>
        <TableHead>Email</TableHead>
        <TableHead>Rôle</TableHead>
        <TableHead>Statut</TableHead>
        <TableHead>Système</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {comptables.map((c) => (
        <TableRow key={c.id}>
          <TableCell>{c.nom} {c.prenom}</TableCell>
          <TableCell>{c.email}</TableCell>
          <TableCell>{c.role}</TableCell>
          <TableCell>{c.statut}</TableCell>
          <TableCell>{c.systeme}</TableCell>
          <TableCell>
                    <div className="flex space-x-2">
                      <Button onClick={() => HandleModification(c.id)} variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => supprimerComptable(c.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
}

export default ComptableTable;
