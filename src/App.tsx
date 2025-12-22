import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Sponsors } from "./components/Sponsors";
import { Registration } from "./components/Registration";
import Footer from "./components/Footer";

import RegisterForm from "./pages/RegisterForm";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0118]">
      <Hero />
      <About />
      <Timeline />
      <Sponsors />
      <Registration />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}
