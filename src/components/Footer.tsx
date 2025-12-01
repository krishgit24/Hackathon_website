import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16 px-8 lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0118]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-sm">IEEE</span>
              </div>
              <div>
                <div className="text-white text-lg">HACKFEST</div>
                <div className="text-gray-400 text-xs">2025</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering innovation through technology and collaboration.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                <Twitter className="text-gray-400 hover:text-cyan-400 transition-colors" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                <Linkedin className="text-gray-400 hover:text-cyan-400 transition-colors" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                <Instagram className="text-gray-400 hover:text-cyan-400 transition-colors" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/50 transition-all">
                <Github className="text-gray-400 hover:text-cyan-400 transition-colors" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About HackFest
                </a>
              </li>
              <li>
                <a href="#workshops" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Workshop Series
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Event Timeline
                </a>
              </li>
              <li>
                <a href="#sponsors" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Become a Sponsor
                </a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Register Now
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Judging Criteria
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Prizes & Awards
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Past Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Email</div>
                  <a href="mailto:hackfest@ieee.org" className="text-white hover:text-cyan-400 transition-colors">
                    hackfest@ieee.org
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Phone</div>
                  <a href="tel:+15551234567" className="text-white hover:text-cyan-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
                <div>
                  <div className="text-gray-400 text-sm mb-1">Location</div>
                  <span className="text-white">
                    Engineering Campus<br />Building A
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left flex items-center space-x-2">
            <span>© 2025 IEEE Student Branch. Made</span>
            <span>by the IEEE Team</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px]" />
    </footer>
  );
}
