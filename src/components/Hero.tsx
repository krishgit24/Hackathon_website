import React, { useState } from 'react';
import { Linkedin, Instagram, ArrowRight, Sparkles, Menu, X } from 'lucide-react';
import ieeelogo from '../assets/logo.png';

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
    <section className="hero-section relative min-h-screen overflow-hidden">
      {/* Background gradient & orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

      {/* small pulsing stars */}
      <div className="absolute top-20 right-[15%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-100" />
      <div className="absolute bottom-[40%] left-[20%] w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200" />
      <div className="absolute top-[15%] left-[30%] w-1 h-1 bg-white rounded-full animate-pulse" />
      <div className="absolute bottom-[25%] right-[35%] w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-300" />

      {/* Shooting Stars (vertical) */}
      <div className="shooting-star" />
      <div className="shooting-star delay1" />
      <div className="shooting-star delay2" />
      <div className="shooting-star delay3" />

      <div className="hero-container relative z-10 px-6 lg:px-20">
        {/* Navbar */}
        <nav className="navbar relative flex items-center justify-between py-6">
          <div className="logo flex items-center gap-3">
            <img className="logo-size" src={ieeelogo} alt="IEEE Logo" />
            <span className="logo-text">IEEE-VESIT</span>
          </div>

          <div className="nav-links hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="uppercase tracking-wider font-semibold">{item.label}</span>
                <span className={`underline ${hoveredItem === item.id ? 'active' : ''}`} />
              </a>
            ))}
          </div>

          <button className="hamburger md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="socials hidden md:flex items-center gap-3">
            <a href="https://www.instagram.com/ieee_vesit/" className="social-icon w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all">
              <Linkedin size={18} className="text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/company/ieeevesit/" className="social-icon w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all">
              <Instagram size={18} className="text-gray-300" />
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu md:hidden">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={() => setMenuOpen(false)} 
                className="mobile-menu-item"
              >
                {item.label}
              </a>
            ))}

            <div className="mobile-socials">
              <a href="#" className="mobile-social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="mobile-social-icon">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        )}

        {/* HERO CONTENT — centered with vertical gaps */}
        <div className="hero-content min-h-[calc(100vh-140px)] flex flex-col justify-center items-center text-center pt-8 pb-20">
          <div className="stack">
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full">
              <Sparkles className="text-cyan-400" size={16} />
              <span className="text-cyan-400 text-sm">January 3 & 4, 2026</span>
            </div>

            <h1 className="title-hackfest">ARCANE</h1>

            <h2 className="title-year">2026</h2>

            <p className="subtitle">
              24 hours of innovation • ₹10K+ prizes
            </p>

            <div className="buttons">
              <a
                href="#register"
                className="cta-primary group relative px-10 py-5 rounded-full overflow-hidden inline-flex items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center space-x-3">
                  <span className="text-white text-lg">REGISTER NOW</span>
                  <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </a>

              <a
                href="#workshops"
                className="cta-secondary px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white rounded-full inline-flex items-center"
              >
                VIEW WORKSHOPS
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator centered */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
          <div className="mouse w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="scroll-dot w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>

      {/* Component CSS */}
      <style>{`
        * { box-sizing: border-box; }
        html, body { width: 100%; overflow-x: hidden; }
        .hero-section { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }

        /* Shooting Stars (vertical trails) */
        .shooting-star {
          position: absolute;
          width: 2px;
          height: 150px;
          background: linear-gradient(to bottom, rgba(255,215,0,0.2), rgba(255,215,0,0.6), rgba(255,215,0,1), transparent);
          border-radius: 10px;
          top: -220px;
          left: 20%;
          opacity: 0.95;
          z-index: 4;
          animation: shoot-vertical 2.5s linear infinite;
        }
        .delay1 { left: 32%; animation-delay: 0.8s; }
        .delay2 { left: 52%; animation-delay: 1.6s; }
        .delay3 { left: 72%; animation-delay: 2.4s; }

        @keyframes shoot-vertical {
          0% { transform: translateY(0); opacity: 0; }
          8% { opacity: 1; }
          78% { transform: translateY(900px); opacity: 1; }
          100% { transform: translateY(1100px); opacity: 0; }
        }

        /* Navbar */
        .navbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .logo img.logo-size { width: 48px; }
        .logo-text { font-size: 20px; color: white; font-weight: 600; letter-spacing: 0.6px; }
        .nav-links { display: flex; gap: 28px; align-items: center; }
        .nav-link { color: white; transition: color 0.25s ease; letter-spacing: 1px; }
        .nav-link:hover { color: #00ffff; }
        .underline { position: absolute; bottom: 0; left: 0; height: 2px; width: 100%; background: white; transform: scaleX(0); transform-origin: left; transition: transform 0.25s ease; }
        .underline.active { transform: scaleX(1); }

        .hamburger { background: none; border: none; color: white; cursor: pointer; }
        .socials a { color: white; display: inline-flex; align-items: center; justify-content: center; }

        /* HERO spacing stack */
        .stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          max-width: 900px;
          margin: 0 auto;
        }

        /* Titles */
        .title-hackfest {
          font-size: clamp(120px, 8.5vw, 96px);
          line-height: 0.96;
          font-weight: 900;
          margin: 0;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #ffffff 0%, #00d9ff 50%, #a855f7 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
          filter: drop-shadow(0 0 30px rgba(0, 217, 255, 0.5));
          position: relative;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .title-year {
          font-size: clamp(36px, 6.5vw, 64px);
          margin: 0;
          font-weight: 800;
          background: linear-gradient(to right, #ffffff 0%, #00d9ff 50%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: clamp(18px, 1.6vw, 28px);
          color: rgba(255,255,255,0.85);
          margin: 0;
        }

        /* Buttons row */
        .buttons {
          display: flex;
          gap: 16px;
          margin-top: 6px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cta-primary {
          background: linear-gradient(to right, cyan, purple, pink);
          padding: 14px 36px;
          border-radius: 999px;
          font-size: 16px;
        }

        .cta-secondary {
          border: 2px solid rgba(255,255,255,0.08);
          padding: 14px 36px;
          border-radius: 999px;
          font-size: 16px;
        }

        /* small pulsing stars */
        .animate-pulse { animation: pulse 2s infinite; }
        @keyframes pulse {
          0% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 0.7; transform: scale(1); }
        }

        /* Scroll Indicator */
        .scroll-indicator { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .mouse { width: 28px; height: 42px; border-radius: 20px; border: 2px solid rgba(255,255,255,0.35); position: relative; }
        .scroll-dot { position: absolute; top: 8px; left: 50%; transform: translateX(-50%); width: 4px; height: 8px; border-radius: 3px; background: white; animation: scrollMove 1.5s infinite; }
        @keyframes scrollMove { 0% { transform: translate(-50%, 0); opacity: 1 } 100% { transform: translate(-50%, 12px); opacity: 0 } }

        /* Responsive tweaks */
        @media (max-width: 980px) {
          .nav-links { display: none; }
          .socials { display: none; }
          .hamburger { display: block; }
          .stack { gap: 18px; padding: 0 12px; }
          .title-hackfest { font-size: 80px; letter-spacing: -0.5px; }
          .title-year { font-size: 44px; }
          .subtitle { font-size: 16px; }
          .buttons { gap: 12px; width: 100%; }
          .cta-primary, .cta-secondary { width: 100%; justify-content: center; padding: 14px 20px; }
        }

        /* Mobile Menu Styles */
        .mobile-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          padding: 24px 20px;
          background: rgba(10, 1, 24, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .mobile-menu-item {
          color: white;
          font-size: 18px;
          font-weight: 500;
          padding: 12px 24px;
          width: 100%;
          text-align: center;
          border-radius: 12px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
        }

        .mobile-menu-item:hover {
          background: linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(168, 85, 247, 0.15));
          border: 1px solid rgba(0, 245, 255, 0.3);
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(0, 245, 255, 0.25);
          color: #00f5ff;
        }

        .mobile-menu-item:active {
          transform: translateX(2px) scale(0.98);
        }

        .mobile-socials {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-social-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .mobile-social-icon:hover {
          background: linear-gradient(135deg, rgba(0, 245, 255, 0.25), rgba(168, 85, 247, 0.25));
          border-color: rgba(0, 245, 255, 0.5);
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 24px rgba(0, 245, 255, 0.4);
          color: #00f5ff;
        }

        .mobile-social-icon:active {
          transform: translateY(-2px) scale(1.05);
        }
      `}</style>
    </section>
  );
}