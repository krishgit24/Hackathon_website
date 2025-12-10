// src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="relative  flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0118] via-[#1603369d] to-[#0a0014d5]" />


      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

      {/* Hackathon Name */}
      <div className="relative z-10 text-center px-8">
        <h1 className="text-6xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight font-bold uppercase">
          HACKFEST
        </h1>
      </div>
    </footer>
  );
}
