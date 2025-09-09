import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer";
import PacksRepere from "./components/PacksRepere/PacksRepere";
import Exploration from "./components/exploration/Exploration";
import Trajectoire from "./components/trajectoire/Trajectoire";
import NotreEngagement from "./pages/NotreEngagement";
// import QuiSommeNous from "./pages/QuiSommeNous"
import Concours from "./pages/Concours";
import Parcours from "./pages/Parcours";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/repere" element={<PacksRepere />} />
        <Route path="/exploration" element={<Exploration />} />
        <Route path="/trajectoire" element={<Trajectoire />} />
        <Route path="/notreengagement" element={<NotreEngagement />} />
        {/* <Route path="/" element={<QuiSommesNous1 />} /> */}

        <Route path="/Concours" element={<Concours />} />
        <Route path="/parcours" element={<Parcours />} />
        {/* <Route path="/QuiSommesNous" element={<QuiSommesNous />} /> */}

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </main>
  );
}
