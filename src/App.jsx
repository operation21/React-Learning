import { BrowserRouter , Routes , Route ,Link } from "react-router";
import Home from "./home"
import About from "./About"
import Contact from "./Contact"

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Link to="/"><h1>Home</h1></Link>
      <Link to="/about"><h1>About</h1></Link>
      <Link to="/contact"><h1>Conatct</h1></Link>    
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
