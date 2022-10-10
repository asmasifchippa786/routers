import Clock3 from "./componenets/clock3";
import Clock1 from "./componenets/clock1";
import Clock2 from "./componenets/clock2";
import About from "./componenets/about";
import Contact from "./componenets/contact";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
        <nav className='navBar navbar navbar-expand-sm bg-dark navbar-dark '>
        <div class="container-fluid">
        <Link to="/" class="navbar-brand"  style={{fontSize: '40px', marginRight: '30px'}}>Clock App</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" style={{fontSize: '20px'}}>
              <Link to="/" class="nav-link active" aria-current="page">World Clock</Link>
            </li>
            <li class="nav-item"  style={{fontSize: '20px'}}>
              <Link class="nav-link" to="/clock2">Digital Clock</Link>
            </li>
            <li class="nav-item"  style={{fontSize: '20px'}}>
              <Link class="nav-link" to="/clock3">Analog Clock</Link>
            </li>
            <li class="nav-item"  style={{fontSize: '20px'}}>
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item"  style={{fontSize: '20px'}}>
              <Link class="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          </div>
  </div>
        </nav>

         <Routes>
          <Route path="clock2" element={<Clock2 />} />
          <Route path="clock3" element={<Clock3 />} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact />} />
          <Route index element={<Clock1/>} />
        </Routes> 

      </Router>

    </div>
  );
}

export default App;
