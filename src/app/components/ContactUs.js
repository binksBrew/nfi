
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

      {/* ✅ Right Side - Contact Form & Contact Options */}
      <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Let’s Get In Touch.</h2>
        
        {/* ✅ Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          {/* Email Address */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          {/* Message */}
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

        {/* ✅ Contact Options */}
        <div className="mt-8 space-y-4 text-center">
          {/* Call Us */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Call Us Directly</h3>
            <Link href="tel:+1234567890" className="text-blue-600 hover:underline">
              +1 234-567-890
            </Link>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">WhatsApp Us</h3>
            <Link href="https://wa.me/1234567890" target="_blank" className="text-blue-600 hover:underline">
              Chat on WhatsApp →
            </Link>
          </div>

          {/* Visit Our Office */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Visit Our Office</h3>
            <Link
              href="https://www.google.com/maps?q=your+office+address"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Open Google Maps →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
