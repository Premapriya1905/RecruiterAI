export function Workflows() {
  return (
    <section
      id="workflows"
      className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            AI Recruiting Software That
            <br />
            Works Like Your Own HR Team
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Build custom hiring workflows that automate the repetitive tasks,
            from sourcing to e-signatures.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Screening Workflow */}
          <div className="bg-[#0F172A] rounded-2xl p-6 sm:p-8 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 5h14M3 10h14M3 15h14"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg">Screening</h3>
            </div>

            {/* Flowchart */}
            <div className="space-y-3 mb-8">
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                New Application
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                AI Resume Screening
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Auto-send screening questions
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#8B5CF6] text-white text-xs font-semibold px-3 py-2 rounded-md text-center inline-block mx-auto">
                Qualified?
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                  Auto-schedule
                </div>
                <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                  Send thank you
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="pt-6 border-t border-[#1E293B]">
              <h4 className="text-white font-bold text-sm mb-2">
                Efficiency Gain
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Screen 250+ applications in seconds with context-AI scoring
                based on your specific role criteria.
              </p>
            </div>
          </div>

          {/* Interview & Hiring Workflow */}
          <div className="bg-[#0F172A] rounded-2xl p-6 sm:p-8 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="14"
                    height="12"
                    rx="2"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                  <path d="M7 2v4M13 2v4" stroke="#3B82F6" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg">
                Interview & Hiring
              </h3>
            </div>

            {/* Flowchart */}
            <div className="space-y-3 mb-8">
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                AI Chat Invite
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                AI Video Interview
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#8B5CF6] text-white text-xs font-semibold px-3 py-2 rounded-md text-center inline-block mx-auto">
                Decision
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <div className="text-white/40 text-xs text-center mb-2">
                    Yes
                  </div>
                  <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                    HR Round
                  </div>
                </div>
                <div>
                  <div className="text-white/40 text-xs text-center mb-2">
                    No
                  </div>
                  <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                    Reject
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                  Hire
                </div>
                <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                  Reject
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Offer Letter
              </div>
            </div>

            {/* Stats */}
            <div className="pt-6 border-t border-[#1E293B]">
              <h4 className="text-white font-bold text-sm mb-2">
                Self-Scheduling
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Reduce time-to-hire from 42 days to just 12 days.
              </p>
            </div>
          </div>

          {/* Passive Re-engagement Workflow */}
          <div className="bg-[#0F172A] rounded-2xl p-6 sm:p-8 border border-[#1E293B] hover:border-[#3B82F6]/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 6v4l3 3"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg">
                Passive Re-engagement
              </h3>
            </div>

            {/* Flowchart */}
            <div className="space-y-3 mb-8">
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Nurture qualified
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Add to future talent
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#8B5CF6] text-white text-xs font-semibold px-3 py-2 rounded-md text-center inline-block mx-auto">
                6mo later
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                  Yes
                </div>
                <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                  No
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                  Yes
                </div>
                <div className="bg-[#3B82F6] text-white text-xs font-semibold px-3 py-2 rounded-lg text-center">
                  No
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-0.5 h-4 bg-[#334155]"></div>
              </div>
              <div className="bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center">
                Interview
              </div>
            </div>

            {/* Stats */}
            <div className="pt-6 border-t border-[#1E293B]">
              <h4 className="text-white font-bold text-sm mb-2">
                Database ROI
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Build a qualified talent pipeline automatically - never start
                from zero
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
