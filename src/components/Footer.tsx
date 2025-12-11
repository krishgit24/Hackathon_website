// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-10 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0118] via-[#1603369d] to-[#0a0014d5]" />

      {/* Soft orbs */}
      <div className="absolute top-10 right-10 w-[220px] h-[220px] bg-purple-600/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-cyan-600/20 rounded-full blur-[100px]" />

      {/* Centered Text */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="
            text-4xl 
            md:text-5xl 
            lg:text-6xl 
            font-bold 
            uppercase
            tracking-[0.04em]    /* ✔ very light spacing */
            bg-gradient-to-r 
            from-cyan-300 
            via-purple-400 
            to-pink-400 
            bg-clip-text 
            text-transparent
          "
        >
          HACKFEST
        </h1>
      </div>
    </footer>
  );
}
