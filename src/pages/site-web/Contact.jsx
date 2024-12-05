
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import FaqSection from "@/components/site-web/FaqSection";



const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire à implémenter
  };



  return (
    <div className="min-h-screen bg-white">
      {/* En-tête */}
      <header className="py-20 mb-7 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
              <p className="text-xl font-light">
              Nous sommes là pour répondre à vos questions et vous accompagner.
              </p>
            </div>
            
          </div>
        </div>
      </header>


      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Section Coordonnées */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-8">Nos coordonnées</h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span>158 HDN Hedzranawoé, Lomé</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-blue-600" />
              <span>+228 93 56 47 75</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-blue-600" />
              <span>support@votrelogiciel.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="h-6 w-6 text-blue-600" />
              <span>Du lundi au vendredi, de 9h à 18h.</span>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="mt-8 flex gap-4">
            <Button variant="outline" size="icon">
              <Facebook className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </Card>

        {/* Formulaire de contact */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-8">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nom complet *
              </label>
              <Input required placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Adresse e-mail *
              </label>
              <Input required type="email" placeholder="votre@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Sujet
              </label>
              <Input placeholder="Sujet de votre message" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Message *
              </label>
              <Textarea required placeholder="Votre message" className="h-32" />
            </div>
            <Button type="submit" className="w-full">
              Envoyer
            </Button>
          </form>
        </Card>
      </div>

      {/* Section FAQ */}
       <FaqSection />
    </div>
  );
};

export default Contact;