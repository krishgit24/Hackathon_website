import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, Users, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

export function Registration() {

  /* ================= Countdown Logic ================= */
  const targetDate = new Date("2026-01-03T09:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  /* =================================================== */

  return (
    <section id="register" className="relative py-10 md:py-10 px-4 sm:px-6 lg:px-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full mb-6">
            <span className="text-cyan-400 text-sm tracking-wider">JOIN US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 font-bold">
            Register Now
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 px-4">
            Secure your spot at Arcane 2026
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {/* Registration Form */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl md:rounded-3xl" />

            <div className="relative text-center">
{/* ================= BIG Timer INSIDE Form ================= */}
{/* ================= BIG Timer INSIDE Form ================= */}
{timeLeft && (
  <div className="mb-4 flex justify-center">
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-10 w-full max-w-5xl">
      
      <p className="text-gray-300 text-2xl md:text-2xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 tracking-[0.3em] text-center">
        HACKATHON STARTS IN
      </p>

      <div className="flex justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="text-center flex-1 min-w-0">
            
            <div
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
                font-extrabold
                bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400
                bg-clip-text text-transparent
                leading-none
                break-words
              "
            >
              {String(value).padStart(2, '0')}
            </div>

            <div className="text-gray-400 text-sm mt-1 sm:mt-2 md:mt-3 lg:mt-4 uppercase tracking-widest">
              {label}
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
)}
{/* ===================================================== */}

{/* ===================================================== */}

              <h3 className="text-2xl sm:text-3xl text-white mb-6 md:mb-8 font-semibold">
                Registration Form
              </h3>

              <a
  href="/register"
  target="_blank"
  rel="noopener noreferrer"
  className="group w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto block py-4 md:py-5 px-6 md:px-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/50 transition-all text-center"
>
  <span className="text-white text-base md:text-lg font-medium">
    Proceed to Registration
  </span>
</a>



              <p className="text-center text-gray-400 text-sm md:text-base mt-4 px-4">
                Registration deadline: <span className="text-cyan-400 font-semibold">January 2nd, 2026</span>
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className='mt-2 md:mt-5'>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 transition-all">
                <div className="text-2xl sm:text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 font-bold">
                  ₹ 50
                </div>
                <div className="text-gray-400 text-sm md:text-base">Entry Fee (Non-member)</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 transition-all">
                <div className="text-2xl sm:text-3xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 font-bold">
                  2-4
                </div>
                <div className="text-gray-400 text-sm md:text-base">Per Team</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 text-center hover:bg-white/10 transition-all">
                <div className="text-2xl sm:text-3xl bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2 font-bold">
                  FE, SE, & TE
                </div>
                <div className="text-gray-400 text-sm md:text-base">Years Allowed</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
