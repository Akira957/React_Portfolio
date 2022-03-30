import './App.css';
// import Navbar from "./components/navbar.js";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div>
      {/* <div class="menu-btn">
        <div class="btn-line"></div>
        <div class="btn-line"></div>
        <div class="btn-line"></div>
      </div>
      <nav class="menu">
        <div class="menu-branding">
          <div class="portrait"></div>
        </div>
        <ul class="menu-nav">
          <li class="nav-item current">
            <a href={Home} className="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href={About} className="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href={Projects} className="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a href={Contact} className="nav-link">Contact</a>
          </li>
        </ul>
      </nav> */}
      {/* <Navbar /> */}
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
