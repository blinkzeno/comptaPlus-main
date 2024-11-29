import { Outlet } from "react-router-dom"
import SideBarSysteme from "./SideBarSysteme"
import NavBar from "../NavBar"
import { ShoppingBag } from "lucide-react"

import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button';
const navItems=[
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/achats",
     label:"Achats",
     icons: <ShoppingBag/>,
     
   },
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/ventes",
     label:"ventes",
     icons: <ShoppingBag/>,
    
   },
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/divers",
     label:"Divers",
     icons: <ShoppingBag/>,
     
   },
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/tresorerie",
     label:"Tresorerie",
     icons: <ShoppingBag/>,
     
   },  {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/salaire",
     label:"Salaire",
     icons: <ShoppingBag/>,
     
   },
   {
     link:"/dashboard/systeme-comptables/1/pieces-jointes/inventaire",
     label:"Inventaire",
     icons: <ShoppingBag/>,
     
   }
 ]

const LayoutSousMenu = () => {
  return (
    <div className="flex flex-col h-screen">
    <div className="flex">
    <SideBarSysteme/>
    <div className="flex-1 flex flex-col">
      <NavBar />
    <div>
    <div className="w-full flex  gap-1 ">
        {
          navItems.map((item)=>(
            <Link className="flex  flex-1" key={item.label} to={item.link}>
              <Button className=" text-sm md:text-md flex w-full h-full px-2  py:2 md:py-5 ">
                {item.label}
              </Button>
            </Link>
          ))
        }
      </div>

        <Outlet /> {/* Le contenu spécifique au tableau de bord sera rendu ici */}
    </div>
      
      
    </div>
  </div>
</div>
  )
}

export default LayoutSousMenu