// SocialLinks.tsx
import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ResumeButton from './ResumeButton';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-3 items-center">
      <ResumeButton />
      <a href="https://github.com/AZWALUWU" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaGithub size={24} />
      </a>
      <a href="mailto:azwaluwu472@gmail.com" className="text-gray-400 hover:text-white">
        <FaEnvelope size={24} />
      </a>
      <a href="https://www.linkedin.com/in/azwa-luwu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaLinkedin size={24} />
      </a>
      <a href="https://www.instagram.com/sarvdx780" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;