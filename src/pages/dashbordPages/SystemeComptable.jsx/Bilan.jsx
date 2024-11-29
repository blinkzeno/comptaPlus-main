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
  BookOpen, 
  Plus, 
  Search, 
  FileText, 
  BarChart2, 
  CheckCircle2 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';


const Bilan = () => {
  // États pour gérer l'interface
  const [bilans, setBilans] = useState([
    {
      id: "B001",
      titre: "Bilan Trimestriel Q1 2024",
      periodeDebut: "01/01/2024",
      periodeFin: "31/03/2024",
      dateCreation: "15/04/2024",
      statut: "En attente",
      actifs: 500000,
      passifs: 350000,
      resultatNet: 75000
    },
    {
      id: "B002",
      titre: "Bilan Annuel 2023",
      periodeDebut: "01/01/2023",
      periodeFin: "31/12/2023",
      dateCreation: "31/01/2024",
      statut: "Validé",
      actifs: 750000,
      passifs: 500000,
      resultatNet: 150000
    }
  ]);

  const [selectedBilan, setSelectedBilan] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isNewBilanOpen, setIsNewBilanOpen] = useState(false);

  // Données pour graphiques
  const repartitionActifPassif = [
    { name: 'Actifs', value: selectedBilan?.actifs || 0 },
    { name: 'Passifs', value: selectedBilan?.passifs || 0 }
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  const resultatParPeriode = [
    { 
      name: 'Q1 2024', 
      resultat: bilans[0].resultatNet 
    },
    { 
      name: 'Annuel 2023', 
      resultat: bilans[1].resultatNet 
    }
  ];

  // Fonctions de gestion
  const ouvrirDetailsBilan = (bilan) => {
    setSelectedBilan(bilan);
    setIsDetailsOpen(true);
  };

  const handleSupprimerBilan = (id) => {
    setBilans(bilans.filter(b => b.id !== id));
  };

  // Calculs statistiques
  const calculStatistiquesGenerales = () => {
    return {
      nombreBilans: bilans.length,
      totalActifs: bilans.reduce((acc, bilan) => acc + bilan.actifs, 0),
      totalPassifs: bilans.reduce((acc, bilan) => acc + bilan.passifs, 0),
      resultatGlobal: bilans.reduce((acc, bilan) => acc + bilan.resultatNet, 0)
    };
  };

  const statsGenerales = calculStatistiquesGenerales();

  return (
    <div className="p-6 space-y-6">
      {/* En-tête principal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2" /> Gestion des Bilans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p>Nombre de bilans : {statsGenerales.nombreBilans}</p>
            </div>
            <div>
              <p>Total Actifs : {statsGenerales.totalActifs.toLocaleString()} €</p>
            </div>
            <div>
              <p>Résultat Global : {statsGenerales.resultatGlobal.toLocaleString()} €</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions et filtres */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <Input 
            placeholder="Rechercher un bilan" 
            className="w-64" 
            icon={<Search />} 
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="valide">Validé</SelectItem>
              <SelectItem value="attente">En attente</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={() => setIsNewBilanOpen(true)}>
          <Plus className="mr-2" /> Créer un nouveau bilan
        </Button>
      </div>

      {/* Liste des bilans */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titre du Bilan</TableHead>
            <TableHead>Période</TableHead>
            <TableHead>Date de Création</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bilans.map((bilan) => (
            <TableRow key={bilan.id}>
              <TableCell>{bilan.titre}</TableCell>
              <TableCell>{`${bilan.periodeDebut} - ${bilan.periodeFin}`}</TableCell>
              <TableCell>{bilan.dateCreation}</TableCell>
              <TableCell>
                <Badge variant={bilan.statut === 'Validé' ? 'default' : 'secondary'}>
                  {bilan.statut}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => ouvrirDetailsBilan(bilan)}
                  >
                    Voir
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialogue de détails du bilan */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              Détails du Bilan : {selectedBilan?.titre}
            </DialogTitle>
            <DialogDescription>
              Période : {selectedBilan?.periodeDebut} - {selectedBilan?.periodeFin}
            </DialogDescription>
          </DialogHeader>
          
          {/* Résumé financier */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Résumé Financier</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Actifs :</strong> {selectedBilan?.actifs.toLocaleString()} €</p>
                  <p><strong>Passifs :</strong> {selectedBilan?.passifs.toLocaleString()} €</p>
                  <p><strong>Résultat Net :</strong> {selectedBilan?.resultatNet.toLocaleString()} €</p>
                </div>
              </CardContent>
            </Card>

            {/* Graphique de répartition Actif/Passif */}
            <Card>
              <CardHeader>
                <CardTitle>Répartition Actif/Passif</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={repartitionActifPassif}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {repartitionActifPassif.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Graphique des résultats */}
          <Card>
            <CardHeader>
              <CardTitle>Résultats par Période</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={resultatParPeriode}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="resultat" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Actions globales */}
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline">
              <FileText className="mr-2" /> Exporter PDF
            </Button>
            <Button>
              <CheckCircle2 className="mr-2" /> Valider le Bilan
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialogue de création de nouveau bilan */}
      <Dialog open={isNewBilanOpen} onOpenChange={setIsNewBilanOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Créer un Nouveau Bilan</DialogTitle>
          </DialogHeader>
          
          {/* Formulaire de création de bilan */}
          <div className="space-y-4">
            <Input placeholder="Titre du bilan" />
            <div className="grid grid-cols-2 gap-2">
              <Input type="date" placeholder="Date de début" />
              <Input type="date" placeholder="Date de fin" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Statut" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="attente">En attente</SelectItem>
                <SelectItem value="valide">Validé</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setIsNewBilanOpen(false)}>
              Annuler
            </Button>
            <Button>Créer le bilan</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Bilan;