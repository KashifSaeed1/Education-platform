import services from '../assets/services.png'

const serviceCards = [
  {
    id: 1,
    icon: '📚',
    title: 'Quality Education',
    description: 'Comprehensive curriculum designed by experienced educators to develop critical thinking and problem-solving skills.'
  },
  {
    id: 2,
    icon: '👨‍🏫',
    title: 'Expert Instructors',
    description: 'Highly qualified teachers with years of experience dedicated to student success and personal development.'
  },
  {
    id: 3,
    icon: '💻',
    title: 'Modern Technology',
    description: 'State-of-the-art digital learning tools and computer labs equipped with latest software and resources.'
  },
  {
    id: 4,
    icon: '🏆',
    title: 'Extracurricular Activities',
    description: 'Sports, arts, culture, and clubs to nurture talents and build confidence in students.'
  },
  {
    id: 5,
    icon: '🛡️',
    title: 'Safe Environment',
    description: 'Secure campus with professional security measures ensuring a safe and nurturing learning space.'
  },
  {
    id: 6,
    icon: '💬',
    title: 'Career Counseling',
    description: 'Personalized guidance for college preparation and career planning from expert counselors.'
  },
  {
    id: 7,
    icon: '🎓',
    title: 'Skill Development',
    description: 'Programs focused on building practical skills including communication, leadership, and technical abilities.'
  },
  {
    id: 8,
    icon: '👥',
    title: 'Personalized Learning',
    description: 'Customized educational approaches tailored to meet individual student needs and learning styles.'
  }
];

export default function Services() {
  return (
    <section id='services' className="bg-gradient-to-b from-white to-blue-50 w-full py-12 md:py-16">
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 overflow-hidden shadow-lg">
        <img
          src={services}
          alt="Library"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          data-aos="fade-up"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
          <div className="relative" data-aos="fade-right">
            <div className="hidden md:flex absolute -left-8 sm:-left-12 lg:-left-36 top-6 w-12 h-12 sm:w-16 sm:h-16 
            lg:w-20 lg:h-20 bg-blue-600 rounded-lg shadow-lg" /> 
            <p className="text-blue-600 mb-3 text-sm sm:text-base font-semibold tracking-widest uppercase">Our Service</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Service Of <br className="hidden sm:block" /> School
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
          </div>

          <div data-aos="fade-left">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Why Choose Our Services?
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4">
              Our school provides exceptional education with a focus on creating a safe and supportive learning environment. We combine academic excellence with holistic development.
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-3 flex-shrink-0">✓</span>
                <p className="text-gray-600 text-sm sm:text-base">Personalized attention for every student</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-3 flex-shrink-0">✓</span>
                <p className="text-gray-600 text-sm sm:text-base">Modern facilities and technology integration</p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 text-xl mr-3 flex-shrink-0">✓</span>
                <p className="text-gray-600 text-sm sm:text-base">Comprehensive support and counseling services</p>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            Our Comprehensive Services
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {serviceCards.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 
                hover:scale-105 hover:-translate-y-2 cursor-pointer border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 h-1 w-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full 
                group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-8 sm:p-12 text-white shadow-xl" data-aos="fade-up">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Students Enrolled</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">Expert Faculty Members</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}