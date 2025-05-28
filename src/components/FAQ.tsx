'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is ScopeViral?",
    answer: "ScopeViral is an AI-powered competitive intelligence platform that helps you track and analyze your competitors' activities in real-time, from pricing changes to feature updates."
  },
  {
    question: "How does the AI analysis work?",
    answer: "Our AI system continuously monitors your competitors' websites, analyzes changes, and provides intelligent summaries of what changed, why it matters, and recommended actions for your team."
  },
  {
    question: "What types of competitors can I track?",
    answer: "You can track any competitor in your industry. Our system is designed to monitor pricing pages, changelogs, feature pages, and other key sections of your competitors' websites."
  },
  {
    question: "How do I receive updates?",
    answer: "You can receive real-time updates through Slack notifications, email alerts, or directly in the ScopeViral dashboard. Choose the method that works best for your team."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. All competitor data is collected through public sources, and your team's information is protected with enterprise-grade security measures."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-black text-white py-[72px]">
      <div className="@container p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-white/70">
            Everything you need to know about ScopeViral and how it can help your team stay ahead.
          </p>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                className={`w-full px-6 py-4 text-left rounded-xl transition-all duration-300 flex justify-between items-center ${
                  openIndex === index
                    ? 'bg-white/5 border-[#38BDF8]'
                    : 'bg-white/5 hover:bg-white/10 border-transparent'
                } border`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#38BDF8]"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-white/5 rounded-b-xl border border-t-0 border-[#38BDF8]">
                      <p className="text-white/70 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70">
            Still have questions? <a href="#" className="text-[#38BDF8] hover:underline">Contact our team</a>
          </p>
        </div>
      </div>
    </div>
  );
}; 