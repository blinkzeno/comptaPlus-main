import { Button } from "@/components/ui/button";
import { Play } from "lucide-react"
import demo from "@/assets/demo.webp"

const DemoSection = () => {
  return (
   <section className="py-20">
   <div className="container mx-auto px-6 text-center">
     <h2 className="text-3xl font-bold mb-8">Découvrez notre interface</h2>
     <div className="bg-gray-200 rounded-lg p-8 mb-8">
       <div className="aspect-video bg-white rounded-lg shadow-lg">
         <img src={demo} alt="Demo" className="w-full h-full object-cover bg-center" />
       </div>
     </div>
     <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center">
       <Play className="mr-2 w-5 h-5" />
       Voir la démonstration
     </Button>
   </div>
 </section>
  )
}

export default DemoSection