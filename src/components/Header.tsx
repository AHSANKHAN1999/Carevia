"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  // Mobile menu ko open/close karne ke liye state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm py-5 px-4 md:px-8 sticky top-0 z-50 antialiased relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
        
        {/* Decorated Minimalist Text Logo */}
        <Link href="/" className="group flex items-baseline hover:opacity-90 transition-opacity">
          <h1 className="text-3xl md:text-4xl text-primary tracking-tighter flex items-baseline">
            <span className="font-black">Care</span>
            <span className="font-light text-accent">via</span>
          </h1>
          {/* Minimal Accent Dot - Hover effect ke sath */}
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-accent rounded-full ml-1 mb-1 group-hover:scale-125 transition-transform duration-300"></div>
        </Link>

        {/* Desktop Nav - Clean & Minimal */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/#services" className="text-gray-500 hover:text-accent font-medium transition-colors">
            Services
          </Link>
          <Link href="/#why-us" className="text-gray-500 hover:text-accent font-medium transition-colors">
            Why Us
          </Link>
          <Link href="/join-our-team" className="text-gray-500 hover:text-accent font-medium transition-colors">
            Join Our Team
          </Link>
          <Link href="/book-a-service" className="text-gray-500 hover:text-accent font-medium transition-colors border-r border-gray-200 pr-10">
            Book a Service
          </Link>
        </nav>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden lg:block">
          <Link href="/book-a-service" className="bg-accent hover:bg-accent/90 text-white font-bold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg inline-block">
            Instant Help
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          {/* onClick function lagaya hai menu ko kholne/band karne ke liye */}
          <button 
            onClick={toggleMenu}
            className="text-primary p-2 hover:bg-gray-50 rounded-md transition-colors focus:outline-none"
          >
            {/* Condition: Agar menu open hai to 'X' (Close) icon dikhao, warna Hamburger (3 lines) icon dikhao */}
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

      {/* Mobile Dropdown Menu - Ye tab show hoga jab isMenuOpen true hoga */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg pb-6 pt-2 px-4 flex flex-col gap-4 animate-fade-in-down">
          <Link href="/#services" onClick={toggleMenu} className="text-gray-600 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg">
            Services
          </Link>
          <Link href="/#why-us" onClick={toggleMenu} className="text-gray-600 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg">
            Why Us
          </Link>
          <Link href="/join-our-team" onClick={toggleMenu} className="text-gray-600 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg">
            Join Our Team
          </Link>
          <Link href="/book-a-service" onClick={toggleMenu} className="text-gray-600 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg">
            Book a Service
          </Link>
          <Link href="/book-a-service" onClick={toggleMenu} className="bg-accent text-white font-bold py-3 px-4 mt-2 rounded-lg text-center shadow-md">
            Instant Help
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;