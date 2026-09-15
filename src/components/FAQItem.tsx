import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

export function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-ink-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-ink-300 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div
          id={`faq-content-${index}`}
          className="pb-6 pr-8 text-sm leading-relaxed text-ink-300"
        >
          {answer}
        </div>
      )}
    </div>
  );
}
