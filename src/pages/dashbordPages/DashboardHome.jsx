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
import { useState } from "react";
const DashboardHome = () => {
  const [isNewBilanOpen, setIsNewBilanOpen] = useState(false);

  const handleNewBilanOpen = () => {
    setIsNewBilanOpen(true);
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
          <SystemeCard
            systeme={{
              id: 1,
              nom: "Systeme 1",
              devise: "USD",
              dateCreation: "2022-01-01",
            }}
          />
          <SystemeCard
            systeme={{
              id: 2,
              nom: "Systeme 2",
              devise: "EUR",
              dateCreation: "2022-02-01",
            }}
          />
          <SystemeCard
            systeme={{
              id: 3,
              nom: "Systeme 3",
              devise: "GBP",
              dateCreation: "2022-03-01",
            }}
          />
        </div>
        <Dialog open={isNewBilanOpen} onOpenChange={setIsNewBilanOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Créer un Nouveau Bilan</DialogTitle>
            </DialogHeader>

            {/* Formulaire de création de bilan */}
            <div className="space-y-4">
              <Input placeholder="Titre du systeme" />
              <Input type="text" placeholder="currency" />
              <Input placeholder="Description" />
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <Button
                variant="outline"
                onClick={() => setIsNewBilanOpen(false)}
              >
                Annuler
              </Button>
              <Button>Créer un systeme</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
};

export default DashboardHome;
