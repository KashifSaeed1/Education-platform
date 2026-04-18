import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const DemoModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const PUBLIC_KEY = "your_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          alert("Notification sent! I will contact you soon.");
          setLoading(false);
          onClose();  
      }, (error) => {
          console.log(error.text);
          setLoading(false);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-2xl max-w-md w-full">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">Book a Demo</h2>
          
          <input name="user_name" type="text" placeholder="Name" required className="w-full bg-white/5 border border-white/10 p-2 text-white rounded" />
          <input name="user_email" type="email" placeholder="Email" required className="w-full bg-white/5 border border-white/10 p-2 text-white rounded" />
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl"
          >
            {loading ? "Sending..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoModal;