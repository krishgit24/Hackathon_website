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
    <section id="workshops" className="relative py-32 px-8 lg:px-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

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
        <div className="grid lg:grid-cols-2 gap-6">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className={`group  relative bg-gradient-to-br ${workshop.bgGradient} bg-white/5 backdrop-blur-sm border-2 ${workshop.borderColor} rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${workshop.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-8xl bg-gradient-to-br ${workshop.gradient} bg-clip-text text-transparent opacity-20`}>
                    {workshop.number}
                  </div>
                  <div className={`px-4 py-2 bg-gradient-to-r ${workshop.gradient} rounded-full`}>
                    <span className="text-white text-sm">WORKSHOP</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-3xl text-white mb-3">{workshop.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{workshop.description}</p>

                {/* Info Grid */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${workshop.gradient} rounded-lg flex items-center justify-center`}>
                      <Calendar className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">Date</div>
                      <div className="text-white">{workshop.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${workshop.gradient} rounded-lg flex items-center justify-center`}>
                      <Clock className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">Time</div>
                      <div className="text-white">{workshop.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${workshop.gradient} rounded-lg flex items-center justify-center`}>
                      <MapPin className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">Location</div>
                      <div className="text-white">{workshop.location}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className={`w-full py-4 bg-white/5 border-2 self-baseline ${workshop.borderColor} text-white rounded-xl hover:bg-gradient-to-r ${workshop.gradient} hover:border-transparent transition-all group/btn flex items-center justify-center space-x-2`}>
                  <span>Register for Workshop</span>
                  <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
