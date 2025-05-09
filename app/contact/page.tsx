'use client';

import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="mt-0 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="text-center text-gray-600 mb-8">
        Feel free to reach out to me via email or by filling out the form below.
      </p>

      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-200 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
