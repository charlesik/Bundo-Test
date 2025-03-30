"use client"
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto p-3 lg:p-6 bg-[#F1E9DB]">
      <h2 className="text-[30px] lg:text-[62px] font-[700] mb-4 text-center">Frequently Asked <span className='text-[#34A853]'>Questions</span></h2>
      <p className="text-[16px] font-[300] mb-4 text-center lg:w-[500px] m-auto">Need help? Check out these answers to questions you might have about Bundo. <span className='font-black'>Or send an email to help@bundo.app</span></p>
      <div className="space-y-4 max-w-4xl m-auto">
        {items.map((item, index) => (
          <div key={index} className="border-b border-dotted border-[#889385] lg:w-[598px] m-auto my-3">
            <button
              className="w-full text-left p-4 font-semibold focus:outline-none flex justify-between"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <div className='w-[24px] h-[24px] rounded-full bg-[#34A853]'>
                {openIndex === index ? <ChevronUp color='white'/>:<ChevronDown color='white'/>}
              </div>
            </button>
            {openIndex === index && (
              <p className="p-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
