import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Heatmap from "./components/Heatmap";
import CC from "./components/CC"

function App() {
  return (
    <div className="min-h-screen bg-rough-charcoal text-zinc-100">
      <div className="mx-auto w-full max-w-2xl px-6">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Heatmap />
        <CC />
      </div>
    </div>
  );
}

export default App;