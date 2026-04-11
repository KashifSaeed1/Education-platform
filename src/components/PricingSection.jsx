import pricing from '../assets/pricing.png'

export default function PricingSection() {
  return (
    <section id='pricing' className="min-h-screen bg-white flex items-center justify-center
     px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-24">
        {/* Left Image */}
        <div className="relative flex justify-center lg:justify-end" data-aos="fade-right">
          <div className="absolute left-4 sm:left-7 -top-4 sm:-top-6 w-3/4 h-full max-w-xs
           sm:max-w-sm bg-blue-600" /> 
          <img
            src={pricing}
            alt="School Bus"
            className="relative w-full max-w-xs sm:max-w-sm shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left px-2 sm:px-0" data-aos="fade-left">
          <p className="text-gray-400 mb-2 text-sm sm:text-base">Pricelist</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Pricing Plan</h1>

          {/* Card 1 */}
          <div className="bg-blue-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 
          sm:mb-6 shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg sm:text-xl font-semibold">Professional</h2>
              <span className="text-base sm:text-lg font-bold">$199</span>
            </div>
            <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
             Our educational website provides structured courses, expert guidance, interactive resources, and assessments to enhance students' knowledge and academic success.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6
           shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg sm:text-xl font-semibold">Unlimited</h2>
              <span className="text-base sm:text-lg font-bold">$999</span>
            </div>
            <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
             Our unlimited plan offers full access to all courses, premium resources, expert support, and continuous learning opportunities without any restrictions, ensuring students achieve their educational goals efficiently and confidently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}