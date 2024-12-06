import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SystemeCard from "../../components/dashboard/SystemeCard";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { devises } from "../../lib/dashboardcontent";




const DashboardHome = () => {

  const [isNexSysteme, setisNexSysteme] = useState(false);
  const [titre, setTitre] = useState("");
  const [devise, setDevise] = useState("");
  const [description, setdescription] = useState("");
  const [systemes, setSystemes] = useState([
    { id: 1, nom: "Systeme 1", devise: "USD", description: "Description 1" },
    { id: 2, nom: "Systeme 2", devise: "EUR", description: "Description 2" },
    { id: 3, nom: "Systeme 3", devise: "GBP", description: "Description 3" },
  ]);

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

  const onSupprimer = (id) => {
    const updatedSystemes = systemes.filter((systeme) => systeme.id !== id);
    setSystemes(updatedSystemes);
  };

  const handleNewBilanOpen = () => {
    setisNexSysteme(true);
  };

  return (
    <main className="p-6 space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className="text-2xl font-bold">Liste des Systemes</h1>
          </div>
          <Button onClick={handleNewBilanOpen} variant="default">
            <Plus className="mr-2" /> Ajouter un Systeme
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemes.map((systeme) => (
            <SystemeCard key={systeme.id} systeme={systeme} onSupprimer={onSupprimer} />
          ))}
        </div>
        <Dialog open={isNexSysteme} onOpenChange={setisNexSysteme}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Créer un Nouveau systeme</DialogTitle>
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
      </div>
    </main>
  );
};

export default DashboardHome;
