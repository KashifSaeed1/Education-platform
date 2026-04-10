import aboutImage from "../assets/about.png";

const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-right">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 md:w-20 lg:w-32
            h-40 md:h-48 lg:h-56 bg-blue-600 hidden md:block"></div>

            <img
              src={aboutImage}
              alt="About us"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm object-cover shadow-lg z-10"
            />
          </div>

          {/* Content Section */}
          <div className="text-center lg:text-left px-2 sm:px-4" data-aos="fade-left">
            <p className="text-gray-500 mb-3 text-sm sm:text-base">About Us</p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1A44] leading-tight mb-4 lg:mb-6">
              Our About <br className="hidden sm:block" /> Profile
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base lg:text-base">
             Education is a powerful tool that helps students grow and succeed in life. Our educational website provides easy access to courses, learning materials, and resources designed to improve knowledge, build skills, and support learners in achieving their academic goals effectively.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 sm:px-8 py-2 sm:py-2
            rounded-full font-medium text-sm sm:text-base" data-aos="fade-up" data-aos-delay="200">
              Click Here
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;