import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
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
  Edit, 
  Trash2, 
  Plus, 
  Search 
} from 'lucide-react';

// Type pour un comptable


const GestionComptables = () => {
  // État pour stocker la liste des comptables
  const [comptables, setComptables] = useState([
    {
      id: '1',
      nom: 'Dupont',
      prenom: 'Marie',
      email: 'marie.dupont@entreprise.com',
      role: 'Comptable',
      statut: 'Actif',
      dateAjout: new Date('2024-01-15')
    },
    {
      id: '2',
      nom: 'Martin',
      prenom: 'Jean',
      email: 'jean.martin@entreprise.com',
      role: 'Superviseur',
      statut: 'Actif',
      dateAjout: new Date('2023-11-20')
    }
  ]);

  // États pour les filtres et la recherche
  const [filtreRecherche, setFiltreRecherche] = useState('');
  const [filtreRole, setFiltreRole] = useState('Tous');
  const [filtreStatut, setFiltreStatut] = useState('Tous');

  // Fonction de suppression d'un comptable
  const supprimerComptable = (id) => {
    setComptables(comptables.filter(comptable => comptable.id !== id));
  };

  // Filtrage des comptables
  const comptablesFiltres = comptables.filter(comptable => 
    (filtreRecherche === '' || 
     comptable.nom.toLowerCase().includes(filtreRecherche.toLowerCase()) ||
     comptable.email.toLowerCase().includes(filtreRecherche.toLowerCase())) &&
    (filtreRole === 'Tous' || comptable.role === filtreRole) &&
    (filtreStatut === 'Tous' || comptable.statut === filtreStatut)
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Gestion des Comptables</CardTitle>
          <Button variant="default">
            <Plus className="mr-2" /> Ajouter un Comptable
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Zone de filtres et recherche */}
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
          <Select 
            value={filtreRole} 
            onValueChange={setFiltreRole}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Rôle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tous">Tous les rôles</SelectItem>
              <SelectItem value="Comptable">Comptable</SelectItem>
              <SelectItem value="Superviseur">Superviseur</SelectItem>
            </SelectContent>
          </Select>
          <Select 
            value={filtreStatut} 
            onValueChange={setFiltreStatut}
          >
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

        {/* Tableau des comptables */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom et Prénom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Date d&apos;ajout</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comptablesFiltres.map((comptable) => (
              <TableRow key={comptable.id}>
                <TableCell>{comptable.nom} {comptable.prenom}</TableCell>
                <TableCell>{comptable.email}</TableCell>
                <TableCell>{comptable.role}</TableCell>
                <TableCell>
                  <span className={
                    comptable.statut === 'Actif' 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }>
                    {comptable.statut}
                  </span>
                </TableCell>
                <TableCell>
                  {comptable.dateAjout.toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => supprimerComptable(comptable.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Message si aucun résultat */}
        {comptablesFiltres.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            Aucun comptable trouvé
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GestionComptables;