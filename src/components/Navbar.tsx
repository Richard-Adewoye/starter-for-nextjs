import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/20 text-white px-4 sm:px-6 py-2 flex items-center justify-between">
      
      {/* Left: Logo */}
      <div className="font-serif text-lg sm:text-xl font-semibold text-white">
        Tunji Babajide
      </div>

      {/* Center: Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-sans text-sm md:text-base lg:text-lg absolute left-1/2 transform -translate-x-1/2">
        <li>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">About</Link>
        </li>
        <li>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">Resources</Link>
        </li>
        <li>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">Clients</Link>
        </li>
        <li>
          <Link href="#" className="text-white hover:text-gray-300 transition-colors">Book a Session</Link>
        </li>
      </ul>

      {/* Right: Profile & Hamburger */}
      <div className="flex items-center md:ml-auto">
        <Link href="/admin" className="mr-3">
          <button className="bg-black/30 hover:bg-black/50 transition text-white p-1.5 rounded-full backdrop-blur-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                   1.79-4 4 1.79 4 4 4zm0 2c-2.67 
                   0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>

        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-14 right-0 w-64 h-screen bg-black/80 backdrop-blur-md border-l border-white/20 md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-6 px-6 py-6 text-white font-sans">
          <li>
            <Link href="#" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Resources</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Clients</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Book a Session</Link>
          </li>
          <li>
            <Link href="/admin" className="hover:text-gray-300 transition-colors" onClick={toggleMenu}>Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
