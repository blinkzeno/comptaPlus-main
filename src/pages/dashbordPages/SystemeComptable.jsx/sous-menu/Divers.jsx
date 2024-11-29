import Formulaire from "../../../../components/dashboard/systemeComptable/Formulaire";

const fields = [
  { label: "Date de l'operation", type: "date" },
  { label: "Natures de l'operation", type: "select" },
  { label: "Description", type: "textarea" },
  { label: "justification", type: "textarea" },
  { label: "Montant", type: "number" },
  { label: "compt d'imputation", type: "select" },
  { label: "Pièce jointe", type: "file" },
];

const Divers = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Ajouter une pièce comptable - Divers</h2>

      <Formulaire fields={fields} />
    </div>
  )
}

export default Divers