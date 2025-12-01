import React, { useState } from 'react';
import { User, Mail, Phone, Users, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

export function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    team: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registration submitted! Check your email for confirmation.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    'Access to all 4 pre-hackathon workshops',
    '36 hours of intensive coding experience',
    'Mentorship from industry experts',
    'Meals and refreshments throughout',
    'Exclusive swag bag and certificate',
    'Chance to win $10K+ in prizes',
  ];

  return (
    <section id="register" className="relative py-32 px-8 lg:px-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">JOIN US</span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-4">Register Now</h2>
          <p className="text-xl text-gray-400">Secure your spot at HackFest 2025 - Limited seats available!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
            
            <div className="relative">
              <h3 className="text-3xl text-white mb-8">Registration Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Institution *</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Your University"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Team Name (Optional)</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      name="team"
                      value={formData.team}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Code Warriors (or join a team later)"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group w-full py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-white text-lg">Complete Registration</span>
                    <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </button>

                <p className="text-center text-gray-400 text-sm">
                  Registration deadline: <span className="text-cyan-400">March 10, 2025</span>
                </p>
              </form>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="relative bg-gradient-to-br from-purple-900/40 via-cyan-900/40 to-pink-900/40 backdrop-blur-sm border border-white/10 rounded-3xl p-10 mb-8">
              <h3 className="text-3xl text-white mb-6">What's Included</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  FREE
                </div>
                <div className="text-gray-400 text-sm">Entry Fee</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  2-4
                </div>
                <div className="text-gray-400 text-sm">Per Team</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  ALL
                </div>
                <div className="text-gray-400 text-sm">Skill Levels</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
