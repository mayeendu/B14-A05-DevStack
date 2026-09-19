import React from "react";
import footerlogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    // Full footer Container
    <div className="container mx-auto grid grid-cols-2 gap-2">
      <div>
        {/* Footer Logo Container  */}
        <div>
          <img src={footerlogo} />
          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <ul className="flex justify-around">
            <li>Github</li> <li>Twitter</li> <li>Linkedin</li>
          </ul>
        </div>
      </div>
      {/* Footer Menu Container  */}
      <div className="flex justify-between">
        <div>
          <ul className="flex flex-col items-start font-medium">
            <h2>PRODUCT</h2>
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-start font-medium">
            <h2>PRODUCT</h2>
            <li>About</li>
            <li>Contacts</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-start font-medium">
            <h2>PRODUCT</h2>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
