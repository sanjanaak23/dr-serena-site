// app/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import FAQItem from "@/components/FAQItem";



export default function () {
  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      {/* Navbar */}
      

      {/* Home */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-[14%] px-4 text-center bg-black/40">
          <h2 className="font-playfair text-[40px] font-bold mb-4 text-[#f5f5dc]">
            Welcome to My Practice
          </h2>
          <p className="font-playfair text-[20px] text-[#f5f5dc] max-w-xl">
            Helping you heal and grow through personalized therapy and support.
          </p>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="min-h-screen py-[60px] px-[15px] bg-[#fdf8f3] transition-all duration-700 border border-gray-300 shadow-md"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-[2px] md:gap-[2px]">
          {/* Image */}
          <div className="flex-shrink-0 transition-transform duration-500 hover:scale-105 hover:shadow-xl mb-[2px] md:mb-0">
            <Image
              src="/dr-serena.jpg"
              alt="Dr. Serena Blake"
              width={300}
              height={300}
              className="rounded-full object-cover border border-gray-200"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1 space-y-[1px] animate-fadeIn">
            <h2 className="font-playfair text-[40px] font-bold text-gray-900 pt-4 pb-6 px-[5px]">
              About Dr. Serena Blake
            </h2>

            <div className="space-y-[1px]">
              <p className="font-playfair text-[20px] text-gray-700">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
                She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome
                anxiety, strengthen relationships, and heal from trauma.
              </p>

              <p className="font-playfair text-[20px] text-gray-700">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space where
                you can thrive. She works with individuals and couples seeking meaningful change, emotional growth, and mental wellness.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-[20px] text-[20px] text-gray-800 font-medium italic">
              — Dr. Serena Blake
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="min-h-screen pt-[40px] pb-[40px] py-24 px-[15px] text-center bg-[#e6d3c2]">
  <h2 className="font-playfair text-[40px] font-semibold mb-[2px] text-gray-900 transition-opacity duration-700 ease-in-out animate-fadeInUp">
    Services & Specialties
  </h2>

  <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto mt-8">
    {/* Anxiety */}
    <div className="w-[300px] flex flex-col items-center text-center transition-transform duration-700 ease-in-out transform hover:-translate-y-1 animate-fadeInUp">
      <div className="w-[200px] h-[200px] bg-white rounded-full overflow-hidden shadow-md flex items-center justify-center mb-4 border-[10px] border-[#e6d3c2] group transition-transform duration-500 hover:scale-105">
        <Image src="/icons/anxiety.png" alt="Anxiety" width={200} height={200} className="transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Anxiety & Stress Management</h3>
      <p className="text-gray-700 text-[16px] leading-relaxed">
        Learn effective tools to manage chronic stress, overwhelming worry, and panic attacks.  
        Through CBT and mindfulness-based strategies, you'll gain clarity, calm, and emotional resilience.
      </p>
    </div>

    {/* Relationships */}
    <div className="w-[300px] flex flex-col items-center text-center transition-transform duration-700 ease-in-out transform hover:-translate-y-1 animate-fadeInUp delay-100">
      <div className="w-[200px] h-[200px] bg-white rounded-full overflow-hidden shadow-md flex items-center justify-center mb-4 border-[10px] border-[#e6d3c2] group transition-transform duration-500 hover:scale-105">
        <Image src="/icons/relationship.png" alt="Relationship" width={200} height={200} className="transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Relationship Counseling</h3>
      <p className="text-gray-700 text-[16px] leading-relaxed">
        Whether you're struggling with communication, trust, or emotional distance, I help couples reconnect and grow stronger.  
        Therapy offers a safe space to rebuild and deepen your bond.
      </p>
    </div>

    {/* Trauma */}
    <div className="w-[300px] flex flex-col items-center text-center transition-transform duration-700 ease-in-out transform hover:-translate-y-1 animate-fadeInUp delay-200">
      <div className="w-[200px] h-[200px] bg-white rounded-full overflow-hidden shadow-md flex items-center justify-center mb-4 border-[10px] border-[#e6d3c2] group transition-transform duration-500 hover:scale-105">
        <Image src="/icons/trauma.png" alt="Trauma" width={200} height={200} className="transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Trauma Recovery</h3>
      <p className="text-gray-700 text-[16px] leading-relaxed">
        Heal from past experiences that continue to impact your present.  
        I use trauma-informed approaches to help you feel safe, grounded, and empowered again.
      </p>
    </div>
  </div>
</section>


      {/* Rates */}
   <section id="rates" className="relative min-h-screen text-center overflow-hidden pb-[10px]">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/services.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0"></div>

  {/* Foreground Content */}
  <div className="relative z-10 flex justify-center items-end min-h-screen pb-12 px-4">
    <div className="w-full max-w-5xl px-[25px] sm:px-[5px]">
      <div className="bg-gradient-to-br from-[#4d2f24]/90 to-[#3b1f15]/90 rounded-3xl pt-[10px] pb-[40px] px-6 animate-fadeInUp shadow-xl">
        <h2 className="font-playfair text-[32px] sm:text-[40px] font-semibold mb-6 text-[#f5f5dc] animate-fadeInUp">
          Rates
        </h2>
        <p className="font-playfair text-[18px] sm:text-[20px] text-[#f5f5dc] mb-4 animate-fadeInUp delay-100">
          Individual session: $200<br />
          Couples session: $240
        </p>
        <p className="font-playfair text-[18px] sm:text-[20px] text-[#f5f5dc] animate-fadeInUp delay-200">
          Private pay only. A superbill is provided for self-submission to insurance. 24-hour notice is required for cancellations.
        </p>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section
  id="faq"
  style={{ padding: "200px 50px" }}
  className="bg-[#e8d9cf]"
>
  <div className="max-w-3xl mx-auto text-gray-800 font-playfair">
    <h2 className="text-[50px] font-bold text-center mb-8">
      Frequently Asked Questions
    </h2>

    {/* FAQ Items */}
    <div className="space-y-4">
      <FAQItem
        question="Do you accept insurance?"
        answer="I do not accept insurance directly, but I provide superbills you can submit to your insurance provider for potential reimbursement."
      />
      <FAQItem
        question="Are online sessions available?"
        answer="Yes. All sessions are conducted virtually via Zoom for your convenience and flexibility."
      />
      <FAQItem
        question="What is your cancellation policy?"
        answer="I require at least 24-hour notice for cancellations. Missed appointments or late cancellations may be subject to the full session fee."
      />
    </div>
  </div>
</section>


{/* Healing Quote Section */}
<section
  className="min-h-[50vh] flex items-center justify-center px-6 py-16"
  style={{
    backgroundColor: "#fdf8f3",
    padding: "50px",
  }}
>
  <div className="max-w-3xl text-center">
    <p
      className="font-playfair italic leading-relaxed mb-4"
      style={{
        fontSize: "40px",
        color: "darkslategray",
        padding: "50px",
      }}
    >
      You bring the story. I’ll bring curiosity and care.
    </p>
  </div>
</section>


{/* Contact */}

<section id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-20">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/contact.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay card */}
  <div
    className="relative z-10 bg-[#f5c8c8]/50 backdrop-blur-md border border-[#dec5b3] shadow-xl rounded-3xl max-w-3xl w-full text-white font-playfair text-center pt-[80px] pb-[100px] px-10 space-y-6"
  >
    {/* Heading */}
    <h2 className="text-[45px] font-semibold">Contact</h2>

    {/* Subheading */}
    <p className="text-[20px]">
      Ready to connect? Reach out using the information below.
    </p>

    {/* Contact Info */}
    <div className="space-y-3 text-[20px]">
      <p>📍 1287 Maplewood Drive, Los Angeles, CA 90026</p>
      <p>
        📞 (323) 555-0192 &nbsp;|&nbsp;
        ✉️ <a href="mailto:serena@blakepsychology.com" className="underline hover:text-[#f2e7e1]">serena@blakepsychology.com</a>
      </p>
      <p>
        🕒 <strong>In-person:</strong> Tue & Thu, 10 AM–6 PM <br />
        💻 <strong>Virtual via Zoom:</strong> Mon, Wed & Fri, 1 PM–5 PM
      </p>
    </div>
  </div>
</section>




{/* form */}
<section id="contact" className="bg-[#e8d9cf] min-h-screen flex items-center justify-center px-4 py-16">
  <div className="px-[50px] py-[50px] w-full">
    {/* Light brown background wrapper */}
    <div className="bg-[#6b4c3b] p-6 rounded-xl">
      <div
        className="rounded-xl shadow-lg max-w-2xl mx-auto p-10 transition-opacity duration-1000 opacity-0 animate-fade-in"
        style={{
          backgroundColor: "#6b4c3b",
          border: "1px solid #f5f5dc",
        }}
      >
        {/* Heading container with brown background */}
        <div
          style={{
            border: "1px solid #f5f5dc",
            padding: "1rem",
            // borderRadius: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <h2
            className="text-[40px] font-bold font-serif text-center"
            style={{ color: "white" }}
          >
            Get In Touch
          </h2>

          <p
            className="text-[20px] text-center mt-4"
            style={{ color: "white" }}
          >
            Simply fill out the brief fields below and Dr. Blake will be in touch with you soon,
            usually within one business day. This form is safe, private, and completely free.
          </p>
        </div>

        <form className="space-y-6 text-[20px]">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-semibold mb-1" style={{ color: "white" }}>
              &nbsp;Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="&nbsp;Name"
              style={{
                color: "white",
                borderColor: "#f5f5dc",
                borderWidth: "2px",
                transition: "transform 0.3s ease",
              }}
              className="w-full rounded-md px-4 py-3 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#95d5b2] text-[20px] hover:scale-95"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block font-semibold mb-1" style={{ color: "white" }}>
              &nbsp;Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="&nbsp;(555) 234-5678"
              style={{
                color: "white",
                borderColor: "#f5f5dc",
                borderWidth: "2px",
                transition: "transform 0.3s ease",
              }}
              className="w-full rounded-md px-4 py-3 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#95d5b2] text-[20px] hover:scale-95"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-1" style={{ color: "white" }}>
              &nbsp;Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="&nbsp;you@example.com"
              style={{
                color: "white",
                borderColor: "#f5f5dc",
                borderWidth: "2px",
                transition: "transform 0.3s ease",
              }}
              className="w-full rounded-md px-4 py-3 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#95d5b2] text-[20px] hover:scale-95"
            />
          </div>

          {/* What brings you here? */}
          <div>
            <label htmlFor="reason" className="block font-semibold mb-1" style={{ color: "white" }}>
              &nbsp;What brings you here?
            </label>
            <textarea
              id="reason"
              required
              rows={4}
              placeholder="&nbsp; Briefly share your reason for reaching out"
              style={{
                color: "white",
                borderColor: "#f5f5dc",
                borderWidth: "2px",
                transition: "transform 0.3s ease",
              }}
              className="w-full rounded-md px-4 py-3 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#95d5b2] text-[20px] hover:scale-95"
            ></textarea>
          </div>

          {/* Preferred time to reach you */}
          <div>
            <label htmlFor="contact-time" className="block font-semibold mb-1" style={{ color: "white" }}>
              &nbsp;Preferred time to reach you
            </label>
            <input
              id="contact-time"
              type="text"
              required
              placeholder="&nbsp;e.g., Mornings, Afternoons, Evenings"
              style={{
                color: "white",
                borderColor: "#f5f5dc",
                borderWidth: "2px",
                transition: "transform 0.3s ease",
              }}
              className="w-full rounded-md px-4 py-3 bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-[#95d5b2] text-[20px] hover:scale-95"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start">
            <input
              id="consent"
              type="checkbox"
              required
              className="mt-1 mr-2 accent-[#1b4332]"
            />
            <label htmlFor="consent" style={{ color: "white" }} className="text-[20px]">
              &nbsp;I agree to be contacted by Dr. Serena Blake via email or phone.
            </label>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#f9e7c8] text-white font-semibold py-3 rounded-md hover:bg-[#edf6f2] transition text-[20px]"
            >
              Submit
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-[20px] text-center pt-4" style={{ color: "white" }}>
            &nbsp;Atterntion! By clicking submit you consent to receive texts and emails from Dr. Serena Blake &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </form>
      </div>
    </div>
  </div>
</section>




{/* thanku */}

<section
  id="thankyou"
  style={{
    color: "white",
    fontSize: "40px",
    padding: "50px",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  >
    <source src="/background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional dark overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1,
    }}
  />

  {/* Foreground content */}
  <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
    <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
      Thank you for reaching out!
    </h2>
    <p style={{ marginBottom: "30px" }}>
      Your message has been received. I’ll get back to you as soon as possible.
    </p>
    <a
      href="#home"
      style={{
        display: "inline-block",
        backgroundColor: "white",
        color: "darkslategray",
        fontWeight: "600",
        padding: "10px 20px",
        borderRadius: "12px",
        textDecoration: "none",
      }}
    >
      Back to Home
    </a>
  </div>
</section>






















    </main>
  );
}
