import { useState } from 'react';
import { Linkedin, Instagram, ArrowRight, Sparkles, Menu, X } from 'lucide-react';
import ieeelogo from '../Assets/logo.png';

export function Hero() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "workshops", label: "Workshops" },
    { id: "timeline", label: "Timeline" },
    { id: "sponsors", label: "Sponsors" },
    { id: "register", label: "Register" },
  ];

  return (
    <section className="hero-section">
      <div className="bg-layer" />
    
{/* <div className="stars"></div>
<div className="stars2"></div>
<div className="stars3"></div> */}
{/* Shooting Stars */}
<div className="shooting-star"></div>
<div className="shooting-star delay1"></div>
<div className="shooting-star delay2"></div>
<div className="shooting-star delay3"></div>




      <div className="hero-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <img className="logo-size" src={ieeelogo} alt="IEEE Logo" />
            <span class="logo-text">IEEE-VESIT</span>
          </div>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
                <span className={`underline ${hoveredItem === item.id ? 'active' : ''}`}></span>
              </a>
            ))}
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="socials">
            <a href="#"><Linkedin size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
          </div>
        </nav>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <div className="mobile-socials">
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
            </div>
          </div>
        )}
        {/* Scroll Indicator */}
<div className="scroll-indicator">
  <div className="mouse">
    <div className="scroll-dot"></div>
  </div>
  <span className="scroll-text">Scroll</span>
</div>


        {/* Hero Content */}
        <div className="hero-content">
          <div className="date-badge">
            <Sparkles className="march" size={30} />
            <span className='march'>MARCH 15–17, 2025</span>
          </div>

          <h1>HACKFEST</h1>
          <h2 >2025</h2>
          <p>24 hours of innovation • ₹10K+ prizes</p>

          <div className="buttons">
            <a href="#register" className="primary-btn">
              REGISTER NOW <ArrowRight size={18} />
            </a>
            <a href="#workshops" className="secondary-btn">
              VIEW WORKSHOPS
            </a>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`

        * {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  overflow-x: hidden;
}
   /* 🚀 Shooting Stars */
.shooting-star {
  position: absolute;
  width: 2px;
  height: 150px;

  /* Golden trail */
  background: linear-gradient(
    to bottom,
   
  
    rgba(255, 215, 0, 0.2),
      rgba(255, 215, 0, 0.6),
     rgba(255, 215, 0, 1),       /* gold head */
    transparent
  );

  border-radius: 10px;
  top: -200px;
  left: 20%;
  opacity: 0.9;
  z-index: 4;
  animation: shoot 2.5s linear infinite;
}


/* Different timings */
.delay1 { left: 35%; animation-delay: 1s; }
.delay2 { left: 55%; animation-delay: 2s; }
.delay3 { left: 75%; animation-delay: 3s; }



/* Animation */
@keyframes shoot {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  80% {
    transform: translateY(900px);
    opacity: 1;
  }

  100% {
    transform: translateY(1100px);
    opacity: 0;
  }
}








        .hero-section {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0118, #1a0b2e, #0a0118);
          color: white;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          position: relative;
          z-index: 10;
          padding: 20px 40px;
        }
          .logo-text{
            font-size:25px;
            margin-bottom:12px;
            // font-weight:bold;
          }
            .logo-size{
              margin-bottom:13px;
              margin-right:4px;
            }
        .march{
           background: linear-gradient(to right, cyan, purple, pink);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size:25px;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
          /* Navbar hover effect */
.nav-link {
  color: white;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00ffff;  /* cyan glow color */
}

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          
        }

        .logo img {
          width: 48px;
      }

        .nav-links {
          display: flex;
          gap: 32px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-link {
          position: relative;
          // text-transform: uppercase;
          // font-weight: bold;
          letter-spacing: 2px;
          padding-bottom: 6px;
        }

        .underline {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: white;
          transform: scaleX(0);
          transition: 0.3s ease;
          transform-origin: left;
        }

        .underline.active {
          transform: scaleX(1);
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .socials {
          display: flex;
          gap: 12px;
        }

       .mobile-menu {
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}


        .mobile-socials {
          display: flex;
          gap: 20px;
          margin-top: 10px;
        }

        /* ✅ Centered hero content */
        .hero-content {
          min-height: calc(100vh - 140px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        h1 {
          font-size: 110px;
          line-height: 1;
          font-style:normal;

          
        }

        h2 {
          font-size: 70px;
          background: linear-gradient(to right, cyan, purple, pink);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        p {
          font-size: 22px;
          max-width: 700px;
        }

        .buttons {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }

        /* Bigger buttons */
        .primary-btn {
          background: linear-gradient(to right, cyan, purple, pink);
          padding: 18px 40px;
          border-radius: 40px;
          font-size: 18px;
        }

        .secondary-btn {
          border: 2px solid #ffffff30;
          padding: 18px 40px;
          border-radius: 40px;
          font-size: 18px;
        }

        /* ✅ Responsive */
        @media (max-width: 800px) {
          h1 { font-size: 64px; }
          h2 { font-size: 50px; }
        }

        @media (max-width: 980px) {
          .nav-links { display: none; }
          .hamburger { display: block; }
          .socials { display: none; }
          .mobile-menu {
  display: flex;
}


          h1 { font-size: 54px; }
          h2 { font-size: 40px; }
          p { font-size: 18px; }

          .buttons {
            flex-direction: column;
            align-items: center;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            text-align: center;
          }
        }
          /* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 90%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 20;
}

.mouse {
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  position: relative;
}

.scroll-dot {
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 4px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollMove 1.5s infinite;
}

.scroll-text {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

/* Animation */
@keyframes scrollMove {
  0% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, 12px);
  }
}

/* Hide on very small height screens */
@media (max-height: 600px) {
  .scroll-indicator {
    display: none;
  }
}

      `}</style>
    </section>
  );
}
