export function Testimonials() {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by People Leaders
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Testimonial 1 */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 hover:border-[#3B82F6]/30 transition-all">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1l2.928 6.472L20 8.273l-5.454 4.873L16.18 20 10 16.472 3.82 20l1.634-6.854L0 8.273l7.072-.801L10 1z"
                    fill="#3B82F6"
                  />
                </svg>
              ))}
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              "The AI screening has completely transformed how we handle our
              high-volume seasonal hiring. We haven't missed a single top-tier
              candidate since switching."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center">
                <span className="text-white font-bold">RM</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Rahul Mehta</p>
                <p className="text-white/60 text-sm">
                  Talent Acquisition, Scaleto
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 hover:border-[#3B82F6]/30 transition-all">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1l2.928 6.472L20 8.273l-5.454 4.873L16.18 20 10 16.472 3.82 20l1.634-6.854L0 8.273l7.072-.801L10 1z"
                    fill="#3B82F6"
                  />
                </svg>
              ))}
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              "Scheduling interviews used to take up 30% of my week. Now it
              takes zero. The ROI was immediate for our lean HR team."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center">
                <span className="text-white font-bold">JC</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Jessica Chen</p>
                <p className="text-white/60 text-sm">
                  VP of People, TechVision
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 hover:border-[#3B82F6]/30 transition-all">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1l2.928 6.472L20 8.273l-5.454 4.873L16.18 20 10 16.472 3.82 20l1.634-6.854L0 8.273l7.072-.801L10 1z"
                    fill="#3B82F6"
                  />
                </svg>
              ))}
            </div>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              "RecruiterAI understands our culture requirements better than most
              external agencies we've worked with. It's a game changer."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1E293B] flex items-center justify-center">
                <span className="text-white font-bold">DM</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">David Miller</p>
                <p className="text-white/60 text-sm">Founder, InnoSpace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
