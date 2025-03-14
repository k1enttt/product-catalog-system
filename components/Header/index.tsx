// import Image from "next/image";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-primary text-white py-4">
      <div className="container flex items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Ecommerce</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Products
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
          <input type="text" placeholder="Search..." className="p-2 rounded" />
        </div>
        <div className="flex items-center space-x-4 ml-auto">
          <button className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            <span className="text-xs font-bold leading-none text-red-600">
              3
            </span>
          </button>
          <button className="hover:underline">Login</button>
          <div className="relative md:hidden">
            <button
              className="flex items-center space-x-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Home
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Products
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
