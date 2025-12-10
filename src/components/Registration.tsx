import React, { useState } from 'react';
import { User, Mail, Phone, Users, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

export function Registration() {
  return (
    <section id="register" className="relative py-32 px-8 lg:px-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">JOIN US</span>
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-4">Register Now</h2>
          <p className="text-xl text-gray-400 ml-8">Secure your spot at HackFest 2025 - Limited seats available!</p>
        </div>

        <div className="flex flex-col gap-2">
          {/* Registration Form */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 max-w-2xl mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />

            <div className="relative text-center">
              <h3 className="text-3xl text-white mb-8">Registration Form</h3>

              <button
                onClick={() => window.open("https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform", "_blank")}
                className="group mx-auto block py-5 px-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-white text-lg">Open Google Form</span>
                  <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </button>

              <p className="text-center text-gray-400 text-sm mt-4">
                Registration deadline: <span className="text-cyan-400">March 10, 2025</span>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className='mt-5'>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  100
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
                  1st,2nd,3rd
                </div>
                <div className="text-gray-400 text-sm">Students</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
