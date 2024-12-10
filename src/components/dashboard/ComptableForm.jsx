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


const ComptableForm = ({ comptables, setComptables ,isModifier, isOpen, setIsOpen, comptableModifie}) => {
  //États pour la creation de nouveaux comptables
 
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
 
  const [statut, setStatut] = useState("");
  


    // fonction de creation de nouveaux comptables
    const ajouterComptable = () => {
      const nouveauComptable = {
        id: comptables.length + 1,
        nom,
        prenom,
        email,
    
        statut,
       
     
        
      };
     
      setComptables([...comptables, nouveauComptable]);
    
  
      setIsOpen(false);
      
    };
  

  
    const enregistrerModifications = (id) => {
      setComptables(
        comptables.map((comptable) =>
          comptable.id === id
            ? { ...comptable, nom, prenom, email,  statut }
            : comptable
        )
      );
      setIsOpen(false);
      
    };
  
    useEffect(() => {
      if (comptableModifie) {
        setNom(comptableModifie.nom);
        setPrenom(comptableModifie.prenom);
        setEmail(comptableModifie.email);
        setStatut(comptableModifie.statut);
        
      }

      // clean le composant a chaque montage
      if(!comptableModifie){
        setNom("");
        setPrenom("");
        setEmail("");
        setStatut("");
        
      }

      return () => {
        setNom("");
        setPrenom("");
        setEmail("");
        setStatut("");
        
      };
    }, [comptableModifie]);



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
          
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        <Button variant="outline" onClick={() => setIsOpen(false)}>
          Annuler
        </Button>
        {isModifier ? (
          <Button onClick={() => enregistrerModifications(comptableModifie.id)}>
            Enregistrer les modifications
          </Button>
        ) : (
          <Button onClick={() => ajouterComptable}>
            Enregistrer
          </Button>
        )}
      </div>
    </DialogContent>
  </Dialog>
  )
}

export default ComptableForm