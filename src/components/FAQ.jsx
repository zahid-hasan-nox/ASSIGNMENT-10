import React from "react";

const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-5">
        {[
          {
            q: "How can I start freelancing on this platform?",
            a: "It’s easy! Create a free account, complete your profile, and start bidding on projects. Work, submit, get approved, and earn securely.",
            default: true,
          },
          {
            q: "Is there any service charge or commission?",
            a: "A small commission (around 10%) is deducted after project completion to support platform maintenance and secure payment handling.",
          },
          {
            q: "How are payments processed?",
            a: "Payments are secured. Once approved by the client, funds are released via Payoneer, PayPal, or bank transfer within 1–3 business days.",
          },
          {
            q: "How do clients post a project?",
            a: "Clients sign in, describe the task, set a budget and deadline. Freelancers then submit proposals for review.",
          },
          {
            q: "What if I face any issue during a project?",
            a: "Our 24/7 support team is always available. You can open a support ticket or contact us directly for dispute or technical help.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="collapse collapse-arrow border border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 bg-white rounded-3xl hover:scale-[1.01]"
          >
            <input
              type="radio"
              name="faq-accordion"
              defaultChecked={item.default || false}
            />
            <div className="collapse-title text-lg font-semibold text-gray-800 flex justify-between items-center">
              <span>{idx + 1}. {item.q}</span>
            </div>

            <div className="collapse-content text-gray-600 leading-relaxed">
              <p className="pt-2">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
