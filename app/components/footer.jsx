import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">MelyTaste</h2>
          <p className="text-gray-400 mb-4">
            Your go-to place for the best tastes and recipes.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="justify-center text-xl font-semibold mb-2">Quick Links</h3>
          <div className='flex justify-between gap-8'>
            <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
                <li><Link href="/category" className="hover:text-gray-400">Category</Link></li>
                <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
            <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
                <li><Link href="/category" className="hover:text-gray-400">Category</Link></li>
                <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
            <ul className="space-y-2">
                <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-gray-400">About</Link></li>
                <li><Link href="/category" className="hover:text-gray-400">Category</Link></li>
                <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-left mt-6 md:mt-0">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <img src="/img/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <img src="/img/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <img src="/img/icons/snapchat.svg" alt="Snapchat" className="w-6 h-6" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <img src="/img/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} MelyTaste. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;