import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="bg-pink-50 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Part 1: Newsletter Sign-up */}
        <div className="text-center">
          <span className="inline-block uppercase text-sm tracking-wide border px-3 py-1 rounded-full text-gray-700 mb-4">
            Monthly Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-3">
            Tunji's Letters
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-6">
            Join our monthly newsletter to receive thoughtful letters, exclusive insights, and updates delivered directly to your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition"
            >
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Part 2: Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Card 1 */}
  <div className="bg-black rounded-xl shadow-sm border p-6 text-center">
    <div className="mb-4">
      {/* Insight Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </div>
    <h3 className="text-lg font-semibold mb-2 text-white">Exclusive Insights</h3>
    <p className="text-gray-400 text-sm">
      Gain actionable insights into mindset, resilience, and high-performance strategies to unlock your full potential
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-black rounded-xl shadow-sm border p-6 text-center">
    <div className="mb-4">
      {/* Community Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m13 5.87a4 4 0 00-4-4H9a4 4 0 00-4 4m13-8a4 4 0 11-8 0 4 4 0 018 0zm-10 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
    <h3 className="text-lg font-semibold mb-2 text-white">Community Stories</h3>
    <p className="text-gray-400 text-sm">
      Read inspiring stories shared by community members who are building stronger connections.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-black rounded-xl shadow-sm border p-6 text-center">
    <div className="mb-4">
      {/* Updates / Growth Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto w-12 h-12 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    </div>
    <h3 className="text-lg font-semibold mb-2 text-white">Latest Updates</h3>
    <p className="text-gray-400 text-sm">
      Stay informed with upcoming events, meetups, and announcements.
    </p>
  </div>
</div>


      </div>
    </section>
  );
}
