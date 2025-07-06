// components/FAQItem.tsx
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white rounded-xl p-6 bg-white/20 text-gray-800 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full items-center text-left"
      >
        <span className="text-[20px] font-semibold">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="mt-4 text-[20px] text-gray-700 transition-opacity duration-300 ease-in">
          {answer}
        </div>
      )}
    </div>
  );
}
