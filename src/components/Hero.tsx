export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-eggshell to-off-white py-20 md:py-32">
      <div className="absolute top-0 left-[10%] w-3 h-16 bg-beige/40 rounded-b-full animate-drip" />
      <div className="absolute top-0 left-[30%] w-2 h-12 bg-warmgray/30 rounded-b-full animate-drip" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-0 left-[55%] w-4 h-20 bg-beige/30 rounded-b-full animate-drip" style={{ animationDelay: "1s" }} />
      <div className="absolute top-0 left-[75%] w-2 h-14 bg-warmgray/40 rounded-b-full animate-drip" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-0 left-[90%] w-3 h-10 bg-drip/50 rounded-b-full animate-drip" style={{ animationDelay: "0.8s" }} />

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pearl/50 blob-shape blur-3xl" />

        <div className="relative">
          <p className="font-display text-lg md:text-xl text-warmgray mb-4 animate-wobble inline-block">
            💧 Est. 2023 — Chattanooga, TN 💧
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6 leading-tight">
            Chattanooga&apos;s<br />
            <span className="text-slategray">Upstanding</span><br />
            Members
          </h1>

          <p className="font-body text-xl md:text-2xl text-slategray max-w-2xl mx-auto mb-10 leading-relaxed">
            A tight-knit group of{" "}
            <span className="font-bold text-charcoal">11 outstanding individuals</span>{" "}
            who come together every week to release their full intellectual potential at trivia night.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#members" className="card-cartoon bg-charcoal text-cream px-8 py-4 font-display font-bold text-lg hover:bg-slategray">
              Meet the Members 💦
            </a>
            <a href="#trivia" className="card-cartoon bg-eggshell text-charcoal px-8 py-4 font-display font-bold text-lg hover:bg-pearl">
              See Our Scores 📊
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" preserveAspectRatio="none">
          <path d="M0,64 C120,90 240,100 360,80 C480,60 520,100 600,100 C680,100 720,70 840,64 C960,58 1080,90 1200,80 C1320,70 1380,90 1440,64 L1440,120 L0,120 Z" fill="#FAF8F5" />
        </svg>
      </div>
    </section>
  );
}
