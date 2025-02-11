"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle Email Redirect
  const handleSendEmail = () => {
    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:rajendrapandey.95@live.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-black" style={{ minHeight: "calc(100vh - 173px)" }}>
    <section className=" pt-36 mt-20 sm:mt-12  md:mt-0 mb-36 sm:mb-24 md:mb-0 md:pt-3 relative h-[50rem] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
      {/* Background Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black opacity-30"
      />
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 border border-gray-700 text-white"
      >
        {/* Title */}
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Contact <strong>DeepCode-R</strong> 🧬
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <input 
              type="text" 
              placeholder="Your Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none border border-gray-600 focus:ring-2 focus:ring-blue-500 transition" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none border border-gray-600 focus:ring-2 focus:ring-blue-500 transition" 
            />
            <textarea 
              rows={4} 
              placeholder="Your Message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="w-full p-3 bg-gray-800 text-white rounded-md outline-none border border-gray-600 focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
            <button 
              onClick={handleSendEmail} 
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-md font-bold text-lg"
            >
              Send Message 📩
            </button>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-6"
          >
            <h3 className="text-xl font-semibold">Project Lead</h3>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-500 w-6 h-6" />
              <span className="text-lg">rajendrapandey.95@live.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-green-500 w-6 h-6" />
              <span className="text-lg">+91 XXXXXXXXXX</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-red-500 w-6 h-6" />
              <span className="text-lg">DeepCode-R, India</span>
            </div>
            <div className="flex space-x-6 mt-4">
              <Link href="https://www.linkedin.com/in/rajendra-k-pandey" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-500 transition">
                <Linkedin className="w-6 h-6" />
                
            </Link>
            <span className="text-lg">linkedin.com/in/rajendra-k-pandey</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
   </div>
   
  );
}