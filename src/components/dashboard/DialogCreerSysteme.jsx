/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {Input} from "@/components/ui/input"

import {Button} from "@/components/ui/button"
import { devises } from "../../lib/dashboardcontent";
import {    Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const DialogCreerSysteme = ({
  isNexSysteme,
  setisNexSysteme,

  setSystemes,
  systemes,
 
}) => {
  
  const [titre, setTitre] = useState("");
  const [devise, setDevise] = useState("");
  const [description, setdescription] = useState("");

  const creatNewsysteme = () => {
    console.log(titre, devise, description);
    const newSysteme = {
      id: systemes.length + 1,
      nom: titre,
      devise: devise,
      description: description,
    };
    setSystemes([...systemes, newSysteme]);
    setTitre("");
    setDevise("");
    setdescription("");
    setisNexSysteme(false);
  };

  return (
    <Dialog open={isNexSysteme} onOpenChange={setisNexSysteme}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Créer un Nouveau systeme</DialogTitle>
              <DialogDescription>
                creer un nouveau systeme
              </DialogDescription>
            </DialogHeader>

            {/* Formulaire de création de bilan */}
            <div className="space-y-4">
              <Input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="Titre du systeme" />
              <Input type="text" placeholder="description" value={description} onChange={(e) => setdescription(e.target.value)} />
              <Select
                 onValueChange={(value) => setDevise(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Devise" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      devises.map((devise) => (
                        <SelectItem key={devise.code} value={`${devise.code}(${devise.nom})`}>{devise.code}: 
                        <span className="text-muted-foreground">
                        ({devise.nom})
                        </span>
                        </SelectItem>
                      ))
                    }
                   
                    
                  </SelectContent>
                </Select>
              
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <Button
                variant="outline"
                onClick={() => setisNexSysteme(false)}
              >
                Annuler
              </Button>
              <Button onClick={creatNewsysteme}>Créer un systeme</Button>
            </div>
          </DialogContent>
        </Dialog>
  );
};

export default DialogCreerSysteme;
