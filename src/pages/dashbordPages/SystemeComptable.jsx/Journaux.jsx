/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
  DialogTitle 
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
  BookOpen, 
  FileText, 
  Plus, 
  Search, 
  Filter 
} from "lucide-react";

// Types de données




const Journaux = () => {
  // États pour gérer l'interface
  const [journaux, setJournaux] = useState([
    {
      id: "J001",
      nom: "Journal des Ventes",
      type: "Ventes",
      dateDebut: "01/01/2024",
      dateFin: "31/03/2024",
      nombreEcritures: 45,
      dernièreModification: "15/04/2024"
    },
    // Autres journaux simulés
  ]);

  const [ecrituresJournal, setEcrituresJournal] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Fonctions de gestion
  const ouvrirDetailsJournal = (journal) => {
    setSelectedJournal(journal);
    // Simulation de récupération des écritures
    setEcrituresJournal([
      {
        id: "E001",
        date: "15/03/2024",
        description: "Vente de produits",
        compteDebite: "411 - Clients",
        compteCredite: "706 - Ventes de produits",
        montant: 1500.00
      }
    ]);
    setIsDetailsOpen(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* En-tête principal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2" /> Consultation des Journaux
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p>Nombre total de journaux : {journaux.length}</p>
            </div>
            <div>
              <p>Dernier journal modifié : {journaux[0].nom}</p>
            </div>
            <div>
              <p>Total des écritures : {journaux.reduce((acc, j) => acc + j.nombreEcritures, 0)}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions et filtres */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Input 
            placeholder="Rechercher un journal" 
            className="w-64" 
            icon={<Search />} 
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type de journal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ventes">Ventes</SelectItem>
              <SelectItem value="achats">Achats</SelectItem>
              <SelectItem value="divers">Opérations Diverses</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>
          <Plus className="mr-2" /> Créer un nouveau journal
        </Button>
      </div>

      {/* Liste des journaux */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom du Journal</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Période</TableHead>
            <TableHead>Écritures</TableHead>
            <TableHead>Dernière Modification</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {journaux.map((journal) => (
            <TableRow key={journal.id}>
              <TableCell>{journal.nom}</TableCell>
              <TableCell>{journal.type}</TableCell>
              <TableCell>{`${journal.dateDebut} - ${journal.dateFin}`}</TableCell>
              <TableCell>{journal.nombreEcritures}</TableCell>
              <TableCell>{journal.dernièreModification}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => ouvrirDetailsJournal(journal)}
                  >
                    Voir plus
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
      {/* Dialogue de détails du journal */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              Détails du Journal : {selectedJournal?.nom}
            </DialogTitle>
          </DialogHeader>
          
          {/* Informations générales du journal */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <strong>Type :</strong> {selectedJournal?.type}
            </div>
            <div>
              <strong>Période :</strong> {selectedJournal?.dateDebut} - {selectedJournal?.dateFin}
            </div>
          </div>

          {/* Liste des écritures */}
         <div className='space-x-4 flex  w-full'>
          {/* tableau des credits */}
        <div className='w-1/2 '>
          <div>
            <h3 className=" text-center text-lg font-semibold mb-2">Ecritures de Crédit</h3>
          </div>
        <Table className="w-full  border">
            <TableHeader>
              <TableRow >
               
               
                <TableHead className="border">Compte credité</TableHead>
               
                <TableHead className="border">Montant</TableHead>
                <TableHead className="border">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ecrituresJournal.map((ecriture) => (
                <TableRow key={ecriture.id}>
                 
                
              
                  <TableCell>{ecriture.compteCredite}</TableCell>
                  <TableCell>{ecriture.montant.toLocaleString()} €</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Modifier
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
          {/* tableau des debits */}
          <div className='w-1/2 '>
          <div>
            <h3 className=" text-center text-lg font-semibold mb-2">Ecritures de Debit</h3>
          </div>
        <Table className="w-full border  ">
            <TableHeader>
              <TableRow>
        
                
                <TableHead>Compte Débité</TableHead>
               
                <TableHead>Montant</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ecrituresJournal.map((ecriture) => (
                <TableRow key={ecriture.id}>
                 
              
                  <TableCell>{ecriture.compteDebite}</TableCell>
                 
                  <TableCell>{ecriture.montant.toLocaleString()} €</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Modifier
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
         </div>

          {/* Actions globales */}
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline">
              <FileText className="mr-2" /> Exporter PDF
            </Button>
            <Button variant="outline">
              <FileText className="mr-2" /> Exporter Excel
            </Button>
        
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Journaux;