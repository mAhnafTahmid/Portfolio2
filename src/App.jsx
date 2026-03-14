import "./App.css";
import MobileHeader from "./components/MobileHeader";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publications from "./components/Publications";

function App() {
  const location = useLocation();

  return (
    <div className="w-full h-fit">
      <MobileHeader />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publication" element={<Publications />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
