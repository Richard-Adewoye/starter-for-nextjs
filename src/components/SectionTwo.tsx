import Image from "next/image";

export default function ProductSection() {
  return (
    <section className="w-full bg-pink-50 py-16 px-6">
  <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Column - Card Style Images */}
    <div className="relative flex justify-center items-center">
      <div className="flex space-x-[-60px]">
        {/* Card 1 */}
        <div className="relative w-40 h-56 bg-white rounded-xl shadow-xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="absolute inset-0 border-4 border-white rounded-xl"></div>
          <img
            src="/tb3.jpeg"
            alt="Card 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Card 2 */}
        <div className="relative w-40 h-56 bg-white rounded-xl shadow-xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300 z-10">
          <div className="absolute inset-0 border-4 border-white rounded-xl"></div>
          <img
            src="/tb4.jpeg"
            alt="Card 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Card 3 */}
        <div className="relative w-40 h-56 bg-white rounded-xl shadow-xl overflow-hidden transform rotate-12 hover:rotate-0 transition-transform duration-300">
          <div className="absolute inset-0 border-4 border-white rounded-xl"></div>
          <img
            src="/tb2.jpeg"
            alt="Card 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>

    {/* Right Column - Text + CTA */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
        Your Next Chapter Starts Here
      </h2>
      <p className="text-gray-700 mb-6 max-w-lg mx-auto md:mx-0">
        A guided experience to spark growth, strengthen resilience, and deepen your connection with what matters most.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition-colors">
        BUY NOW
      </button>
    </div>
  </div>
</section>


  );
}
