"use client";

import { useState } from "react";
import Image from "next/image";
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
    const mailtoLink = `mailto:example@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Full Name: ${fullName}%0AEmail: ${email}%0A%0A${message}`
    )}`;

    // ✅ Open Gmail (or default email app)
    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* ✅ Include Navbar */}
      <Navbar />

      {/* ✅ Contact Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 py-16">
        {/* ✅ Left Side - Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <Image
            src="/contactus.jpg"
            alt="Contact Us"
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* ✅ Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Let’s Get In Touch.</h2>

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
      <section className="bg-white py-12 mb-10"> {/* Increased margin-bottom */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
          {/* Call Us */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-red-500 text-xl">📞</span> Call Us Directly
            </h3>
            <Link href="tel:+917972294961" className="text-blue-600 hover:underline text-lg">
                +91 7972294961
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
              href="https://www.google.com/maps/place/Navrang+Mangal+Karyalaya/@20.0166956,73.7926488,17z/data=!4m6!3m5!1s0x3bddea4cefdecf65:0xa585bc1bab3981f6!8m2!3d20.0166906!4d73.7952237!16s%2Fg%2F1tl8j50p?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
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
