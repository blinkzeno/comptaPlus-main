/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { devises } from "../../lib/dashboardcontent";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useEffect } from "react";

const DialogCreerSysteme = ({
  isNexSysteme,
  setisNexSysteme,

  setSystemes,
  systemes,
}) => {
  const [titre, setTitre] = useState("");
  const [devise, setDevise] = useState("");
  const [description, setdescription] = useState("");
  const [error, seterror] = useState({
    errortile: "",
    errorDevise: "",
    errorDescription: "",
  });

  useEffect(() => {
    seterror({
      errortile: "",
      errorDevise: "",
      errorDescription: "",
    });
  }, [isNexSysteme, setisNexSysteme, systemes, setSystemes]);

  const creatNewsysteme = () => {
    if (titre == "" || devise == "" || description == "") {
      seterror({
        errortile: "",
        errorDevise: "",
        errorDescription: "",
      });
      if (titre == "") {
        seterror({ ...error, errortile: "eveillez saisir un titre" });
      }
      if (description == "") {
        seterror({
          ...error,
          errorDescription: "eveillez saisir une description",
        });
      }
      if (devise == "") {
        seterror({ ...error, errorDevise: "eveillez selectionner une devise" });
      }
      return error;
    } else {
      const newSysteme = {
        id: Math.round(Math.random() * 1000),
        nom: titre,
        devise: devise,
        description: description,
      };
      console.log(newSysteme.id);
      setSystemes([...systemes, newSysteme]);
      setTitre("");
      setDevise("");
      setdescription("");
      seterror({
        errortile: "",
        errorDevise: "",
        errorDescription: "",
      });
      setisNexSysteme(false);
    }
  };

  return (
    <Dialog open={isNexSysteme} onOpenChange={setisNexSysteme}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Créer un Nouveau systeme</DialogTitle>
          <DialogDescription>creer un nouveau systeme</DialogDescription>
        </DialogHeader>

        {/* Formulaire de création de bilan */}
        <div className="space-y-4">
          <Input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Titre du systeme"
          />
          <span className=" text-sm text-red-500">{error.errortile}</span>
          <Input
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
          <span className=" text-sm text-red-500">
            {error.errorDescription}
          </span>

          <Select onValueChange={(value) => setDevise(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Devise" />
            </SelectTrigger>
            <SelectContent>
              {devises.map((devise) => (
                <SelectItem
                  key={devise.code}
                  value={`${devise.code}(${devise.nom})`}
                >
                  {devise.code}:
                  <span className="text-muted-foreground">({devise.nom})</span>
                </SelectItem>
              ))}
            </SelectContent>
            <span className=" text-sm text-red-500">{error.errorDevise}</span>
          </Select>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={() => setisNexSysteme(false)}>
            Annuler
          </Button>
          <Button onClick={creatNewsysteme}>Créer un systeme</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCreerSysteme;
