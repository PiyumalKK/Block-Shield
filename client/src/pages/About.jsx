/* eslint-disable react/prop-types */
//import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FaTwitter, FaLinkedin, FaFacebook, FaDiscord, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa'; // Import icons

const teamMembers = [
  {
    name: 'Piyumal Ranasinghe',
    role: 'Computer Engineer',
    university: ' Faculty of Engineering, University of Ruhuna',
    bio: 'Piyumal has over 10 years of experience in blockchain and smart contract auditing.',
    image: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/Piyumal.jpg?alt=media&token=0bde7e24-bee3-4d3a-894e-b94651202d62',
    email: 'alice@yourcompany.com',
    linkedin: 'https://linkedin.com/in/alicejohnson',
    facebook: 'https://facebook.com/alice',
    instagram: 'https://instagram.com/alice',
    whatsapp: 'https://wa.me/1234567890',
    telegram: 'https://t.me/alice',
    discord: 'https://discord.gg/alice',
    twitter: 'https://twitter.com/alice'
  },
  {
    name: 'Yasas ',
    role: 'Security Expert',
    university: ' Faculty of Engineering, University of Peradeniya',
    bio: 'Yasas specializes in cryptographic security and has audited numerous high-profile projects.',
    image: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/yasas.jpg?alt=media&token=d500f56e-fd37-49a6-bde5-ac85caece6f2',
    email: 'bob@yourcompany.com',
    linkedin: 'https://linkedin.com/in/bobsmith',
    facebook: 'https://facebook.com/bob',
    instagram: 'https://instagram.com/bob',
    whatsapp: 'https://wa.me/1234567890',
    telegram: 'https://t.me/bob',
    discord: 'https://discord.gg/bob',
    twitter: 'https://twitter.com/bob'
  },
  {
    name: 'Charlie Davis',
    role: 'Bug Bounty Manager',
    university: ' Faculty of Engineering, University of Ruhuna',
    bio: 'Charlie manages our bug bounty programs and ensures that vulnerabilities are identified and addressed.',
    image: 'https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/ab.jpg?alt=media&token=39147a26-70ed-4f3c-950f-58cb8b90b09a',
    email: 'charlie@yourcompany.com',
    linkedin: 'https://linkedin.com/in/charliedavis',
    facebook: 'https://facebook.com/charlie',
    instagram: 'https://instagram.com/charlie',
    whatsapp: 'https://wa.me/1234567890',
    telegram: 'https://t.me/charlie',
    discord: 'https://discord.gg/charlie',
    twitter: 'https://twitter.com/charlie'
  }
];

export default function About() {
  return (
    <div className="about-page bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 transition duration-500">
      {/* Hero Section */}
      <section className="hero bg-cover bg-center py-20" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r  text-teal-700 dark:text-white">About Us</h1>
          <p className="text-lg text-justify mt-10 ml-20 mr-20 animate-fadeIn">BlockShield was founded in 2018 by Yasas Geethal and his team from Sri Lanka. Major investors include Gaorong Capital. Team members are based in Hangzhou, Beijing, and San Francisco, and consist of seasoned security professionals and senior researchers from world-leading security groups at companies such as Qihoo 360, Microsoft, Intel, Juniper, and Alibaba, etc.

BlockShield has established strategic and long-term cooperations with key players in all areas of the blockchain ecosystem, such as blockchain infrastructure vendors, exchanges, crypto wallets, mining pools, DApp developers, as well as DeFi pioneers. We have attracted widespread attention from the industry since we have, among other things, discovered issues such as the Ethereum smart contract BatchOverflow loophole, been included in the Etherscan.io recommended vendor list for smart contract security audits, and ranked Top 3 worldwide in the Ethereum Bounty Program.

With decades of experience and noted achievements in the areas of vulnerability analysis, operating systems, and malware defense, BlockShield offers independent service brands such as DAppTotal and CoinHolmes, and provides comprehensive security solutions to all blockchain users.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 animate-fadeIn   text-teal-700 dark:text-white">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 animate-slideIn" />
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-teal-600 dark:text-teal-400">{member.role}</p>
                <p className="text-teal-600 dark:text-teal-400">{member.university}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  {member.email && <SocialLink href={`mailto:${member.email}`} icon={<HiOutlineMail />} />}
                  {member.linkedin && <SocialLink href={member.linkedin} icon={<FaLinkedin />} />}
                  {member.facebook && <SocialLink href={member.facebook} icon={<FaFacebook />} />}
                  {member.instagram && <SocialLink href={member.instagram} icon={<FaInstagram />} />}
                  {member.whatsapp && <SocialLink href={member.whatsapp} icon={<FaWhatsapp />} />}
                  {member.telegram && <SocialLink href={member.telegram} icon={<FaTelegram />} />}
                  {member.discord && <SocialLink href={member.discord} icon={<FaDiscord />} />}
                  {member.twitter && <SocialLink href={member.twitter} icon={<FaTwitter />} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Component for social media links
const SocialLink = ({ href, icon }) => (
    <a href={href} className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300" target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
);


