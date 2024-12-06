import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";


const Aide = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const handleSearch = (e) => setSearchTerm(e.target.value);

  
  return (
    <div className="p-8 space-y-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Obtenir de l&apos;Aide</h1>

      {/* Barre de recherche */}
      <Input
        placeholder="Rechercher une question..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full max-w-md mb-4"
      />

      {/* Filtres */}
      <div className="space-x-4 mb-6">
        <Button variant="outline">FAQ</Button>
        <Button variant="outline">Documentation</Button>
        <Button variant="outline">Support en Direct</Button>
      </div>

      {/* Accordion pour FAQ */}
      <Accordion type="single" collapsible>
        {[
          {
            id: "item-1",
            question: "Comment ajouter une pièce comptable ?",
            answer: "Voici un tutoriel expliquant comment ajouter une pièce comptable dans le système.",
          },
          {
            id: "item-2",
            question: "Comment gérer les journaux ?",
            answer: "Cette section décrit comment consulter et modifier les journaux dans votre système comptable.",
          },
          // Ajouter d'autres éléments FAQ ici
        ].map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

     
    </div>
  );
};

export default Aide;