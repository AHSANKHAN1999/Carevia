"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50 antialiased border-b border-blue-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo - Blue Theme */}
        <Link href="/" className="group flex items-center hover:opacity-90 transition-opacity">
          <h1 className="text-3xl md:text-4xl text-[#1e293b] tracking-tight font-extrabold flex items-baseline">
            Care<span className="text-blue-600">via</span>
          </h1>
          <div className="text-[10px] font-bold text-gray-400 tracking-widest absolute mt-8 ml-1 uppercase">
            Global Care-Link
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 ml-8">
          <Link href="/#services" className="text-gray-600 hover:text-blue-600 font-medium text-base transition-colors flex items-center gap-1">
            Our Services <ChevronDown size={16} className="text-blue-500" />
          </Link>
          <Link href="/#equipments" className="text-gray-600 hover:text-blue-600 font-medium text-base transition-colors">
            Equipments
          </Link>
          <Link href="/#about-us" className="text-gray-600 hover:text-blue-600 font-medium text-base transition-colors">
            About Us
          </Link>
        </nav>

        {/* Right Side - Phone & Navy Action Button */}
        <div className="hidden lg:flex items-center gap-6 ml-auto">
          {/* Phone Number */}
          <div className="flex items-center gap-2 bg-blue-50/50 px-3 py-2 rounded-md border border-blue-100">
            <Phone size={18} className="text-blue-600" fill="currentColor" />
            <a href="tel:+923022096374" className="font-bold text-[#1e293b] hover:text-blue-600 transition-colors">
              +92 302 2096374
            </a>
          </div>

          {/* Navy Blue Book Now Button */}
          <Link href="/contact" className="bg-[#1e293b] hover:bg-gray-800 text-white font-bold py-2.5 px-6 rounded-md transition-all shadow-sm">
             Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <button onClick={toggleMenu} className="text-gray-800 p-2 focus:outline-none">
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
          <Link href="/#services" onClick={toggleMenu} className="text-gray-700 font-semibold py-3 px-4 border-b border-gray-50">Services</Link>
          <Link href="/#equipments" onClick={toggleMenu} className="text-gray-700 font-semibold py-3 px-4 border-b border-gray-50">Equipments</Link>
          <Link href="/#about-us" onClick={toggleMenu} className="text-gray-700 font-semibold py-3 px-4 border-b border-gray-50">About Us</Link>
          <div className="py-3 px-4 flex items-center gap-2 bg-blue-50 rounded mt-2">
             <Phone size={18} className="text-blue-600" fill="currentColor" />
             <a href="tel:+923022096374" className="font-bold text-[#1e293b]">+92 302 2096374</a>
          </div>
          <Link href="/contact" onClick={toggleMenu} className="bg-[#1e293b] text-white font-bold py-3 px-4 mt-2 rounded text-center">
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;