import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/Introduce/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/Portfolio/" element={<About />} />
          <Route path="/Portfolio/skills" element={<Skills />} />
          <Route path="/Portfolio/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;