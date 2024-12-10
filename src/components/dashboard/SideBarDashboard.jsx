import { HelpCircle } from "lucide-react";

import { LayoutDashboard } from "lucide-react";
import { Clock } from "lucide-react";
import { Settings } from "lucide-react";
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";


const sidebarItems = [
   { 
    link : '/dashboard',
     icon: <LayoutDashboard />, 
     label: 'Systèmes Comptables', 
     section: 'systems' 
   },
   { 
    link : '/dashboard/historique',
     icon: <Clock />, 
     label: 'Historique des Actions', 
     section: 'history' 
   },
   { 
    link : '/dashboard/aide',
     icon: <HelpCircle />, 
     label: 'Obtenir de l\'Aide', 
     section: 'help' 
   },
   { 
    link : '/dashboard/parametres',
     icon: <Settings />, 
     label: 'Paramètres', 
     section: 'settings' 
   }
];

const SideBarDashboard = () => {
   const [activeSection, setActiveSection] = useState('dashboard');
   
   return (
     <TooltipProvider>
       <div className="w-20 md:w-64 py-5 h-screen flex flex-col justify-between bg-white border-r shadow-sm p-4 transition-all duration-300">
         <div className="flex flex-col md:flex-row items-center">
           <img 
             src={logo} 
             alt="Logo" 
             className="md:w-22 md:h-22 w-12 h-8 " 
           />
           <h2 className="text-xl font-bold text-gray-800 hidden md:block ">ComptaPlus</h2>
         </div>
         
         <nav className="flex h-3/5 flex-col gap-5">
           {sidebarItems.map((item) => (
             <Tooltip key={item.section}>
               <TooltipTrigger asChild>
                <Link to={item.link}>
                <Button
                   variant={activeSection === item.section ? 'secondary' : 'ghost'}
                   className="w-full justify-start mb-2 md:p-2 "
                   onClick={() => setActiveSection(item.section)}
                 >
                   {item.icon}
                   <span className="ml-2 hidden md:block">{item.label}</span>
                 </Button>
                </Link>
               </TooltipTrigger>
               <TooltipContent side="right">
                 <p>{item.label}</p>
               </TooltipContent>
             </Tooltip>
           ))}
         </nav>
         
         <Button className="w-full md:p-2 md:justify-center md:w-full">
           <span className="hidden md:block">Deconnexion</span>
           <Settings />
         </Button>
       </div>
     </TooltipProvider>
   )
}

export default SideBarDashboard