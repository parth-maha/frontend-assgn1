import React, { useState} from "react";

export default function Navbar() {
  return (
    <nav className="bg-white relative z-50 text-white shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-black">Assignment 1</div>

          <div className="hidden relative md:flex space-x-6">
            <a href="/" className="hover:text-orange-500 text-black">Home</a>
            <a href="/" className="hover:text-orange-500 text-black">About</a>
            <a href="/" className="hover:text-orange-500 text-black">Contact</a>
          </div>
        </div>
      </div>

    </nav>
  );
}
