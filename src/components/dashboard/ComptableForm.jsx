/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
const ComptableForm = ({ comptables, setComptables, isOpen, setIsOpen, comptableModifie}) => {
  //États pour la creation de nouveaux comptables
  const [isModifier, setIsModifier] = useState(false);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [statut, setStatut] = useState("");
  const [systeme, setSysteme] = useState("");
  const [dateAjout, setDateAjout] = useState("");

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
    
  
      setIsOpen(false);
      
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
  if (isOpen) {
    setNom("");
    setPrenom("");
    setEmail("");
    setRole("");
    setStatut("");
    setSysteme("");
    setDateAjout("");
  }

  if (comptableModifie) {
    setNom(comptableModifie.nom);
    setPrenom(comptableModifie.prenom);
    setEmail(comptableModifie.email);
    setRole(comptableModifie.role);
    setStatut(comptableModifie.statut);
    setSysteme(comptableModifie.systeme);
    setDateAjout(comptableModifie.dateAjout.toISOString().slice(0, 10));
    setIsModifier(true);

  }

}, [comptableModifie, isOpen]);


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          {isModifier ? "Modifier Comptable" : "Ajouter Comptable"}
        </DialogTitle>
        <DialogDescription>
          {isModifier ? "Modifier les informations du comptable" : "Ajouter un nouveau comptable"}
        </DialogDescription>
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
              id="role"
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
            <Label htmlFor="systeme">systeme</Label>
            <Select id="systeme"  onValueChange={(value) =>
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
            <Select id="statut"  onValueChange={(value) =>
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
          <Button onClick={() => enregistrerModifications(comptableModifie.isModifier)}>
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
  )
}

export default ComptableForm