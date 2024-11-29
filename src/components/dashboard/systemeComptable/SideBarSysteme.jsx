import { LayoutDashboard, FileSpreadsheet, Users, BookOpen, Clipboard, Clock } from 'lucide-react';
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";



const sidebarItems = [
  { 
    link: '/dashboard/systeme-comptables/1',
    icon: <LayoutDashboard />, 
    label: 'Vue d\'ensemble', 
    section: 'ensemble' 
  },
  { 
    link: '/dashboard/systeme-comptables/1/pieces-jointes/achats',
    icon: <FileSpreadsheet />, 
    label: "Ajouter des pièces comptables", 
    section: 'accountings' 
  },
  { 
    link: '/dashboard/systeme-comptables/1/comptables',
    icon: <Users />, 
    label: 'Gestion des comptables', 
    section: 'users' 
  },
  { 
    link: '/dashboard/systeme-comptables/1/journaux',
    icon: <BookOpen />, 
    label: 'Consultation des journaux', 
    section: 'logs' 
  },
  { 
    link: '/dashboard/systeme-comptables/1/registres',
    icon: <Clipboard />, 
    label: 'Gestion des registres', 
    section: 'registers' 
  },
  { 
    link: '/dashboard/systeme-comptables/1/bilans',
    icon: <Clock />, 
    label: 'Gestion de Bilan', 
    section: 'bilan' 
  },
  { 
    link: '/dashboard/systeme-comptables/1/historique',
    icon: <Clock />, 
    label: 'Historique des opérations', 
    section: 'history' 
  },
];

const SideBarSysteme = () => {
  const [activeSection, setActiveSection] = useState('ensemble');
   
  return (
    <TooltipProvider>

      <div className="w-20 md:w-72 py-5 h-screen flex flex-col gap-5 bg-white border-r shadow-sm p-4 transition-all duration-300">

      <div className='flex flex-col gap-5 mb-5'>
      <div className="flex flex-col md:flex-row items-center border-b py-4">
          <img 
            src={logo} 
            alt="Logo" 
            className="md:w-22 md:h-22 w-12 h-8 " 
          />
          <h2 className="text-xl font-bold text-gray-800 hidden md:block ">ComptaPlus</h2>
        </div>
        <div className=" border-b py-3 flex items-center justify-center">
         <Link to="/dashboard">
         <Button className="w-full md:p-2 md:justify-center md:w-full">
          <ChevronLeft />
          <span className="hidden md:block">
          Retour au dashboard
         
          </span>
        </Button>
         </Link>
        </div>
      </div>
       
        <nav className="flex  flex-col gap-5">
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
        
       
      </div>
    </TooltipProvider>
  )
}

export default SideBarSysteme