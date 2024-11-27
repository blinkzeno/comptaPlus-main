// components/LayoutLandingPage.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
 // Pied de page spécifique à la landing page

const LayoutLandingPage = () => {
  return (
    <div className="landing-page-layout">
      <Navbar />
      <main>
        <Outlet />  {/* Le contenu spécifique à chaque route de la landing page sera rendu ici */}
      </main>
      <Footer/>
    </div>
  );
};

export default LayoutLandingPage;
