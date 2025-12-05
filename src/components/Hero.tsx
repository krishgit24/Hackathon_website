import React, { useState } from 'react';
import { Linkedin, Instagram, ArrowRight, Sparkles } from 'lucide-react';
import ieeelogo from '../Assets/logo.png';

export function Hero() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: "about", label: "About" },
    { id: "workshops", label: "Workshops" },
    { id: "timeline", label: "Timeline" },
    { id: "sponsors", label: "Sponsors" },
    { id: "register", label: "Register" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />
      
      {/* Stars */}
      <div className="absolute top-20 right-[15%] w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-100" />
      <div className="absolute bottom-[40%] left-[20%] w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200" />
      <div className="absolute top-[15%] left-[30%] w-1 h-1 bg-white rounded-full animate-pulse" />
      <div className="absolute bottom-[25%] right-[35%] w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-300" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top Navigation with Navbar in Center */}
        <nav className="relative flex items-center justify-between px-8 lg:px-20 py-8">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0 z-10">
            <img 
              src={ieeelogo} 
              alt="IEEE Logo" 
              className="w-12 h-12 object-contain" 
            />
            <div>
              <div className="text-white text-2xl">IEEE-VESIT</div>
              <div className="text-gray-400 text-xl"></div>
            </div>
          </div>

          {/* Center: Navigation Menu with Animated Underlines */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-6 lg:gap-10 xl:gap-12">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative text-white text-base lg:text-lg font-semibold uppercase tracking-wider pb-4 px-3 cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span 
                    className="absolute bottom-0 left-0 bg-white rounded-full origin-left"
                    style={{ 
                      width: '100%',
                      height: '1px',
                      transform: hoveredItem === item.id ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.3s ease-out',
                      zIndex: 20
                    }}
                  ></span>
                </a>
              ))}
            </div>
          </div>


          {/* Right: Social Media Icons */}
          <div className="flex items-center space-x-4 flex-shrink-0 z-10">
            <a href="#" className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all">
              <Linkedin className="text-gray-400 hover:text-cyan-400 transition-colors" size={18} />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all">
              <Instagram className="text-gray-400 hover:text-cyan-400 transition-colors" size={18} />
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center px-8 lg:px-20 pb-20">
          <div className="max-w-7xl w-full">
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-8">
                <Sparkles className="text-cyan-400" size={16} />
                <span className="text-cyan-400 text-sm">MARCH 15-17, 2025</span>
              </div>
              
              <h1 className="text-7xl lg:text-9xl text-white mb-4 tracking-tight">
                HACKFEST
              </h1>
              <h2 className="text-6xl lg:text-8xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                2025
              </h2>
              <p className="text-2xl lg:text-3xl text-gray-400 max-w-3xl mb-12">
                24 hours of innovation • ₹10K+ prizes 
              </p>
            </div>

            {/* Workshop Circles */}
            {/* <div className="mb-16"> */}
              {/* <h3 className="text-xl text-gray-400 mb-3 tracking-wider">PRE-HACKATHON</h3> */}
              {/* <h2 className="text-4xl lg:text-5xl text-white mb-12">Workshop Series</h2> */}
              
              {/* <div className="flex flex-wrap gap-8"> */}
                {/* Workshop 1 */}
                {/* <div className="group relative">
                  <div className="w-48 h-48 rounded-full border-4 border-purple-500 bg-gradient-to-br from-purple-900/40 to-transparent backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                    <svg className="w-16 h-16 mb-3" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M8 10L10 12L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="text-white text-center">
                      <div className="text-lg">CODING</div>
                      <div className="text-sm text-gray-400">ESSENTIALS</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs">1</div>
                </div> */}

                {/* Workshop 2 */}
                {/* <div className="group relative">
                  <div className="w-48 h-48 rounded-full border-4 border-cyan-500 bg-gradient-to-br from-cyan-900/40 to-transparent backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                    <svg className="w-16 h-16 mb-3" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="text-white text-center">
                      <div className="text-lg">DESIGN</div>
                      <div className="text-sm text-gray-400">THINKING</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs">2</div>
                </div> */}

                {/* Workshop 3 */}
                {/* <div className="group relative">
                  <div className="w-48 h-48 rounded-full border-4 border-pink-500 bg-gradient-to-br from-pink-900/40 to-transparent backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                    <svg className="w-16 h-16 mb-3" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
                      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div className="text-white text-center">
                      <div className="text-lg">IOT & AI</div>
                      <div className="text-sm text-gray-400">BASICS</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-xs">3</div>
                </div> */}

                {/* Workshop 4 */}
                {/* <div className="group relative">
                  <div className="w-48 h-48 rounded-full border-4 border-emerald-500 bg-gradient-to-br from-emerald-900/40 to-transparent backdrop-blur-sm flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
                    <svg className="w-16 h-16 mb-3" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M3 9h18M9 3v18" stroke="white" strokeWidth="2"/>
                    </svg>
                    <div className="text-white text-center">
                      <div className="text-lg">WEB DEV</div>
                      <div className="text-sm text-gray-400">MASTERY</div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">4</div>
                </div>
              </div> */}
            {/* </div> */}

            {/* CTA */}
            <div className="flex flex-wrap gap-6">
              <a 
                href="#register"
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center space-x-3">
                  <span className="text-white text-lg">REGISTER NOW</span>
                  <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </a>
              <a 
                href="#workshops"
                className="px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white rounded-full hover:bg-white/10 hover:border-cyan-500/50 transition-all text-lg"
              >
                VIEW WORKSHOPS
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
