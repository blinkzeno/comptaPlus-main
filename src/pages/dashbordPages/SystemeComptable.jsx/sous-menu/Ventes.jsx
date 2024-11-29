import Formulaire from "../../../../components/dashboard/systemeComptable/Formulaire";

const fields = [
  { label: "Date de vente", type: "date" },
  { label: "client", type: "text" },
  { label: "Produits ou service vendues", type: "text" },
  { label: "Quantité", type: "number" },
  { label: "Prix unitaire", type: "number" },
  { label: "Montant Total HT et TVA", type: "number" },
  { label: "Mode de paiement", type: "select" },
  { label: "compte de produit lié", type: "select" },
  { label: "Pièce jointe(facture client)", type: "file" },
];

const Ventes = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Ajouter une pièce comptable - Ventes</h2>

      <Formulaire fields={fields} />
    </div>
  )
}

export default Ventes