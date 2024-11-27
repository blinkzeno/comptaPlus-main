import { faqData } from '@/lib/db';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion"
 

const FaqSection = () => {
  return (
   <div className="container flex items-center justify-center mx-auto px-6 py-20">
         <Card className="w-full max-w-4xl">
   <CardHeader>
     <CardTitle className="text-3xl font-bold text-center">Questions fréquentes</CardTitle>
   </CardHeader>
   <CardContent>
     {faqData.map(({ question, answer }, index) => (
      <Accordion type="single" collapsible key={index}>
      <AccordionItem value="item-1">
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    
     ))}
   </CardContent>
 </Card>
   </div>
  );
};

export default FaqSection;