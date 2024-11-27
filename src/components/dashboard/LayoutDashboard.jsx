// components/LayoutDashboard.jsx
import { Outlet } from "react-router-dom";
// Votre barre latérale
  // Le footer pour le tableau de bord, si nécessaire

import NavBar from "./NavBar";
import SideBarDashboard from "./SideBarDashboard";



const LayoutDashboard = () => {
  return (
  <div className="flex flex-col h-screen">
      <div className="flex">
      <SideBarDashboard/>
      <div className="flex-1 flex flex-col">
        <NavBar />
      
          <Outlet /> {/* Le contenu spécifique au tableau de bord sera rendu ici */}
        
        
      </div>
    </div>
  </div>
  );
};

export default LayoutDashboard;
