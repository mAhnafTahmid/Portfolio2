import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const location = useLocation();

  return (
    <div className="w-full h-fit flex flex-col">
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/publication" element={<Publications />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
