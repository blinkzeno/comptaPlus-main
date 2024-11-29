import Formulaire from "../../../../components/dashboard/systemeComptable/Formulaire";

const fields = [
  { label: "Date de l'opération", type: "date" },
  { label: "Description des produits", type: "textarea" },
  { label: "Quantité", type: "number" },
  { label: "Prix unitaire", type: "number" },
  { label: "Montant total", type: "number" },
  { label: "Fournisseur", type: "text" },
  { label: "Compte de charge", type: "select" },
  { label: "Pièce jointe", type: "file" },
];

const Achats = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Ajouter une pièce comptable - Achats</h2>

      <Formulaire fields={fields} />
    </div>
  );
};

export default Achats;
