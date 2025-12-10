import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export function Timeline() {
  const phases = [
    {
      phase: "DAY 1",
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Meet & Setup",
          description:
            "Kick off the event with introductions, team sync-up, and environment setup to prepare for coding."
        },
        {
          time: "10:00 AM - 4:00 PM",
          title: "Coding",
          description:
            "Dedicated development session focused on building core project features, rapid prototyping, and shaping your solution."
        },
        {
          time: "4:00 PM - 5:00 PM",
          title: "Mentorship Round 1",
          description:
            "Receive strategic guidance from experienced mentors to refine ideas, resolve blockers, and strengthen your approach."
        },
        {
          time: "10:00 PM - 11:00 PM",
          title: "Mentorship Round 2",
          description:
            "Late-night mentor support to review progress, validate decisions, and prepare for the next development phase."
        }
      ]
    },

    {
      phase: "DAY 2",
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-700",
      events: [
        {
          time: "4:00 AM - 5:00 AM",
          title: "Mentorship Round 3",
          description:
            "Connect with mentors for early-morning guidance, idea refinement, and technical support."
        },
        {
          time: "10:00 AM",
          title: "Coding Ends",
          description:
            "Wrap up all development work and prepare final assets for submission."
        },
        {
          time: "11:00 AM",
          title: "Final Submission Deadline",
          description:
            "Submit all project materials including code, documentation, and demo video before the final cutoff."
        },
        {
          time: "12:00 PM",
          title: "First Round Results",
          description:
            "Evaluation results from the first judging round are announced."
        }
      ]
    }
  ];


  return (
    <section id="timeline" className="relative py-32 px-8 lg:px-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">SCHEDULE</span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-4">Event Timeline</h2>
          <p className="text-xl text-gray-400">Your complete journey from workshops to victory</p>
        </div>

        <div className="space-y-16">
          {phases.map((phase, phaseIndex) => (
            <div key={phaseIndex}>
              {/* Phase Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className={`px-6 py-3 bg-gradient-to-r ${phase.gradient} rounded-full`}>
                  <span className="text-white tracking-wider">{phase.phase}</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              {/* Events */}
              <div className="grid md:grid-cols-2 gap-6">
                {phase.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`} />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`px-4 py-2 bg-gradient-to-r ${phase.gradient} rounded-lg`}>
                          <span className="text-white">{event.time}</span>
                        </div>
                        <Clock className={`text-${phase.color}-400`} size={20} />
                      </div>
                      <h3 className="text-xl text-white mb-2">{event.title}</h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
