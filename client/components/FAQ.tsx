import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const faqItems = [
    {
      id: "item-1",
      question: "Is the AI biased in candidate selection?",
      answer:
        "No, our models are trained on objective skill-sets and verified experience. We use bias-detection algorithms to ensure fair screening for all candidates.",
    },
    {
      id: "item-2",
      question: "Does it integrate with my current ATS?",
      answer:
        "Yes, RecruiterAI offers native integrations with common enterprise platforms and ATS systems.",
    },
    {
      id: "item-3",
      question: "How long does setup take?",
      answer:
        "Most teams are up and running within 24 hours. Our onboarding team helps you map your first workflow in less than 90 minutes.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0F172A] border border-[#1E293B] rounded-lg overflow-hidden hover:border-[#3B82F6]/50 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenItem(openItem === item.id ? null : item.id)
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#1E293B]/50 transition-colors"
              >
                <span className="text-white font-semibold text-base">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#3B82F6] flex-shrink-0 transition-transform duration-300 ${
                    openItem === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openItem === item.id && (
                <div className="px-6 py-4 border-t border-[#1E293B] bg-[#0F172A]/50">
                  <p className="text-white/60 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
