import React from 'react';
import { Building2, Lightbulb } from 'lucide-react';

export function Sponsors() {
  const platinumSponsors = [
    { name: 'TECHCORP', icon: Building2, gradient: 'from-cyan-500 to-cyan-700' },
    { name: 'INNOVATION LABS', icon: Lightbulb, gradient: 'from-purple-500 to-purple-700' },
  ];

  return (
    <section id="sponsors" className="relative py-24 px-8 lg:px-20 ">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">PARTNERS</span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-400">Proudly supported by industry leaders</p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-full">
              <span className="text-yellow-400 tracking-wider">PLATINUM SPONSORS</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {platinumSponsors.map((sponsor, index) => {
              const Icon = sponsor.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-12 hover:border-white/40 transition-all"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl`} />
                  <div className="relative text-center">
                    <div className={`inline-flex w-24 h-24 mb-6 bg-gradient-to-br ${sponsor.gradient} rounded-2xl items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={48} />
                    </div>
                    <h3 className="text-3xl text-white">{sponsor.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
