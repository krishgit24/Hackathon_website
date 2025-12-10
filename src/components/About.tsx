import React from 'react';
import { Trophy, Zap, Layers, Code2 } from 'lucide-react';

export function About() {
const stats = [
  {
    icon: Trophy,
    value: '₹10K+',
    label: 'Prize Pool',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Zap,
    value: '24 Hours',
    label: 'Non-Stop',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Layers, // Lucide icon for domains
    value: '3 Domains',
    label: 'Web Dev • ML • IoT',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Code2, // Lucide icon for tech freedom
    value: 'Tech Freedom',
    label: 'React, Python, Node.js, Arduino & More',
    gradient: 'from-emerald-400 to-teal-500',
  },
];


  return (
    <section id="about" className="relative py-32 px-8 lg:px-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  <div className={`text-4xl lg:text-5xl bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Content - centered and expanded to fill removed tracks space */}
        <div className="max-w-3xl mx-auto mb-32 text-center">
          <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">ABOUT THE EVENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">Why Join HackFest?</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
            HackFest 2025 is IEEE's flagship hackathon bringing together the brightest minds to solve real-world problems through innovation and collaboration. Join teams across domains to build prototypes, learn from mentors, and compete for exciting prizes.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left">
              <h4 className="text-2xl text-white mb-2 ">Workshops & Mentorship</h4>
              <p className="text-gray-400 text-lg">Pre-event workshops and on-site mentors to help you ship polished projects.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left">
              <h4 className="text-2xl text-white mb-2 ">Networking & Opportunities</h4>
              <p className="text-gray-400 text-lg">Connect with industry leaders, recruiters, and fellow innovators for future opportunities.</p>
            </div>
          </div>

          <div className="flex justify-center">
  <ul className="mt-12 space-y-4 text-left">
    {[
      '36 hours of intensive coding with expert mentorship',
      'Access to cutting-edge tools and technologies',
      'Win cash prizes, internships and tech swag',
    ].map((item, index) => (
      <li key={index} className="flex items-start space-x-3">
        <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-gray-300 text-xl font-serif">{item}</span> {/* 👈 Add text-lg or larger */}
      </li>
    ))}
  </ul>
</div>

        </div>

        {/* Prize Pool Highlight */}
        <div className="relative bg-gradient-to-r from-purple-900/30 via-cyan-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10" />
          <div className="relative text-center">
            <h3 className="text-4xl lg:text-5xl text-white mb-4">Exciting Prize Pool</h3>
            <div className="text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              ₹10,000+
            </div>
            <p className="text-lg text-gray-300 mb-8">
              Cash prizes, internship opportunities, tech gadgets, and exclusive swag
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl text-yellow-400 mb-2">🥇</div>
                <div className="text-2xl text-white mb-1">₹6,000</div>
                <div className="text-gray-400">First Prize</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl text-gray-300 mb-2">🥈</div>
                <div className="text-2xl text-white mb-1">₹4,000</div>
                <div className="text-gray-400">Second Prize</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
