import Formulaire from "../../../../components/dashboard/systemeComptable/Formulaire"
// * Date de l’opération.
//    * Type d’inventaire (annuel, périodique, exceptionnel).
//    * Description des éléments inventoriés.
//    * Valeur d’inventaire.
//    * Compte de régularisation.
//    * Justificatif.

const fields = [
  { label: "Date de l'operation", type: "date" },
  { label: "Type d'inventaire", type: "select" },
  { label: "Description des elements inventories", type: "textarea" },
  { label: "Valeur d'inventaire", type: "number" },
  { label: "Compte de regularisation", type: "select" },
  { label: "Justificatif", type: "file" },
]

const Inventaire = () => {
  return (
      <div className="flex-1 p-6 overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Ajouter une pièce comptable - Inventaire</h2>

      <Formulaire fields={fields} />
    </div>
  )
}

export default Inventaire