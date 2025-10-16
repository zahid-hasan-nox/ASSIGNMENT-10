import React from "react";

const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {/* Question 1 */}
        <div className="collapse collapse-arrow border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition duration-300 bg-white rounded-2xl">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            1. How can I start freelancing on this platform?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              It’s easy! Just create a free account, complete your profile with
              your skills and experience, and start bidding on available
              projects. Once hired, complete tasks and earn securely.
            </p>
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-arrow border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition duration-300 bg-white rounded-2xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            2. Is there any service charge or commission?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yes, a small commission (around 10%) is deducted from your total
              earnings after a successful project completion to support platform
              maintenance and secure payment handling.
            </p>
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-arrow border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition duration-300 bg-white rounded-2xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            3. How are payments processed?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Payments are fully secured. Once a client approves your work, the
              payment is released to your account via Payoneer, PayPal, or bank
              transfer within 1–3 business days.
            </p>
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-arrow border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition duration-300 bg-white rounded-2xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            4. How do clients post a project?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Clients can post a project by signing in, describing the task
              details, setting a budget, and choosing a deadline. Freelancers
              will then submit their proposals for review.
            </p>
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-arrow border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition duration-300 bg-white rounded-2xl">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            5. What if I face any issue during a project?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Don’t worry! Our 24/7 support team is always here to help. You can
              open a support ticket or contact us directly to resolve disputes
              or any technical issues quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
