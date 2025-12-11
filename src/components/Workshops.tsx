import React from 'react';
import { Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

export function Workshops() {
  const workshops = [
    {
      number: "01",
      title: "Frontend",
      date: "March 1, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Google Meet(Online)",
      description:
        "Dive into modern frontend development with hands-on training in React, component-driven architecture, responsive design, and performance optimization. Build visually stunning and high-quality interfaces ready for real-world projects and hackathons.",
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      borderColor: "border-purple-500",
      bgGradient: "from-purple-500/10 to-transparent",
    },
    {
      number: "02",
      title: "Backend",
      date: "March 5, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Google Meet(Online)",
      description:
        "Learn the foundations of scalable backend architecture, APIs, authentication, and database management using Node.js and Express. Build secure, high-performance server systems that power real applications end-to-end.",
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-700",
      borderColor: "border-cyan-500",
      bgGradient: "from-cyan-500/10 to-transparent",
    },
  ];

  return (
    <section id="workshops" className="relative py-32 px-6 lg:px-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header - Center Aligned */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">SKILL BUILDING</span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-4">Workshop Series</h2>
          <p className="text-xl text-gray-400">
            Gear up for the hackathon with our comprehensive pre-event workshops. Learn from industry experts and build the skills you need to succeed.
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {workshops.map((w, index) => (
            <article
              key={index}
              className={`group relative flex flex-col h-full bg-gradient-to-br ${w.bgGradient} bg-white/5 backdrop-blur-sm border-2 ${w.borderColor} rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${w.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                aria-hidden
              />

              {/* CONTENT (flexes to fill available space) */}
              <div className="relative flex-1 flex flex-col">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-8xl bg-gradient-to-br ${w.gradient} bg-clip-text text-transparent opacity-20 select-none`}>
                    {w.number}
                  </div>
                  <div className={`px-4 py-2 bg-gradient-to-r ${w.gradient} rounded-full`}>
                    <span className="text-white text-sm">WORKSHOP</span>
                  </div>
                </div>

                {/* Title + Description */}
                <div className="mb-6">
                  <h3 className="text-3xl text-white mb-3">{w.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{w.description}</p>
                </div>

                {/* Info Grid (keeps natural height) */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${w.gradient} rounded-lg flex items-center justify-center`}>
                      <Calendar className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">Date</div>
                      <div className="text-white">{w.date}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${w.gradient} rounded-lg flex items-center justify-center`}>
                      <Clock className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">Time</div>
                      <div className="text-white">{w.time}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${w.gradient} rounded-lg flex items-center justify-center`}>
                      <MapPin className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">Location</div>
                      <div className="text-white">{w.location}</div>
                    </div>
                  </div>
                </div>

                {/* Spacer ensures CTA is always bottom-aligned */}
                <div className="mt-auto" />

                {/* CTA - stays at the bottom because parent is flex column */}
                <button
                  className={`w-full py-4 bg-white/5 border-2 ${w.borderColor} text-white rounded-xl hover:bg-gradient-to-r ${w.gradient} hover:border-transparent transition-all flex items-center justify-center space-x-2`}
                >
                  <span>Register for Workshop</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
