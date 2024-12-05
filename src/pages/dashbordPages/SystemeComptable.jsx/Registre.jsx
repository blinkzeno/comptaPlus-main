/* eslint-disable no-unused-vars */
import  { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Book, 
  Plus, 
  Search, 
  FileText, 
  Edit, 
  Trash2 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Types de données




const Registre = () => {
  // États pour gérer l'interface
  const [registres, setRegistres] = useState([
    {
      id: "R001",
      nom: "Registre Principal",
      type: "Journal Général",
      dateCreation: "01/01/2024",
      statut: "Actif",
      description: "Registre principal des opérations comptables",
      comptablesAssocies: ["Jean Dupont", "Marie Martin"]
    },
    {
      id: "R002",
      nom: "Registre des Immobilisations",
      type: "Inventaire",
      dateCreation: "15/02/2024",
      statut: "Actif",
      description: "Suivi des immobilisations de l'entreprise"
    }
  ]);

  const [ecrituresRegistre, setEcrituresRegistre] = useState([
    {
      id: "E001",
      date: "15/03/2024",
      description: "Achat d'équipement",
      montant: 5000.00
    }
  ]);

  const [selectedRegistre, setSelectedRegistre] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isNewRegistreOpen, setIsNewRegistreOpen] = useState(false);

  // Fonctions de gestion
  const ouvrirDetailsRegistre = (registre) => {
    setSelectedRegistre(registre);
    setIsDetailsOpen(true);
  };

  const handleNouvauRegistre = () => {
    setIsNewRegistreOpen(true);
  };

  const handleSupprimerRegistre = (id) => {
    setRegistres(registres.filter(r => r.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* En-tête principal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Book className="mr-2" /> Gestion des Registres
          </CardTitle>
        </CardHeader>
        <CardContent>
         
           {
            registres.length > 0 ? (
             <div className='grid grid-cols-2 gap-4'>
               <div>
              <p>Nombre total de registres : {registres.length}</p>
            </div>
            <div>
              <p>Dernier registre ajouté : {registres[registres.length - 1].nom} 
                ({registres[registres.length - 1].dateCreation})</p>
            </div>
             </div>
            ) : (
              <p>Aucun registre disponible.</p>
            )
           }
          
        </CardContent>
      </Card>

      {/* Actions et filtres */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Input 
            placeholder="Rechercher un registre" 
            className="w-64" 
            icon={<Search />} 
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="actif">Actif</SelectItem>
              <SelectItem value="inactif">Inactif</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleNouvauRegistre}>
          <Plus className="mr-2" /> Ajouter un nouveau registre
        </Button>
      </div>

      {/* Liste des registres */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom du Registre</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date de Création</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
           {registres.length > 0 ?registres.map((registre) => (
            <TableRow key={registre.id}>
              <TableCell>{registre.nom}</TableCell>
              <TableCell>{registre.type}</TableCell>
              <TableCell>{registre.dateCreation}</TableCell>
              <TableCell>
                <Badge variant={registre.statut === 'Actif' ? 'default' : 'secondary'}>
                  {registre.statut}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => ouvrirDetailsRegistre(registre)}
                  >
                    Voir plus
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleSupprimerRegistre(registre.id)}
                  >
                    <Trash2 className="mr-2" /> Supprimer
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={5}>Aucun registre disponible</TableCell>
            </TableRow>
          )} 
        </TableBody>
      </Table>

      {/* Dialogue de détails du registre */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              Détails du Registre : {selectedRegistre?.nom}
            </DialogTitle>
            <DialogDescription>
              {selectedRegistre?.description}
            </DialogDescription>
          </DialogHeader>
          
          {/* Informations complètes du registre */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <strong>Type :</strong> {selectedRegistre?.type}
            </div>
            <div>
              <strong>Date de Création :</strong> {selectedRegistre?.dateCreation}
            </div>
            {selectedRegistre?.comptablesAssocies && (
              <div>
                <strong>Comptables Associés :</strong>
                <ul>
                  {selectedRegistre.comptablesAssocies.map(comptable => (
                    <li key={comptable}>{comptable}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Liste des écritures */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ecrituresRegistre.map((ecriture) => (
                <TableRow key={ecriture.id}>
                  <TableCell>{ecriture.date}</TableCell>
                  <TableCell>{ecriture.description}</TableCell>
                  <TableCell>{ecriture.montant.toLocaleString()} €</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="mr-2" /> Modifier
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Actions globales */}
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline">
              <FileText className="mr-2" /> Exporter
            </Button>
            <Button>Ajouter une écriture</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialogue de création de nouveau registre */}
      <Dialog open={isNewRegistreOpen} onOpenChange={setIsNewRegistreOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Créer un Nouveau Registre</DialogTitle>
          </DialogHeader>
          
          {/* Formulaire de création de registre */}
          <div className="space-y-4">
            <Input placeholder="Nom du registre" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Type de registre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="journal">Journal Général</SelectItem>
                <SelectItem value="inventaire">Inventaire</SelectItem>
                <SelectItem value="operations">Opérations Diverses</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Description" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="actif">Actif</SelectItem>
                <SelectItem value="inactif">Inactif</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setIsNewRegistreOpen(false)}>
              Annuler
            </Button>
            <Button>Créer le registre</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Registre;