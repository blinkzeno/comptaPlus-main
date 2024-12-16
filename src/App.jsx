import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/site-web/Home";  // Page d'accueil
import Propos from "./pages/site-web/Propos";  // Page à propos
import Contact from "./pages/site-web/Contact";  // Page de contact
import Inscription from "./pages/site-web/Inscription";  // Page d'inscription
import Connexion from "./pages/site-web/Connexion";  // Page de connexion
import LayoutDashboard from "./components/dashboard/LayoutDashboard";
import DashboardHome from "./pages/dashbordPages/DashboardHome";
import LayoutLandingPage from "./components/site-web/LayoutLandingPage";
import GestionComptables from "./pages/dashbordPages/GestionComptables";
import Historiques from "./pages/dashbordPages/Historiques";
import Parametre from "./pages/dashbordPages/Parametre";
import Aide from "./pages/dashbordPages/Aide";
import LayoutSystemeComptable from "./components/dashboard/systemeComptable/LayoutSystemeComptable";
import VueEnsemble from "./pages/dashbordPages/SystemeComptable.jsx/VueEnsemble";

import Journaux from "./pages/dashbordPages/SystemeComptable.jsx/Journaux";
import Registre from "./pages/dashbordPages/SystemeComptable.jsx/Registre";
import Bilan from "./pages/dashbordPages/SystemeComptable.jsx/Bilan";
import Historique from "./pages/dashbordPages/SystemeComptable.jsx/Historique";
import Achats from "./pages/dashbordPages/SystemeComptable.jsx/sous-menu/Achats.jsx";
import LayoutSousMenu from "./components/dashboard/systemeComptable/LayoutSousMenu.jsx";
import Ventes from "./pages/dashbordPages/SystemeComptable.jsx/sous-menu/Ventes.jsx";
import Divers from "./pages/dashbordPages/SystemeComptable.jsx/sous-menu/Divers.jsx";
import Tresorerie from "./pages/dashbordPages/SystemeComptable.jsx/sous-menu/Tresorerie.jsx";
import Salaire from "./pages/dashbordPages/SystemeComptable.jsx/sous-menu/Salaire.jsx";
import Inventaire from "./pages/dashbordPages/SystemeComptable.jsx/sous-menu/Inventaire.jsx";
import UserProfile from "./pages/dashbordPages/UserProfile.jsx";

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

          <Route path="/dashboard/historique" element={<Historiques />} />
          <Route path="/dashboard/aide" element={<Aide/>} />
          <Route path="/dashboard/parametres" element={<Parametre />} />
          <Route path="/dashboard/profile" element={<UserProfile/>} />
        </Route>

        <Route element={<LayoutSystemeComptable/>}>
            <Route path="/dashboard/systeme-comptables/1" element={<VueEnsemble/>} />
            <Route path="/dashboard/systeme-comptables/1/comptables" element={<GestionComptables/>} />
            <Route path="/dashboard/systeme-comptables/1/journaux" element={<Journaux/>} />
            <Route path="/dashboard/systeme-comptables/1/registres" element={<Registre/>} />
            <Route path="/dashboard/systeme-comptables/1/bilans" element={<Bilan/>} />
            <Route path="/dashboard/systeme-comptables/1/historique" element={<Historique/>} />
        </Route>

        <Route element={<LayoutSousMenu/>}>
          <Route path="/dashboard/systeme-comptables/1/pieces-jointes/achats" element={<Achats/>}/>
          <Route path="/dashboard/systeme-comptables/1/pieces-jointes/ventes" element={<Ventes/>}/>
          <Route path="/dashboard/systeme-comptables/1/pieces-jointes/divers" element={<Divers/>}/>
          <Route path="/dashboard/systeme-comptables/1/pieces-jointes/tresorerie" element={<Tresorerie/>}/>
          <Route path="/dashboard/systeme-comptables/1/pieces-jointes/salaire" element={<Salaire/>}/>
          <Route path="/dashboard/systeme-comptables/1/pieces-jointes/inventaire" element={<Inventaire/>}/>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
