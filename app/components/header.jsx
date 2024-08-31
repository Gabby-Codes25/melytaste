"use client"

import React, { useState } from 'react';
import Link from "next/link"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-5 md:px-6 md:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MelyTaste {'\u{1F35D}'}</h1>
        <nav>
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/" className="hover:text-gray-400">About</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Category</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Contact</Link></li>
          </ul>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-4">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/" className="hover:text-gray-400">About</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Category</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;