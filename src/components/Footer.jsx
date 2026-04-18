import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";
import footerImage from "../assets/footer.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-center bg-cover text-white overflow-hidden"
      style={{ backgroundImage: `url(${footerImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 to-blue-950/95" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-extrabold tracking-tight mb-4">
              EduNova<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
              Empowering learners worldwide through quality education and innovative
              digital tools. Join 50,000+ students today.
            </p>
            <div className="flex space-x-4">
                {[
                  { Icon: FaFacebookF, link: "https://facebook.com/yourprofile" },
                  { Icon: FaTwitter, link: "https://twitter.com/yourprofile" },
                  { Icon: FaInstagram, link: "https://instagram.com/yourprofile" },
                  { Icon: FaLinkedinIn, link: "https://linkedin.com/in/yourprofile" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300"
                  >
                    <item.Icon size={16} />
                  </a>
                ))}
              </div>
            
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h4 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h4>
              <p className="text-gray-400 mb-6">Get the latest course updates and educational resources.</p>
              <form className="flex flex-col sm:row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all">
                  Subscribe <FaArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-400">
              {["Browse Courses", "Mentorship", "Pricing", "For Business"].map((link) => (
                <li key={link} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[2px] bg-blue-400 mr-0 group-hover:mr-2 transition-all"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {["About Us", "Our Team", "Careers", "Contact"].map((link) => (
                <li key={link} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[2px] bg-blue-400 mr-0 group-hover:mr-2 transition-all"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400">
              {["Help Center", "Terms of Service", "Privacy Policy", "FAQ"].map((link) => (
                <li key={link} className="hover:text-blue-400 cursor-pointer transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[2px] bg-blue-400 mr-0 group-hover:mr-2 transition-all"></span>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <span>123 Learning Ave, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-400" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span>info@edunova.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 mb-8">
            <span className="text-xs font-bold tracking-widest uppercase flex items-center">Our Partners:</span>
            <div className="flex items-center gap-6 text-xl font-bold">
              <span className="hover:text-blue-400 cursor-default">COURSERA</span>
              <span className="hover:text-blue-400 cursor-default">UDEMY</span>
              <span className="hover:text-blue-400 cursor-default">SKILLSHARE</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <div className="text-center lg:text-left">
              <p>© {currentYear} EduNova Academy. All rights reserved.</p>
              <p className="mt-1 text-xs opacity-60">
                Accredited by the International Council for Open and Distance Education (ICDE).
              </p>
            </div>

            <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <select className="bg-transparent outline-none text-xs cursor-pointer hover:text-white transition-colors">
                  <option className="bg-blue-950">English (US)</option>
                  <option className="bg-blue-950">Español</option>
                  <option className="bg-blue-950">Français</option>
                </select>
              </div>
              <span className="text-white/20">|</span>
              <span className="text-xs">USD ($)</span>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-3">
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
              <div className="flex items-center gap-2 opacity-50">
                <span className="text-[10px] uppercase tracking-tighter">Secure Payment via</span>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
                  <div className="w-8 h-5 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold">PAYPAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}