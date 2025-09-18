import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { gsap } from "gsap";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkSamples from "./pages/WorkSamples";
import Contact from "./pages/Contact";
import ElevatorPitch from "./pages/ElevatorPitch";

function App() {
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const layers = document.querySelectorAll('.parallax-layer');
      layers.forEach((layer, i) => {
        const speed = 0.1 + i * 0.07;
        layer.style.transform = `translateY(${y * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = navRef.current.querySelectorAll('.nav-link');
    gsap.fromTo(links,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out" }
    );
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.13, color: "#64ffda", duration: 0.25, ease: "power2.out" });
      });
      link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, color: "#e6f1ff", duration: 0.25, ease: "power2.inOut" });
      });
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Toggle mobile menu
  const handleMenuToggle = () => setMenuOpen(m => !m);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="parallax-bg">
        <div className="parallax-layer parallax-layer-1"></div>
        <div className="parallax-layer parallax-layer-2"></div>
        <div className="parallax-layer parallax-layer-3"></div>
      </div>
      <div className="background-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
      <nav className="navbar" ref={navRef}>
  <Link to="/" className="navbar-logo" onClick={closeMenu} style={{textDecoration:'none'}} aria-label="Go to Home">E|E</Link>
        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <ul>
            <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={closeMenu}>About Me</Link></li>
            <li><Link to="/work-samples" className="nav-link" onClick={closeMenu}>Work Samples</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/elevator-pitch" className="nav-link" onClick={closeMenu}>Elevator Pitch</Link></li>
          </ul>
        </div>
        <button className={`menu-toggle${menuOpen ? ' open' : ''}`} onClick={handleMenuToggle} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work-samples" element={<WorkSamples />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/elevator-pitch" element={<ElevatorPitch />} />
        </Routes>
      </div>
      <footer>
        <div>
          &copy; {new Date().getFullYear()} Emma C.E. | Portfolio. All rights reserved.<br/>
          Designed &amp; developed by Sar'Jed
        </div>
      </footer>
    </Router>
  );
}

export default App;
