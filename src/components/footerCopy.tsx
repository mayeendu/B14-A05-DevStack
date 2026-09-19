import React from "react";
import footerlogo from "../assets/logo-text.png";

const FooterCopy = () => {
  return (
    <footer className="w-full bg-white py-8 border-t border-gray-200">
      {/* Full footer Container with 5 columns layout on medium/large screens */}

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Footer Logo & Info Container (Spans 2 columns) */}

        <div className="md:col-span-2 space-y-4">
          <img src={footerlogo} alt="Company Logo" className="h-8 w-auto" />
          <p className="text-gray-600 max-w-sm text-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex space-x-4 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-black">
                Github
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Menu Container (Spans 3 columns) */}

        <div className="md:col-span-3 grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contacts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line & Copyright Bar */}
      <div className="container mx-auto px-4 mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-2">
        {/* Left Side: Copyright */}
        <p>&copy; {new Date().getFullYear()} DevStack. All rights reserved.</p>

        {/* Right Side: Links */}
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-black">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterCopy;
