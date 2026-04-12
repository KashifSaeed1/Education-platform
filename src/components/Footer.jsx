import React from "react";
import footerImage from "../assets/footer.png";

export default function Footer() {
  return (
    <footer
      className="relative bg-center bg-cover text-white"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-950/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">EduNova Academy</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering learners worldwide through quality education, certified
              courses, and innovative digital learning tools designed for every
              stage of life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">Home</li>
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Courses</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors">Online Classes</li>
              <li className="hover:text-white transition-colors">Digital Library</li>
              <li className="hover:text-white transition-colors">Certified Teachers</li>
              <li className="hover:text-white transition-colors">24/7 Student Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors">Email: info@edunova.edu</li>
              <li className="hover:text-white transition-colors">Phone: +1 (800) 123-4567</li>
              <li className="hover:text-white transition-colors">Address: 123 Learning Ave, NY</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-16 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} EduNova Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}