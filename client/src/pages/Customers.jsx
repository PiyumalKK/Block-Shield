/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/logos.css';

const customers = [
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fbnb.svg?alt=media&token=bb82af5e-77bf-4cd3-a21d-fedd9717c541', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2F1inch.svg?alt=media&token=e9643136-aaa5-42cc-beb4-84feddc327dc', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Falpha.svg?alt=media&token=1a5c5aaf-83a2-4c69-a0b3-46e6d097e19e', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fbitdao.svg?alt=media&token=b8840e5d-7d57-4d47-8a5c-08e354d7b902', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fboring.svg?alt=media&token=97ca4da2-ad85-4785-87a9-6bf780c41a49', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fc_venus.462b1881.svg?alt=media&token=20a6ca1c-4943-40d1-b8bc-ceb8ba9ae07a', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fceler.svg?alt=media&token=4d18bb90-02bd-4cdd-825f-584c1cd8252c', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fconv.svg?alt=media&token=d38351f2-3739-42b3-a26d-c594640c183c', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fcurve.svg?alt=media&token=264d9755-2105-4cd6-b923-c982e5c9fa0b', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fdydx.svg?alt=media&token=a22a431b-31fd-4e64-b465-e8cb377cc4eb', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fbnb.svg?alt=media&token=bb82af5e-77bf-4cd3-a21d-fedd9717c541', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2F1inch.svg?alt=media&token=e9643136-aaa5-42cc-beb4-84feddc327dc', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Falpha.svg?alt=media&token=1a5c5aaf-83a2-4c69-a0b3-46e6d097e19e', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fbitdao.svg?alt=media&token=b8840e5d-7d57-4d47-8a5c-08e354d7b902', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fboring.svg?alt=media&token=97ca4da2-ad85-4785-87a9-6bf780c41a49', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fc_venus.462b1881.svg?alt=media&token=20a6ca1c-4943-40d1-b8bc-ceb8ba9ae07a', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fceler.svg?alt=media&token=4d18bb90-02bd-4cdd-825f-584c1cd8252c', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fconv.svg?alt=media&token=d38351f2-3739-42b3-a26d-c594640c183c', needsBackground: true },
  { name: 'Customer 1', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fcurve.svg?alt=media&token=264d9755-2105-4cd6-b923-c982e5c9fa0b', needsBackground: false },
  { name: 'Customer 2', logo: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logos%2Fdydx.svg?alt=media&token=a22a431b-31fd-4e64-b465-e8cb377cc4eb', needsBackground: true },
 
  
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
