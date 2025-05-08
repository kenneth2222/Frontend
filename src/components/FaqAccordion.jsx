import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";


const FaqAccordion = () => {
    const faqs = [
      {
        question: "What are the different sponsorship levels/packages available?",
        answer:
          "We offer Bronze, Silver, Gold, and Platinum sponsorship packages, each designed to suit varying levels of exposure and engagement.",
      },
      {
        question: "What are the benefits of each sponsorship level?",
        answer:
          "Benefits range from brand placement, social media mentions, exhibition booths, to speaking slots, depending on the package selected.",
      },
      {
        question: "What marketing materials will I receive as a sponsor?",
        answer:
          "Sponsors receive branded digital assets, social media templates, event banners, and recognition on our website and during the event.",
      },
      {
        question: "How can I contact you with questions about sponsorship?",
        answer:
          "You can reach us via email at sponsor@w3globalconf.com or call us directly through the contact section on our website.",
      },
      {
        question: "How can I pay for my sponsorship?",
        answer:
          "Payments can be made via bank transfer, card payment, or through our secure online payment portal.",
      },
      {
        question: "Can I customize my sponsorship package?",
        answer:
          "Absolutely. We can tailor a sponsorship package to suit your organization’s goals and budget. Reach out to discuss further.",
      },
    ];
  
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto mt-8 text-black pb-10">
        <h2 className="text-2xl font-bold text-center mb-6">Sponsorship FAQ</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-4 py-3 text-lg font-medium bg-gray-100 hover:bg-gray-200 transition"
            >
              <div className="flex justify-between items-center">
                {faq.question}
                <Icon icon="icons8:angle-down" width="22" height="22" />
              </div>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default FaqAccordion;
