import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
 
export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 
  return (
    <>
      <nav className="fixed border-b border-gray-200 top-0 w-full left-0 bg-white z-50 text-black h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-full items-center">
            <div className="text-xl font-bold">Assignment 1</div>
            <div className="hidden md:flex space-x-6">
              <a href="/" className="hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="/" className="hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="/" className="hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
 
            <button
              onClick={toggleSidebar}
              className="md:hidden text-2xl focus:outline-none p-2"
            >
              <IoMenu />
            </button>
          </div>
        </div>
      </nav>
 
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>
 
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-bold">Menu</span>
            <button
              onClick={toggleSidebar}
              className="text-2xl hover:text-red-500 transition-colors"
            >
              <IoClose />
            </button>
          </div>
 
          // mobile links
          <div className="flex flex-col space-y-6">
            <a
              href="/"
              onClick={toggleSidebar}
              className="text-lg font-medium hover:text-orange-500 border-b border-gray-100 pb-2"
            >
              Home
            </a>
            <a
              href="/"
              onClick={toggleSidebar}
              className="text-lg font-medium hover:text-orange-500 border-b border-gray-100 pb-2"
            >
              About
            </a>
            <a
              href="/"
              onClick={toggleSidebar}
              className="text-lg font-medium hover:text-orange-500 border-b border-gray-100 pb-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}