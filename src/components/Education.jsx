import educationImage from "../assets/education.png";

const Education = () => {
  return (
    <section id="education" className="w-full min-h-screen bg-white flex items-center
     justify-center py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left" data-aos="fade-right">
            <p className="text-gray-500 mb-4 text-sm sm:text-base">
              University School Presentation
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1A44] leading-tight mb-4 lg:mb-6">
              Welcome To <br className="hidden sm:block" /> Education
            </h1>

            <p className="text-gray-600 leading-relaxed mb-6 lg:mb-8 text-sm sm:text-base">
               Our educational section provides structured learning resources designed to help students understand concepts easily and effectively. It offers quality courses, interactive materials, and guided content that supports academic growth, improves skills, and encourages learners to achieve their educational goals successfully.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 transition
               text-white px-6 sm:px-8 py-2 sm:py-2 rounded-full font-medium text-sm sm:text-base"
               data-aos="fade-up" data-aos-delay="200">
                Click Here
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex items-center justify-center" data-aos="fade-left">
            <div className="absolute left-1/2 lg:left-72 top-1/2 -translate-y-1/2 w-48 sm:w-64 lg:w-96
            h-32 sm:h-40 lg:h-60 bg-blue-600 hidden md:block -translate-x-1/2 lg:translate-x-0"></div>

            <div className="relative">
              <img
                src={educationImage}
                alt="Education"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[410px] lg:h-[410px] object-cover
                 rounded-full border-4 border-white 
                shadow-xl relative z-10"
              />
              
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white p-2 
              sm:p-4 rounded-xl sm:rounded-2xl shadow-lg z-20">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Courses</div>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white p-2
               sm:p-4 rounded-xl sm:rounded-2xl shadow-lg z-20">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">5K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Students</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;