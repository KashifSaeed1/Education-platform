import React from 'react';

const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Book a Demo</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">&times;</button>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="firstname" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Work Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" placeholder="abc@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Interest</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500">
              <option className="bg-[#1a1a1a]">K-12 Education</option>
              <option className="bg-[#1a1a1a]">Higher Education</option>
              <option className="bg-[#1a1a1a]">Corporate Training</option>
            </select>
          </div>
          
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all mt-4">
            Request Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;