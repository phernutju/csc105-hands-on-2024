import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/home";
import Aboutme from "./pages/aboutme";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div>
      {/* <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </Router> */}
      <NavBar />
      <Home />
      <Aboutme />
      <Gallery />


    </div>
  );
}

export default App;
