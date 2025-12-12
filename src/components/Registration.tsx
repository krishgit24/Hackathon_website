import React, { useState } from 'react';
import { User, Mail, Phone, Users, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

export function Registration() {
  return (
    <section id="register" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">JOIN US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 font-bold">
            Register Now
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 px-4">
            Secure your spot at HackFest 2025 - Limited seats available!
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {/* Registration Form */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl md:rounded-3xl" />

            <div className="relative text-center">
              <h3 className="text-2xl sm:text-3xl text-white mb-6 md:mb-8 font-semibold">
                Registration Form
              </h3>

              <button
                onClick={() => window.open("https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform", "_blank")}
                className="group w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto block py-4 md:py-5 px-6 md:px-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-white text-base md:text-lg font-medium">
                    Open Google Form
                  </span>
                  <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              </button>

              <p className="text-center text-gray-400 text-sm md:text-base mt-4 px-4">
                Registration deadline: <span className="text-cyan-400 font-semibold">March 10, 2025</span>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className='mt-2 md:mt-5'>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 transition-all">
                <div className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 font-bold">
                  ₹100
                </div>
                <div className="text-gray-400 text-sm md:text-base">Entry Fee</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 transition-all">
                <div className="text-2xl sm:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 font-bold">
                  2-4
                </div>
                <div className="text-gray-400 text-sm md:text-base">Per Team</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 transition-all">
                <div className="text-2xl sm:text-3xl bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2 font-bold">
                  1st, 2nd, 3rd
                </div>
                <div className="text-gray-400 text-sm md:text-base">Prize Winners</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}