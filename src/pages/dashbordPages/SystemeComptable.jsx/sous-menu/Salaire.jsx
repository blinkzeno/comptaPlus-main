
import Formulaire from '../../../../components/dashboard/systemeComptable/Formulaire'
// * Date de paiement.
// * Nom du salarié.
// * Période concernée.
// * Montant brut et net.
// * Cotisations sociales.
// * Mode de paiement.
// * Compte de charge salariale.
// * Justificatif de paiement.

const fields = [
  { label: "Date de paiement", type: "date" },
  { label: "Nom du salarié", type: "text" },
  { label: "Période concernée", type: "text" },
  { label: "Montant brut et net", type: "number" },
  { label: "Cotisations sociales", type: "number" },
  { label: "Mode de paiement", type: "select" },
  { label: "Compte de charge salariale", type: "select" },
  { label: "Justificatif de paiement", type: "file" },

]
const Salaire = () => {
  return (
     <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Ajouter une pièce comptable - Salaire</h2>

      <Formulaire fields={fields} />
    </div>
  )
}

export default Salaire