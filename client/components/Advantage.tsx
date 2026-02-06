export function Advantage() {
  return (
    <section
      id="advantage"
      className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The <span className="text-[#3B82F6]">RecruiterAI</span> Advantage
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Experience the impact of purpose-built AI that elevates every step
            of your hiring journey.
          </p>
        </div>

        {/* Stats Chart */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-end max-w-6xl mx-auto">
            {/* Bar 1 */}
            <div className="flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-[#3B82F6] to-[#60A5FA] rounded-t-lg mb-3"
                style={{ height: "180px" }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    10x
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm text-center uppercase tracking-wide">
                Faster Screening
              </p>
            </div>

            {/* Bar 2 */}
            <div className="flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-[#1E293B] to-[#334155] rounded-t-lg mb-3"
                style={{ height: "140px" }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    70%
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm text-center uppercase tracking-wide">
                Faster Win Time
              </p>
            </div>

            {/* Bar 3 */}
            <div className="flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-[#60A5FA] to-[#93C5FD] rounded-t-lg mb-3"
                style={{ height: "160px" }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    25x
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm text-center uppercase tracking-wide">
                Interview Capacity
              </p>
            </div>

            {/* Bar 4 */}
            <div className="flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-[#93C5FD] to-[#BFDBFE] rounded-t-lg mb-3"
                style={{ height: "200px" }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    95%
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm text-center uppercase tracking-wide">
                App Completion
              </p>
            </div>

            {/* Bar 5 */}
            <div className="flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-[#60A5FA] to-[#93C5FD] rounded-t-lg mb-3"
                style={{ height: "190px" }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    89%
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm text-center uppercase tracking-wide">
                Qualified Apps
              </p>
            </div>

            {/* Bar 6 */}
            <div className="flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-[#1E293B] to-[#334155] rounded-t-lg mb-3"
                style={{ height: "170px" }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    80%
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm text-center uppercase tracking-wide">
                Lower Costs
              </p>
            </div>

            {/* Bar 7 */}
            <div className="flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-[#1E293B] to-[#475569] rounded-t-lg mb-3"
                style={{ height: "120px" }}
              >
                <div className="h-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl sm:text-3xl">
                    50%
                  </span>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm text-center uppercase tracking-wide">
                Bad Hire Reduction
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 hover:border-[#3B82F6]/30 transition-all">
            <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">
              Fast resume processing
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              AI parses and ranks 250+ applications per day vs 25 manually.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 hover:border-[#3B82F6]/30 transition-all">
            <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#3B82F6"
                  strokeWidth="2"
                />
                <path
                  d="M12 7v5l3 3"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">
              Quick time-to-hire
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Average hiring timeline drops from 42 days to just 12 days.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 hover:border-[#3B82F6]/30 transition-all">
            <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">
              Massive capacity
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              AI conducts 500+ automated screening interviews daily up to 8
              manual calls.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 hover:border-[#3B82F6]/30 transition-all">
            <div className="w-12 h-12 bg-[#1E293B] rounded-lg flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Less drop-off</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Smart application forms reduce candidate drop-off dramatically
              (95% completion).
            </p>
          </div>
        </div>

        {/* Post Once Section */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Post Once, Reach Everywhere
          </h3>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            RecruiterAI automatically syncs your job postings across all major
            platforms
          </p>
        </div>
      </div>
    </section>
  );
}
