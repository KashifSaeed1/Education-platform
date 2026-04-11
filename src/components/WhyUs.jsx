import React from "react";
import { Clock, Phone, Gauge, RotateCcw } from "lucide-react";

export default function WhyUs() {
  const items = [
    {
      icon: <RotateCcw size={32} />,
      title: "Vision School",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. ",
    },
    {
      icon: <Clock size={32} />,
      title: "Vision School",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    },
    {
      icon: <Gauge size={32} />,
      title: "Vision School",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    },
    {
      icon: <Phone size={32} />,
      title: "Vision School",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section id="whyus" className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
          <p className="text-gray-400 mb-3 text-sm sm:text-base">Our Service</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Why Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 sm:gap-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20
               lg:h-20 rounded-full bg-blue-600 text-white flex-shrink-0 p-3 sm:p-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8">
                  {React.cloneElement(item.icon, { size: "100%" })}
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}