import {testimonials} from "@/lib/db"
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
   <section className="py-20 bg-gray-50">
   <div className="container mx-auto px-6">
     <h2 className="text-3xl font-bold text-center mb-16">Ce que disent nos clients</h2>
     <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
       {testimonials.map((testimonial, index) => (
         <Card key={index} className="text-center p-8">
           <CardContent>
             <div className="flex justify-center mb-4">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
               ))}
             </div>
             <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
             <p className="font-semibold">{testimonial.name}</p>
             <p className="text-sm text-gray-500">{testimonial.role}</p>
           </CardContent>
         </Card>
       ))}
     </div>
   </div>
 </section>
  )
}

export default TestimonialsSection