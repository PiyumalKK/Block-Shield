/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/logos.css';

const customers = [
  { name: 'Customer 1', logo: '../src/logos/bnb.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/polygon.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/alpha.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/bitdao.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/boring.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/celer.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/conv.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/gatechain.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/gearbox.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/hegic.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/looksrare.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/multichain.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/olympus.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/opyn.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/paraswap.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/pawnfi.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/perpetual.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/polynetwork.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/spool.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/starkware.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/sushiswap.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/synfutures.svg', needsBackground: true },
  { name: 'Customer 2', logo: '../src/logos/thorchain.svg', needsBackground: true },
  { name: 'Customer 1', logo: '../src/logos/wombat.svg', needsBackground: false },
  { name: 'Customer 2', logo: '../src/logos/yearn.svg', needsBackground: true },
  
  // Add all 25 customer logos here
];

export default function Customers() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className=" bg-white dark:bg-gray-900  text-center p-6 ">
        <h1 className="text-4xl font-bold  text-teal-700 dark:text-white mb-2">
          Serving Global Customers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
          We are proud to serve a diverse range of customers across the globe. Here are some of the companies we work with
        </p>
      </div>
      <div className="max-w-7xl w-full text-center mt-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
        >
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-center p-4 bg-teal-600 dark:bg-gray-800 rounded-lg shadow-md ${
                customer.needsBackground ? 'logo-background' : ''
              }`}
              whileHover={{ scale: 1.1 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img src={customer.logo} alt={`${customer.name} logo`} className="max-h-16" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-500 text-white p-3 rounded-full shadow-lg focus:outline-none"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
