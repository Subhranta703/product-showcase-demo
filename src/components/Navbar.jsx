import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-5 py-4">
        <h1 className="text-2xl font-bold">Product Showcase</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#products" className="hover:text-yellow-300">Products</a></li>
          <li><a href="#about" className="hover:text-yellow-300">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-blue-700 dark:bg-gray-800 text-white flex flex-col gap-4 py-4 px-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
