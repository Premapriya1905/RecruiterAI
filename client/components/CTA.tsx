export function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-[#3B82F6] to-[#2563EB] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Hire Better, Faster?
        </h2>
        <p className="text-white/90 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Join 500+ high-growth companies using RecruiterAI to build their dream
          teams.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-black hover:bg-black/90 text-white font-semibold px-8 py-3.5 rounded-lg transition-all text-base">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#3B82F6] font-semibold px-8 py-3.5 rounded-lg transition-all text-base">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
