import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Trash2, Plus, Search } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useEffect } from "react";



const GestionComptables = () => {
  const [isOpen, setIsOpen] = useState(false);
  // État pour stocker la liste des comptables
  const [comptables, setComptables] = useState([
    {
      id: "1",
      nom: "Dupont",
      prenom: "Marie",
      email: "marie.dupont@entreprise.com",
      role: "Comptable",
      statut: "Actif",
      systeme: "systeme 1",
      dateAjout: new Date("11/01/2024"),
    },
    {
      id: "2",
      nom: "Martin",
      prenom: "Jean",
      email: "jean.martin@entreprise.com",
      role: "Superviseur",
      statut: "Actif",
      systeme: "systeme 2",
      dateAjout: new Date("11/01/2024"),
    },
  ]);

  // États pour les filtres et la recherche
  const [filtreRecherche, setFiltreRecherche] = useState("");
  const [filtreRole, setFiltreRole] = useState("Tous");
  const [filtreStatut, setFiltreStatut] = useState("Tous");

  //États pour la creation de nouveaux comptables
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [statut, setStatut] = useState("");
  const [systeme, setSysteme] = useState("");
  const [dateAjout, setDateAjout] = useState("");

//etat pour la modification des comptables
const [isModifier, setIsModifier] = useState(false);
const [comptableModifieId, setComptableModifieId] = useState(null);
  // Fonction de suppression d'un comptable
  const supprimerComptable = (id) => {
    setComptables(comptables.filter((comptable) => comptable.id !== id));
  };

  // Filtrage des comptables
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

  // fonction de creation de nouveaux comptables
  const ajouterComptable = () => {
    const nouveauComptable = {
      id: comptables.length + 1,
      nom,
      prenom,
      email,
      role,
      statut,
      systeme,
      //convertir la date en objet Date
      dateAjout: new Date(dateAjout),
    };
    console.log("voici la date a la creation du comptable",dateAjout)
    setComptables([...comptables, nouveauComptable]);
    setNom("");
    setPrenom("");
    setEmail("");
    setRole("");
    setStatut("");
    setSysteme("");
    setDateAjout("");

    setIsOpen(false);
    
  };

  const modifierComptable = (id) => {
    setComptableModifieId(id);
    const comptableModifie = comptables.find((comptable) => comptable.id === id);
    setNom(comptableModifie.nom);
    setPrenom(comptableModifie.prenom);
    setEmail(comptableModifie.email);
    setRole(comptableModifie.role);
    setStatut(comptableModifie.statut);
    setSysteme(comptableModifie.systeme);
    setDateAjout(comptableModifie.dateAjout.toISOString().slice(0, 10));
    setIsOpen(true);
    setIsModifier(true);
  };

  

  const enregistrerModifications = (id) => {
    setComptables(
      comptables.map((comptable) =>
        comptable.id === id
          ? { ...comptable, nom, prenom, email, role, statut, systeme, dateAjout: new Date(dateAjout) }
          : comptable
      )
    );
    setIsOpen(false);
    setIsModifier(false);
  };

  useEffect(() => {
    if(!isOpen){
      setNom("");
      setPrenom("");
      setEmail("");
      setRole("");
      setStatut("");
      setSysteme("");
      setDateAjout("");
      setIsModifier(false);
    }
  }, [isOpen]);



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

          {/* Tableau des comptables */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom et Prénom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead> Systeme</TableHead>
                <TableHead>Date d&apos;ajout</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comptablesFiltres.map((comptable) => (
                <TableRow key={comptable.id}>
                  <TableCell>
                    {comptable.nom} {comptable.prenom}
                  </TableCell>
                  <TableCell>{comptable.email}</TableCell>
                  <TableCell>{comptable.role}</TableCell>
                  <TableCell>
                    <span
                      className={
                        comptable.statut === "Actif"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {comptable.statut}
                    </span>
                  </TableCell>
                  <TableCell>{comptable.systeme}</TableCell>
                  <TableCell>
                    {comptable.dateAjout.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button onClick={() => modifierComptable(comptable.id)} variant="ghost" size="icon">
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
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ajouter un Comptable</DialogTitle>
            <DialogDescription>creer un Comptable</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label htmlFor="nom">Nom</Label>
                <Input
                  id="nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Nom"
                />
              </div>
              <div>
                <Label htmlFor="prenom">Prénom</Label>
                <Input
                  id="prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Prénom"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div>
                <Label htmlFor="role">Rôle</Label>
                <Select
                  onValueChange={(value) =>
                    setRole(value)
                  }

                  defaultValue={role !== ""  ? role : "" }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Rôle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Comptable">Comptable</SelectItem>
                    <SelectItem value="Superviseur">Superviseur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="role">systeme</Label>
                <Select  onValueChange={(value) =>
                    setSysteme(value)
                  }
                  defaultValue={systeme !== ""  ? systeme : "" } >
                  <SelectTrigger>
                    <SelectValue placeholder="systemes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="systeme 1">systeme 1</SelectItem>
                    <SelectItem value="systeme 2">systeme 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="statut">Statut</Label>
                <Select  onValueChange={(value) =>
                    setStatut(value)
                  }
                  defaultValue={statut !== ""  ? statut : "" }>
                  <SelectTrigger>
                    <SelectValue placeholder="Statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Actif">Actif</SelectItem>
                    <SelectItem value="Inactif">Inactif</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="dateAjout">Date d&apos;ajout</Label>
                <Input
                  type="date"
                  value={ dateAjout!=="" ? dateAjout : ""}
                  format = "dd/mm/yyyy"
                  onChange={(e) => setDateAjout(e.target.value)}
                  id="dateAjout"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Annuler
            </Button>
            {isModifier ? (
              <Button onClick={() => enregistrerModifications(comptableModifieId)}>
                Enregistrer les modifications
              </Button>
            ) : (
              <Button onClick={() => ajouterComptable()}>
                Enregistrer
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GestionComptables;
