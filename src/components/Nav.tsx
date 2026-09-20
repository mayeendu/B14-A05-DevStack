import { useState } from "react";
import logo from "../assets/logo-text.png";
import { FiMenu, FiX } from "react-icons/fi";


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-md">

      {/* ================= MOBILE NAVBAR ================= */}
      <div className="md:hidden px-4">
        <div className="grid grid-cols-3 items-center min-h-16">

          {/* LEFT: Hamburger */}
          <div className="flex justify-start">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost btn-square"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              )}
            </button>
          </div>

          {/* CENTER: Logo */}
          <div className="flex justify-center">
            <a href="/" className="text-xl font-bold">
              <img src={logo} />
            </a>
          </div>

          {/* RIGHT: Sign In / Sign Up */}
          <div className="flex justify-end items-center gap-1">
            <button
              type="button"
              className="btn btn-ghost btn-xs"
            >
              Sign In
            </button>

            <button
              type="button"
              className="btn btn-primary btn-xs"
            >
              Sign Up
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="pb-4">
            <div className="flex flex-col gap-2 border-t pt-3">

              <a href="#" className="p-2 rounded-lg hover:bg-base-200" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>

              <a href="#" className="p-2 rounded-lg hover:bg-base-200" onClick={() => setIsMenuOpen(false)}>
                Technologies
              </a>

              <a href="#" className="p-2 rounded-lg hover:bg-base-200" onClick={() => setIsMenuOpen(false)} >
                Projects
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-base-200" onClick={() => setIsMenuOpen(false)} >
                About
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-base-200" onClick={() => setIsMenuOpen(false)} >
                Contact
              </a>

            </div>
          </div>
        )}
      </div>

      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="/" className="text-2xl font-bold">
              <img src={logo} />
            </a>

            {/* Menu */}
            <div className="flex items-center gap-6 text-2xl">
              <a href="#" className="text-pink-600 font-bold">Home</a>
              <a href="#" className="text-neutral-500 hover:text-pink-500 transition-colors">Technologies</a>
              <a href="#" className="text-neutral-500 hover:text-pink-500 transition-colors">Projects</a>
              <a href="#" className="text-neutral-500 hover:text-pink-500 transition-colors">About</a>
              <a href="#" className="text-neutral-500 hover:text-pink-500 transition-colors">Contact</a>
            </div>

            {/* Auth */}
            <div className="flex items-center gap-4">
              <button className="text-[20px]">

                Sign In
              </button>

              <button className="btn btn-active btn-secondary rounded-4xl text-[18px]">
                Sign Up
              </button>
            </div>

          </div>

        </div>
      </div>

    </nav>
  );
};

export default Nav;