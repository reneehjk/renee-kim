import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills.";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className= "text-white max-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;