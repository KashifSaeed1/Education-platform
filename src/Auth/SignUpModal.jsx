import { useState } from "react";
import { X } from "lucide-react";

const SignUpModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    // Yahan API call lagao
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 p-6 text-center relative">
          <button onClick={onClose} className="absolute top-3 right-3 text-white bg-white/20 rounded-full p-1">
            <X size={16} />
          </button>
          <span className="text-xs text-white/80 bg-white/20 px-3 py-1 rounded-full">Educational Platform</span>
          <h2 className="text-white text-xl font-semibold mt-2">Get Started Today</h2>
          <p className="text-white/80 text-sm">Create your free account and start learning</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Full Name</label>
            <input name="name" type="text" placeholder="Ali Ahmed"
              onChange={handleChange} required
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-400 bg-gray-50" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email Address</label>
            <input name="email" type="email" placeholder="ali@example.com"
              onChange={handleChange} required
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-400 bg-gray-50" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Phone Number</label>
            <input name="phone" type="tel" placeholder="+92 300 1234567"
              onChange={handleChange} required
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-400 bg-gray-50" />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">Password</label>
            <input name="password" type="password" placeholder="Min 8 characters"
              onChange={handleChange} required minLength={8}
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-purple-400 bg-gray-50" />
          </div>
          <button type="submit"
            className="w-full py-2.5 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg font-medium text-sm hover:opacity-90 transition">
            Create My Account
          </button>
          <p className="text-center text-xs text-gray-500">
            Already have an account? <span className="text-purple-500 cursor-pointer font-medium">Log In</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;