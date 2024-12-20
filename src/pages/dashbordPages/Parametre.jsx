import { useState } from 'react';


const Parametre = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit logic for password and email changes can go here
    alert('Settings updated!');
  };

  return (
    <div className="p-6 rounded-lg shadow-lg h-full">
      <h2 className="text-3xl font-semibold mb-6">Paramètres</h2>

      <form onSubmit={handleSubmit}>
        {/* Informations Personnelles */}
        <div className="mb-6">
          <h3 className="text-2xl font-medium mb-4">Informations Personnelles</h3>
          <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre e-mail"
            className="w-full px-4 py-2 mb-4 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label htmlFor="password" className="block text-sm font-medium mb-1">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Votre mot de passe"
            className="w-full px-4 py-2 mb-4 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        

    


        {/* Boutons d'enregistrement */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Sauvegarder les paramètres
          </button>
        </div>
      </form>
    </div>
  );
};

export default Parametre;
