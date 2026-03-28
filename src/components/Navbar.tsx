"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b-[3px] border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-charcoal">
              Chattanooga&apos;s Upstanding Members
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["members", "trivia", "blog", "about"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="font-display font-bold text-slategray hover:text-charcoal transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-charcoal bg-eggshell"
          >
            <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream border-t-2 border-charcoal">
          <div className="px-4 py-4 space-y-3">
            {["members", "trivia", "blog", "about"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="block font-display font-bold text-lg text-slategray hover:text-charcoal"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
