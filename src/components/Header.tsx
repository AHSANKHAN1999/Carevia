"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  // Mobile menu toggle state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50 antialiased border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo - Minimal & Clean */}
        <Link href="/" className="group flex items-baseline hover:opacity-90 transition-opacity">
          <h1 className="text-3xl md:text-4xl text-[#1e293b] tracking-tight flex items-baseline font-bold">
            Care<span className="text-red-500 font-medium">via</span>
          </h1>
          {/* Subtle Accent Dot */}
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full ml-1 mb-1 group-hover:scale-125 transition-transform duration-300"></div>
        </Link>

        {/* Desktop Nav - Based on Client's Quick Actions */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-gray-600 hover:text-red-500 font-semibold text-sm transition-colors uppercase tracking-wide">
            Home
          </Link>
          <Link href="/#services" className="text-gray-600 hover:text-red-500 font-semibold text-sm transition-colors uppercase tracking-wide">
            Services
          </Link>
          <Link href="/#equipments" className="text-gray-600 hover:text-red-500 font-semibold text-sm transition-colors uppercase tracking-wide">
            Equipments
          </Link>
          <Link href="/#about-us" className="text-gray-600 hover:text-red-500 font-semibold text-sm transition-colors uppercase tracking-wide">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-red-500 font-semibold text-sm transition-colors uppercase tracking-wide pr-6 border-r border-gray-200">
            Contact
          </Link>
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden lg:block ml-6">
          <Link href="/contact" className="bg-[#1e293b] hover:bg-gray-800 text-white font-semibold py-2.5 px-6 rounded transition-all shadow-sm flex items-center gap-2">
             Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <button 
            onClick={toggleMenu}
            className="text-gray-800 p-2 hover:bg-gray-50 rounded-md transition-colors focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg pb-6 pt-2 px-4 flex flex-col gap-2">
          <Link href="/" onClick={toggleMenu} className="text-gray-700 font-semibold py-3 px-4 hover:bg-gray-50 rounded-md border-b border-gray-50 uppercase text-sm">
            Home
          </Link>
          <Link href="/#services" onClick={toggleMenu} className="text-gray-700 font-semibold py-3 px-4 hover:bg-gray-50 rounded-md border-b border-gray-50 uppercase text-sm">
            Services
          </Link>
          <Link href="/#equipments" onClick={toggleMenu} className="text-gray-700 font-semibold py-3 px-4 hover:bg-gray-50 rounded-md border-b border-gray-50 uppercase text-sm">
            Equipments
          </Link>
          <Link href="/#about-us" onClick={toggleMenu} className="text-gray-700 font-semibold py-3 px-4 hover:bg-gray-50 rounded-md border-b border-gray-50 uppercase text-sm">
            About Us
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="text-gray-700 font-semibold py-3 px-4 hover:bg-gray-50 rounded-md uppercase text-sm">
            Contact
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="bg-[#1e293b] text-white font-bold py-3 px-4 mt-4 rounded text-center shadow-md">
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;