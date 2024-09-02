import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white p-6 py-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-purple-300 transition-colors">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition-colors">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition-colors">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition-colors">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-300 transition-colors">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-right">
          <p className="mb-2">
            Just feel free to contact if you wanna
            <br /> collaborate with me, or simply have a conversation.
          </p>
          <a
            href="mailto:maheshkinnake4@gmail.com"
            className="text-lg font-semibold hover:text-purple-300 transition-colors"
          >
            maheshkinnake4@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
