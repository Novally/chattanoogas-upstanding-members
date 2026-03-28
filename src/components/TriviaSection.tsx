import { triviaScores } from "@/data/triviaScores";

export default function TriviaSection() {
  return (
    <section id="trivia" className="py-20 bg-cream relative">
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full rotate-180" preserveAspectRatio="none">
          <path d="M0,32 C180,50 360,10 540,32 C720,54 900,10 1080,32 C1260,54 1350,20 1440,32 L1440,60 L0,60 Z" fill="#FAF8F5" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Weekly Trivia Scores 📊</h2>
          <p className="section-subheading">Tracking our output week over week. Some weeks we erupt, some weeks we dribble.</p>
        </div>
        <div className="space-y-4">
          {triviaScores.map((week) => (
            <div key={week.week} className="card-cartoon bg-off-white p-6 flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:w-32 shrink-0">
                <p className="font-display font-bold text-lg text-charcoal">Week {week.week}</p>
                <p className="text-xs text-warmgray">{week.date}</p>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-slategray">{week.placement}</span>
                  <span className="font-display font-bold text-charcoal">{week.score}/{week.maxScore}</span>
                </div>
                <div className="w-full h-4 bg-eggshell rounded-full border-2 border-charcoal overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-warmgray to-beige rounded-full transition-all duration-1000 relative"
                    style={{ width: `${(week.score / week.maxScore) * 100}%` }}
                  >
                    <div className="absolute right-0 -bottom-1 w-2 h-3 bg-beige rounded-b-full" />
                  </div>
                </div>
                <p className="text-xs text-slategray mt-1 italic">{week.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
