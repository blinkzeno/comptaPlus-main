/* eslint-disable react/prop-types */


const Formulaire = ({fields}) => {
  return (
   <div className="bg-white shadow-md rounded-lg p-6">
   <form className="grid grid-cols-2 gap-4">
     {fields.map((field) => (
       <div key={field.label} className="flex flex-col">
         <label className="mb-2 text-sm font-medium">{field.label}</label>
         {field.type === "textarea" ? (
           <textarea
             className="border rounded p-2 h-24"
             placeholder={`Saisissez ${field.label.toLowerCase()}`}
           />
         ) : (
           <input
             type={field.type}
             className="border rounded p-2"
             placeholder={`Saisissez ${field.label.toLowerCase()}`}
           />
         )}
       </div>
     ))}
   </form>

   <div className="flex justify-end mt-6 space-x-4">
     <button className="bg-gray-200 px-4 py-2 rounded">
       Enregistrer en brouillon
     </button>
     <button className="bg-blue-500 text-white px-4 py-2 rounded">
       Valider la pièce comptable
     </button>
   </div>
 </div>
  )
}

export default Formulaire