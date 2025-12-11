import React from 'react';
import { Trophy, Zap, Layers, Users } from 'lucide-react';

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
      icon: Layers,
      value: 'Domains',
      label: 'Web Dev • ML • IoT',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Users,
      value: 'Teamwork',
      label: 'Collaborate & Build',
      gradient: 'from-pink-400 to-purple-500',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-8 lg:px-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col items-center h-full transition-all hover:border-white/20"
              >
                {/* subtle hover glow */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Centered content */}
                <div className="relative flex flex-col items-center w-full">
                  {/* Icon container with gradient */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 mb-3 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105`}
                    // apply gradient as separate element using tailwind gradient classes
                  >
                    <div className={`w-full h-full rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.gradient}`}>
                      <Icon className="text-white" size={22} />
                    </div>
                  </div>

                  {/* Value - gradient clipped text */}
                  <div className={`mb-1 text-2xl sm:text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent ${stat.gradient} bg-gradient-to-br`}>
                    <span className="whitespace-nowrap select-none">{stat.value}</span>
                  </div>

                  {/* Label */}
                  <div className="text-gray-400 text-sm text-center max-w-[12rem] sm:max-w-[14rem]">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">ABOUT THE EVENT</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">Why Join HackFest?</h2>

          <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed ml-8">
            HackFest 2025 is IEEE's flagship hackathon bringing together the brightest minds to solve real-world problems through innovation and collaboration. Join teams across domains to build prototypes, learn from mentors, and compete for exciting prizes.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-left">
              <h4 className="text-xl text-white mb-2">Workshops & Mentorship</h4>
              <p className="text-gray-400">Pre-event workshops and on-site mentors to help you ship polished projects.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-left">
              <h4 className="text-xl text-white mb-2">Networking & Opportunities</h4>
              <p className="text-gray-400">Connect with industry leaders, recruiters, and fellow innovators for future opportunities.</p>
            </div>
          </div>

          <div className="flex justify-start mt-10">
  <ul className="space-y-4 text-left max-w-xl">
    {[
      '36 hours of immersive coding with round-the-clock support',
      'Access to modern tools, frameworks & cloud resources',
      'Win exciting prizes, internships & exclusive hackathon swag',
    ].map((item, idx) => (
      <li key={idx} className="flex items-start space-x-3">
        <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-md flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="text-gray-300 text-[1rem] leading-relaxed font-medium tracking-wide">
          {item}
        </span>
      </li>
    ))}
  </ul>
</div>

        </div>

        {/* Prize Pool Highlight */}
        <div className="relative bg-gradient-to-r from-purple-900/30 via-cyan-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-cyan-500/8 to-pink-500/8 pointer-events-none" />

          <div className="relative text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-white mb-3">Exciting Prize Pool</h3>

            <div className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              ₹10,000+
            </div>

            <p className="text-sm md:text-base text-gray-300 mb-6 mx-auto max-w-2xl">
              Cash prizes, internship opportunities, tech gadgets, and exclusive swag
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-2xl text-yellow-400 mb-1">🥇</div>
                <div className="text-lg text-white mb-1">₹6,000</div>
                <div className="text-sm text-gray-400">First Prize</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-2xl text-gray-300 mb-1">🥈</div>
                <div className="text-lg text-white mb-1">₹4,000</div>
                <div className="text-sm text-gray-400">Second Prize</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
