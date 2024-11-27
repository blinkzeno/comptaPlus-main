import { Outlet } from "react-router-dom"
import SideBarSysteme from "./SideBarSysteme"
import NavBar from "../NavBar"


const LayoutSystemeComptable = () => {
  return (
    <div className="flex flex-col h-screen">
    <div className="flex">
    <SideBarSysteme/>
    <div className="flex-1 flex flex-col">
      <NavBar />
    
        <Outlet /> {/* Le contenu spécifique au tableau de bord sera rendu ici */}
      
      
    </div>
  </div>
</div>
  )
}

export default LayoutSystemeComptable