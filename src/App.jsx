import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills.";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className= "text-white max-h-screen">
      <Home />
      <Skills />
      <Projects />
      <Portfolio />
    </div>
  );
}

export default App;