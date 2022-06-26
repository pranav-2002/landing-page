import "./App.css";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Partners />
      <Search />
      <Cards />
    </div>
  );
}

export default App;
