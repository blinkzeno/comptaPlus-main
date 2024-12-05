
import { Users, Shield, Lightbulb, Building2, User, Building } from 'lucide-react';
import img1 from '@/assets/img1.webp';
import img2 from '@/assets/img2.webp';
import img3 from '@/assets/img3.webp';







const Propos = () => {
  const values = [
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: "Innovation",
      description: "Nous développons des outils modernes pour anticiper vos besoins."
    },
    {
      icon: <User className="w-12 h-12 text-blue-600" />,
      title: "Accessibilité",
      description: "Une interface intuitive accessible à tous, experts ou non."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Fiabilité",
      description: "Des données sécurisées et une conformité aux normes fiscales."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Transparence",
      description: "Nous croyons en des solutions honnêtes et claires."
    }
  ];

  const teamMembers = [
    {
      name: "Marie Dubois",
      role: "Responsable Produit",
      quote: "Simplifier la gestion financière pour tous est notre mission quotidienne.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Thomas Martin",
      role: "Lead Développeur",
      quote: "La technologie au service de la simplicité.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Sophie Laurent",
      role: "Designer UX",
      quote: "L'expérience utilisateur est au cœur de nos préoccupations.",
      image: "/api/placeholder/400/400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec illustration2 */}
      <header className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de ComptaPlus</h1>
              <p className="text-xl font-light">
                Un logiciel conçu pour répondre aux besoins de tous : particuliers, PME, et grandes entreprises.
              </p>
            </div>
            
          </div>
        </div>
      </header>

      {/* Solutions par type d'utilisateur */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* PME */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src={img1}
                  alt="Solution PME" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Soutenir les PME dans leur croissance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Gestion des factures et paiements</li>
                <li>• Outils comptables de base</li>
                <li>• Suivi des dépenses et budgets</li>
              </ul>
            </div>

            {/* Particuliers */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src={img3}
                  alt="Solution Particuliers" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <User className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Simplifier la gestion financière des particuliers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Gestion des dépenses personnelles</li>
                <li>• Rapports financiers simplifiés</li>
                <li>• Calcul automatique des taxes</li>
              </ul>
            </div>

            {/* Grandes Entreprises */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="mb-6">
                <img 
                  src={img2}
                  alt="Solution Grandes Entreprises" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <Building className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Une solution robuste pour les grandes structures</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Gestion multi-utilisateurs</li>
                <li>• Consolidation financière</li>
                <li>• Intégration RH et CRM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs avec graphique */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Les valeurs qui nous guident</h2>
           
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center transform transition-transform hover:scale-105">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'équipe avec illustration2 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Une équipe passionnée, dévouée à simplifier vos finances
            </h2>
            
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 italic">&quot;{member.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Propos;