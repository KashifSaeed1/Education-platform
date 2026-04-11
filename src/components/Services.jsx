import services from '../assets/services.png'

export default function Services() {
  return (
    <section id='services' className="bg-white w-full py-12 md:py-16">
      {/* Top Image */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden">
        <img
          src={services}
          alt="Library"
          className="w-full h-full object-cover"
          data-aos="fade-up"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 
      lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Title */}
        <div className="relative" data-aos="fade-right">
          <div className="hidden md:flex absolute -left-8 sm:-left-12 lg:-left-36 top-6 w-12 h-12 sm:w-16 sm:h-16 
          lg:w-20 lg:h-20 bg-blue-600" /> 
          <p className="text-gray-400 mb-3 text-sm sm:text-base">Our Service</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Service Of <br className="hidden sm:block" /> School
          </h2>
        </div>

        {/* Right Text */}
        <div data-aos="fade-left">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Special Service
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
            Our school provides quality education with a focus on a safe and supportive learning environment. We offer personalized learning, modern classrooms, and experienced teachers to help students succeed. Special services such as counseling, extracurricular activities, and skill development programs support overall growth. Our goal is to build confident, knowledgeable, and responsible students for a successful future.
          </p>
        </div>
      </div>
    </section>
  );
}