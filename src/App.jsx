import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  // Page d'accueil
import Propos from "./pages/Propos";  // Page à propos
import Contact from "./pages/Contact";  // Page de contact
import Inscription from "./pages/Inscription";  // Page d'inscription
import Connexion from "./pages/Connexion";  // Page de connexion
import LayoutDashboard from "./components/dashboard/LayoutDashboard";
import DashboardHome from "./pages/dashbordPages/DashboardHome";
import LayoutLandingPage from "./components/site-web/LayoutLandingPage";
import GestionComptables from "./pages/dashbordPages/GestionComptables";
import Historiques from "./pages/dashbordPages/Historiques";
import Parametre from "./pages/dashbordPages/Parametre";
import Aide from "./pages/dashbordPages/Aide";
import LayoutSystemeComptable from "./components/dashboard/systemeComptable/LayoutSystemeComptable";
import VueEnsemble from "./pages/dashbordPages/SystemeComptable.jsx/VueEnsemble";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Routes de la landing page */}
        <Route element={<LayoutLandingPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Propos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
        </Route>

        {/* Routes du tableau de bord (qui ont leur propre layout) */}
        <Route element={<LayoutDashboard/>}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/gestion-comptables" element={<GestionComptables />} />
          <Route path="/dashboard/historique" element={<Historiques />} />
          <Route path="/dashboard/aide" element={<Aide/>} />
          <Route path="/dashboard/parametres" element={<Parametre />} />
        </Route>

        <Route element={<LayoutSystemeComptable/>}>
            <Route path="/dashboard/systeme-comptables/1" element={<VueEnsemble/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
