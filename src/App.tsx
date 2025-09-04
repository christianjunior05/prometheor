import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage/Homepage"
import Footer from "./components/Footer"
import PacksRepere from "./components/PacksRepere/PacksRepere"
import Exploration from "./components/exploration/Exploration"
import Trajectoire from "./components/trajectoire/Trajectoire"


import { Routes, Route } from "react-router-dom";


export default function App() {
  return (

    <div className="overflow-x-hidden">
      <Navbar/>
   <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/repere" element={<PacksRepere />} />
      <Route path="/exploration" element={<Exploration />} />
      <Route path="/trajectoire" element={<Trajectoire />} />
     
    </Routes>

    <Footer/>
    </div>
 
  );
}


