import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export function Timeline() {
  const phases = [
    {
      phase: 'PRE-EVENT',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-700',
      events: [
        { time: 'March 1', title: 'Workshop 1: Coding Essentials', description: '2:00 PM - 5:00 PM' },
        { time: 'March 5', title: 'Workshop 2: Design Thinking', description: '3:00 PM - 6:00 PM' },
        { time: 'March 8', title: 'Workshop 3: IoT & AI Basics', description: '1:00 PM - 4:00 PM' },
        { time: 'March 12', title: 'Workshop 4: Web Dev Mastery', description: '4:00 PM - 7:00 PM' },
      ],
    },
    {
      phase: 'DAY 1',
      color: 'cyan',
      gradient: 'from-cyan-500 to-cyan-700',
      events: [
        { time: '9:00 AM', title: 'Registration & Check-in', description: 'Collect your badge & swag' },
        { time: '10:00 AM', title: 'Opening Ceremony', description: 'Keynote & hackathon kickoff' },
        { time: '11:00 AM', title: 'Hacking Begins!', description: 'Start building your project' },
        { time: '1:00 PM', title: 'Lunch Break', description: 'Network with sponsors' },
        { time: '6:00 PM', title: 'Dinner & Mini Workshop', description: 'Evening session' },
      ],
    },
    {
      phase: 'DAY 2',
      color: 'pink',
      gradient: 'from-pink-500 to-pink-700',
      events: [
        { time: '12:00 AM', title: 'Midnight Checkpoint', description: 'Snacks & mentor support' },
        { time: '8:00 AM', title: 'Breakfast', description: 'Morning refreshments' },
        { time: '1:00 PM', title: 'Lunch', description: 'Keep coding!' },
        { time: '6:00 PM', title: 'Dinner', description: 'Final push begins' },
      ],
    },
    {
      phase: 'DAY 3',
      color: 'emerald',
      gradient: 'from-emerald-500 to-emerald-700',
      events: [
        { time: '8:00 AM', title: 'Breakfast', description: 'Last meal before submission' },
        { time: '11:00 AM', title: 'Submission Deadline', description: 'Projects must be submitted' },
        { time: '1:00 PM', title: 'Presentations', description: 'Pitch to the judges' },
        { time: '5:00 PM', title: 'Awards Ceremony', description: 'Winners announced!' },
      ],
    },
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
