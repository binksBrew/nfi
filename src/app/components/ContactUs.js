"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, subject, message } = formData;

    // ✅ Construct mailto link
    const mailtoLink = `mailto:Kartikthombare.kvt@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Full Name: ${fullName}%0AEmail: ${email}%0A%0A${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* ✅ Include Navbar */}
      <Navbar />

      {/* ✅ Parallax Contact Section */}
      <section
        className="relative bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center px-6 py-16"
        style={{ backgroundImage: "url('/contactus.png')" }}
      >
        {/* ✅ Black Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ✅ Contact Form Container */}
        <div className="relative z-10 bg-white bg-opacity-90 p-8 shadow-lg rounded-lg max-w-lg w-full">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Let’s Get In Touch.</h2>

          {/* ✅ Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Contact Options Section */}
      <section className="bg-white py-12 mb-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          {/* Call Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-red-500 text-xl">📞</span> Call Us Directly
            </h3>
            <Link href="tel:+917770023175" className="text-blue-600 hover:underline text-lg">
              +91 7770023175
            </Link>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-green-500 text-xl">💬</span> WhatsApp Us
            </h3>
            <Link href="https://wa.me/+917972294961" target="_blank" className="text-blue-600 hover:underline text-lg">
              Chat on WhatsApp →
            </Link>
          </div>

          {/* Visit Our Office */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-pink-500 text-xl">📍</span> Visit Our Office
            </h3>
            <Link
              href="https://www.google.com/maps/place/Pearl+fortune/@20.016763,73.7947313,17z/data=!3m1!4b1!4m6!3m5!1s0x3bddebde1741cf4b:0x84be0c85ae82c4a5!8m2!3d20.016763!4d73.7947313!16s%2Fg%2F11t7dlz4vh?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="text-blue-600 hover:underline text-lg"
            >
              Open Google Maps →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Include Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
