import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-12 py-6">
      <div className="flex flex-col items-center space-y-3">
        <div className="flex space-x-5">
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="Twitter"><Twitter /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
        </div>
        <p className="text-sm">© 2025 Product Showcase. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
