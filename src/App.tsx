import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import QuiSommesNous1 from "./pages/QuiSommesNous1";
import QuiSommesNous from "./pages/QuiSommesNous";
import QuiSommesNous2 from "./pages/QuiSommesNous2";
import Parcoursup360 from "./pages/Parcoursup360";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        
        <main className="flex-grow">
          <Routes>
            <Route path="/qui-sommes-nous-1" element={<QuiSommesNous1 />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/qui-sommes-nous-2" element={<QuiSommesNous2 />} />
            <Route path="/parcoursup-360" element={<Parcoursup360 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
