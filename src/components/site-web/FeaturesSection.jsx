import {features} from "@/lib/db" 
import { Card, CardContent } from "@/components/ui/card";
const FeaturesSection = () => {
  return (
   <section className="py-20 bg-gray-50">
   <div className="container mx-auto px-6">
     <h2 className="text-3xl font-bold text-center mb-16">Nos fonctionnalités</h2>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
       {features.map((feature, index) => (
         <Card key={index} className="hover:shadow-lg transition-shadow">
           <CardContent className="p-6">
             <div className="mb-4">{feature.icon}</div>
             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
             <p className="text-gray-600">{feature.description}</p>
           </CardContent>
         </Card>
       ))}
     </div>
   </div>
 </section>
  )
}

export default FeaturesSection