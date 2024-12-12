import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white fixed bottom-0 w-full py-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <a
          href="https://web.facebook.com/manoa.aronyavo.7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition duration-300"
          aria-label="Facebook"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://github.com/ManoaRRR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/manoa-rambolamanana-ba55b5252/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-700 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className="text-center text-gray-500 text-sm mt-2">
        © 2024 RAMBOLAMANANA Manoa. All Rights Reserved.
      </p>
    </footer>
  );
}
export default Footer;