import { Outlet } from "react-router-dom"
import SideBarSysteme from "./SideBarSysteme"
import NavBar from "../NavBar"
import { ShoppingBag } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button';
import { DollarSign } from "lucide-react"
import { FileText } from "lucide-react"
import { Banknote } from "lucide-react"
import { Users } from "lucide-react"
import { Warehouse } from "lucide-react"
import { useState } from "react"
const navItems=[
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/achats",
     label:"Achats",
     icons: <ShoppingBag/>,
     
   },
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/ventes",
     label:"ventes",
     icons: <DollarSign/>,
    
   },
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/divers",
     label:"Divers",
     icons: <FileText/>,
     
   },
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/tresorerie",
     label:"Tresorerie",
     icons: <Banknote/>,
     
   },  {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/salaire",
     label:"Salaire",
     icons: <Users/>,
     
   },
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/inventaire",
     label:"Inventaire",
     icons: <Warehouse/>,
     
   }
 ]

const LayoutSousMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Achats');
  return (
    <div className="flex flex-col h-screen">
    <div className="flex">
    <SideBarSysteme/>
    <div className="flex-1 flex flex-col">
      <NavBar />
    <div>
<TooltipProvider className="w-full" >

<nav className="flex p-2    gap-2">
          {navItems.map((item) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
               <Link to={item.link} className="w-full ">
               <Button
                  variant={selectedCategory === item.label ? 'secondary' : 'black'}
                  className={`w-full  justify-center bg-gray-700 text-white  py-2 ${selectedCategory === item.label ? 'bg-gray-300 text-black' : ''}` }
                  onClick={() => setSelectedCategory(item.label)}
                >
                  {item.icons}
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
</TooltipProvider>

        <Outlet /> {/* Le contenu spécifique au tableau de bord sera rendu ici */}
    </div>
      
      
    </div>
  </div>
</div>
  )
}

export default LayoutSousMenu