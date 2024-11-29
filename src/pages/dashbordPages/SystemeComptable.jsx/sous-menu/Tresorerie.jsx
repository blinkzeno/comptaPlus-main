
import Formulaire from '../../../../components/dashboard/systemeComptable/Formulaire'
// * Date de l’opération.
// * Type d’opération (encaissement ou décaissement).
// * Montant.
// * Mode de paiement.
// * Banque ou caisse.
// * Compte de trésorerie.
// * Référence du justificatif.

const fields = [
  { label: "Date de l'operation", type: "date" },
  { label: "Type d'operation", type: "select" },
  { label: "Montant", type: "number" },
  { label: "Mode de paiement", type: "select" },
  { label: "Banque ou caisse", type: "select" },
  { label: "Compte de tresorerie", type: "select" },
  { label: "Justificatif", type: "file" },
]
const Tresorerie = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Ajouter une pièce comptable - Tresorerie</h2>

      <Formulaire fields={fields} />
    </div>
  )
}

export default Tresorerie