export function Hero() {
  return (
    <section className="relative bg-black pt-24 pb-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Every Hire,
            <br />
            <span className="text-[#3B82F6]">Faster and Better</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Stop losing great candidates to slow processes. Our AI handles the
            heavy lifting while you focus on building your team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-base">
              Start Hiring Now
            </button>
            <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-lg border border-white/20 transition-all text-base">
              See How It Works
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-5 hover:border-[#3B82F6]/50 transition-all">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#0EA5E9] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">SK</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Sarah K. • Recruiter
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              "This candidate's technical score is 96% based on the Ruby
              assessment."
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-5 hover:border-[#3B82F6]/50 transition-all">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">RM</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Rahul M. • Hiring Manager
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              "Strong portfolio! Let's move them to the final stage today."
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-5 hover:border-[#3B82F6]/50 transition-all">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#06B6D4] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">PG</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Priya S. • HR Lead
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              "Culture fit matches our team 90% perfectly. Really for
              interview."
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-5 hover:border-[#3B82F6]/50 transition-all">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">AT</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Amit T. • Coordinator
                </p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              "Sent the offer package! AI documents are ready for e-sign."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
