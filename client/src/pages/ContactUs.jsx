//import React from 'react';
import { FaInstagram, FaFacebook, FaDiscord, FaTelegram, FaTwitter, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="mb-11 min-h-screen flex items-center bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center p-6">
        <h1 className="text-3xl sm:text-5xl font-bold text-teal-700 dark:text-white mb-6 sm:mb-10">
          Contact Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-10">
          Reach out to us through various platforms:
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 sm:mb-20">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-pink-300 hover:text-pink-500 dark:hover:text-pink-200">
            <FaInstagram className="text-3xl sm:text-5xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-200">
            <FaFacebook className="text-3xl sm:text-5xl" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-300 hover:text-purple-500 dark:hover:text-purple-200">
            <FaDiscord className="text-3xl sm:text-5xl" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-200 hover:text-blue-400 dark:hover:text-blue-100">
            <FaTelegram className="text-3xl sm:text-5xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 dark:text-blue-100 hover:text-blue-300 dark:hover:text-blue-50">
            <FaTwitter className="text-3xl sm:text-5xl" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-500 dark:text-green-300 hover:text-green-400 dark:hover:text-green-200">
            <FaWhatsapp className="text-3xl sm:text-5xl" />
          </a>
          <a href="mailto:info@example.com" className="text-red-600 dark:text-red-300 hover:text-red-500 dark:hover:text-red-200">
            <FaEnvelope className="text-3xl sm:text-5xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
