import React from 'react';
import { Hero } from './components/Hero';
import { Workshops } from './components/Workshops';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Sponsors } from './components/Sponsors';
import { Registration } from './components/Registration';
import Footer  from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      <Hero />
      <Workshops />
      <About />
      <Timeline />
      <Sponsors />
      <Registration />
      <Footer />
    </div>
  );
}
