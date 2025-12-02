// src/components/Footer.tsx
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";
import logo from "../Assets/logo.png"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6 lg:px-20 overflow-hidden ">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0118]" />

      <div className="relative z-10 max-w-7xl mx-auto mt-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10 text-white">
          {/* Logo + Tagline */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <img
                src={logo}
                alt="IEEE VESIT Logo"
                className="w-12 h-12 object-contain rounded-md"
                style={{ maxHeight: 48 }}
              />
              <div>
                <div className="text-white text-lg font-semibold">IEEE VESIT</div>
                <div className="text-gray-400 text-xs">HackFest 2025</div>
              </div>
            </div>

            <p className="text-gray-400 mb-4">Innovating Tomorrow — Empowering Today.</p>

            <div className="flex items-center my-3">
              <div className="border-t border-white/10 flex-grow mx-2" />
              <p className="text-xs italic text-gray-300 text-center mb-4" >Innovating Tomorrow Empowering Today</p>
              <div className="border-t border-white/10 flex-grow mx-2" />
            </div>

            <div className="flex space-x-3 mt-3">
              <a href="https://www.instagram.com/ieee_vesit/?hl=en" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <Instagram size={18} className="text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/company/ieeevesit/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <Linkedin size={18} className="text-gray-300" />
              </a>
              <a href="https://github.com/ieee-vesit" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <Github size={18} className="text-gray-300" />
              </a>
              <a href="mailto:ieee.vesit@ves.ac.in" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <Mail size={18} className="text-gray-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/vesit_tank" className="hover:text-cyan-400 transition-colors">Upcoming</a></li>
              <li><a href="/current_council" className="hover:text-cyan-400 transition-colors">Council</a></li>
              <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
              <li><a href="/developers" className="hover:text-cyan-400 transition-colors">Developers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg mb-3">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 mt-1" size={18} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <address className="not-italic text-white text-sm">
                    Vivekanand Education Society's Institute Of Technology
                    <br />
                    Hashu Advani Memorial Complex,
                    <br />
                    Collector's Colony, Chembur, Mumbai, Maharashtra 400074
                  </address>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Phone className="text-cyan-400 mt-1" size={18} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Phone</div>
                  <a href="tel:+919867615388" className="text-white hover:text-cyan-400 transition-colors text-sm">+91 8450914156 — Rakshit Sharma (Chairperson)</a>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <Mail className="text-cyan-400 mt-1" size={18} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <a href="mailto:ieee.vesit@ves.ac.in" className="text-white hover:text-cyan-400 transition-colors text-sm">ieee.vesit@ves.ac.in</a>
                </div>
              </li>
            </ul>
          </div>

          {/* HackFest */}
          <div>
            <h3 className="text-white text-lg mb-3">HackFest</h3>
            <p className="text-gray-400 mb-3">Empowering innovation through technology and collaboration.</p>
            <h4 className="text-gray-200 text-sm mb-1">Event Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About HackFest</a></li>
              <li><a href="#workshops" className="hover:text-cyan-400 transition-colors">Workshop Series</a></li>
              <li><a href="#timeline" className="hover:text-cyan-400 transition-colors">Event Timeline</a></li>
              <li><a href="#sponsors" className="hover:text-cyan-400 transition-colors">Become a Sponsor</a></li>
              <li><a href="#register" className="hover:text-cyan-400 transition-colors">Register Now</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 IEEE VESIT • HackFest • All Rights Reserved</p>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="/privacy" className="hover:text-cyan-400 text-sm">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-400 text-sm">Terms of Service</a>
            <a href="/cookie" className="hover:text-cyan-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* decorative glows */}
      <div className="absolute bottom-[-20%] left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-20%] right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px]" />
    </footer>
  );
}
