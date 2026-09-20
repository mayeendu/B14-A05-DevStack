import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="text-2xl font-bold">
            <img src={logo} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="hover:text-primary">
              Home
            </a>

            <a href="#" className="hover:text-primary">
              Technologies
            </a>

            <a href="#" className="hover:text-primary">
              About
            </a>

            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden btn btn-square btn-ghost"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">

              <a
                href="#"
                className="p-2 rounded hover:bg-base-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>

              <a
                href="#"
                className="p-2 rounded hover:bg-base-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Technologies
              </a>

              <a
                href="#"
                className="p-2 rounded hover:bg-base-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>

              <a
                href="#"
                className="p-2 rounded hover:bg-base-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
