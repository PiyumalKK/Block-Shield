//import React from 'react';
import { FaSearch, FaLock, FaLightbulb, FaShieldAlt, FaUserShield, FaCogs } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: 'Smart Contract Audit',
      description: 'Comprehensive analysis of smart contracts to identify security vulnerabilities and ensure the code is bug-free.',
      icon: <FaSearch className="text-red-500" />,
    },
    {
      title: 'Blockchain Security',
      description: 'End-to-end security solutions for blockchain platforms, ensuring data integrity and protection from threats.',
      icon: <FaLock className="text-green-500" />,
    },
    {
      title: 'Consulting Services',
      description: 'Expert advice on blockchain implementation, security best practices, and industry standards.',
      icon: <FaLightbulb className="text-blue-500" />,
    },
    {
      title: 'Threat Monitoring and Prevention',
      description: (
        <ul className="list-disc list-inside">
          <li>Threat Monitoring</li>
          <li>Smart Contract Attack Prevention</li>
          <li>Asset Movement Monitoring</li>
          <li>Blacklist Address Monitoring</li>
        </ul>
      ),
      icon: <FaShieldAlt className="text-purple-500" />,
    },
    {
      title: 'Pen Test and Emergency Response',
      description: (
        <ul className="list-disc list-inside">
          <li>Pen Tests</li>
          <li>Blackbox Attack/Defense Tests</li>
          <li>Loophole Inspection</li>
          <li>Security Consultancy</li>
          <li>24/7 Security Emergency Response</li>
        </ul>
      ),
      icon: <FaUserShield className="text-yellow-500" />,
    },
    {
      title: 'Total Solutions',
      description: (
        <ul className="list-disc list-inside">
          <li>Consortium Blockchain Security Total Solutions</li>
          <li>Bounty Program Operation Solutions</li>
          <li>Customized Security Services</li>
        </ul>
      ),
      icon: <FaCogs className="text-pink-500" />,
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="flex flex-col max-w-7xl mx-auto text-center">
        
        <div className=" bg-white dark:bg-gray-900  text-center p-6 ">
        <h1 className="text-4xl font-bold text-teal-700 dark:text-white mb-2">
        Our Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
        We offer a range of services to ensure the security and efficiency of your blockchain projects
        </p>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="text-4xl mb-4 flex items-center justify-center w-16 h-16">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{service.title}</h2>
              <div className="text-gray-600 dark:text-gray-300">{service.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
