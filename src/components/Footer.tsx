export default function Footer() {
  return (
    <footer id="about" className="bg-charcoal text-cream relative">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" className="w-full rotate-180" preserveAspectRatio="none">
          <path d="M0,20 Q120,40 240,20 Q360,0 480,20 Q600,40 720,20 Q840,0 960,20 Q1080,40 1200,20 Q1320,0 1440,20 L1440,40 L0,40 Z" fill="#FAF8F5" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display font-bold text-2xl mb-4">Chattanooga&apos;s Upstanding Members</h3>
            <p className="text-warmgray leading-relaxed text-sm">
              Chattanooga&apos;s Upstanding Members — a group of 11 passionate individuals who come together weekly to spill their knowledge all over trivia night.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-warmgray">
              <li><a href="#members" className="hover:text-cream transition-colors">Our Members</a></li>
              <li><a href="#trivia" className="hover:text-cream transition-colors">Trivia Scores</a></li>
              <li><a href="#blog" className="hover:text-cream transition-colors">The Drip Feed</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg mb-4">By the Numbers</h4>
            <div className="space-y-2 text-sm text-warmgray">
              <p><span className="font-bold text-cream text-xl">11</span> Upstanding Members</p>
              <p><span className="font-bold text-cream text-xl">50+</span> Trivia Nights</p>
              <p><span className="font-bold text-cream text-xl">∞</span> Good Times</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slategray/30 pt-8 text-center">
          <p className="font-display text-sm text-warmgray">© {new Date().getFullYear()} Chattanooga&apos;s Upstanding Members. All rights reserved.</p>
          <p className="text-xs text-slategray mt-2">Made with ❤️ in Chattanooga, TN</p>
        </div>
      </div>
    </footer>
  );
}
