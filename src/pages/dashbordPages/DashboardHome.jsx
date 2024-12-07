import { Button } from "@/components/ui/button";

import SystemeCard from "../../components/dashboard/SystemeCard";
import { Plus } from "lucide-react";

import { useState } from "react";

import DialogCreerSysteme from "../../components/dashboard/DialogCreerSysteme";

const DashboardHome = () => {
  const [isNexSysteme, setisNexSysteme] = useState(false);
  const [systemes, setSystemes] = useState([
    { id: 1, nom: "Systeme 1", devise: "USD", description: "Description 1" },
    { id: 2, nom: "Systeme 2", devise: "EUR", description: "Description 2" },
    { id: 3, nom: "Systeme 3", devise: "GBP", description: "Description 3" },
  ]);



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
        {/* affiche tous les sytemes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemes.map((systeme) => (
            <SystemeCard
              key={systeme.id}
              systeme={systeme}
              onSupprimer={onSupprimer}
            />
          ))}
        </div>
        <DialogCreerSysteme isNexSysteme={isNexSysteme} setisNexSysteme={setisNexSysteme}  systemes={systemes} setSystemes={setSystemes} />
      </div>
    </main>
  );
};

export default DashboardHome;
