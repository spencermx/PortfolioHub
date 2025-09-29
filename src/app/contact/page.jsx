"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xgveogdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 text-gray-100">
      <div className="max-w-4xl mx-auto">
        {" "}
        <h1 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
          Contact Me
        </h1>
        <p className="text-base mb-6 leading-relaxed">
          I’d love to hear from you! Whether you have a question about my work,
          want to discuss a project, or just want to connect, feel free to reach
          out using the form below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <label className="block text-base font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-base font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              className="block text-base font-medium mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-gray-600 focus:border-teal-400 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-2 bg-gradient-to-r from-blue-500 to-teal-400 text-gray-900 font-bold rounded-lg hover:from-teal-400 hover:to-blue-500 transition-colors"
          >
            Send Message
          </button>
        </form>
        {submitted && (
          <p className="text-teal-400 text-sm font-bold">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </div>
  );
}
