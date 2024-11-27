import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
   <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
   <div className="container mx-auto px-6">
     <div className="max-w-3xl">
       <h1 className="text-5xl font-bold mb-6">Simplifiez votre gestion financière</h1>
       <p className="text-xl mb-8">Un outil tout-en-un pour la gestion des finances de votre entreprise</p>
      <Link to="/connexion">
      <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold flex items-center">
         Commencez dès maintenant
         <ChevronRight className="ml-2" />
       </Button>
      </Link>
     </div>
   </div>
 </section>

  )
}

export default HeroSection