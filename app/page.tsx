import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Search Bar */}
      <section className="relative min-h-[calc(100vh+200px)] flex flex-col items-center justify-center text-center text-white overflow-hidden pb-32 pt-24 md:pt-16">
        <div className="hero-image-container absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
            alt="Luxury Home"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover luxury properties that match your lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/properties"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Properties
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 -mt-8">
          <div className="bg-white py-12 shadow-lg rounded-2xl">
            <div className="max-w-5xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city or zip"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none appearance-none bg-white">
                    <option>All Types</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Condo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none appearance-none bg-white">
                    <option>Any Price</option>
                    <option>$0 - $500K</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $2M</option>
                    <option>$2M+</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-colors shadow-md hover:shadow-lg">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked luxury homes for discerning buyers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Modern Villa"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Modern Luxury Villa
                </h3>
                <p className="text-gray-600 mb-4">
                  123 Ocean Drive, Miami Beach, FL
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-blue-600">
                    $2,450,000
                  </span>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span>4,500 sqft</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="mr-4">4 Bedrooms</span>
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>3 Bathrooms</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Penthouse"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                  For Rent
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Downtown Penthouse
                </h3>
                <p className="text-gray-600 mb-4">
                  456 Skyline Ave, New York, NY
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-blue-600">
                    $8,500/mo
                  </span>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span>2,800 sqft</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="mr-4">3 Bedrooms</span>
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>2 Bathrooms</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  View Details
                </button>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Beach House"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  For Sale
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Beachfront Estate
                </h3>
                <p className="text-gray-600 mb-4">
                  789 Coastal Blvd, Malibu, CA
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-blue-600">
                    $4,200,000
                  </span>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span>6,200 sqft</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span className="mr-4">5 Bedrooms</span>
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>4 Bathrooms</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Luxury Estates?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in finding the perfect property
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Trusted Expertise
              </h3>
              <p className="text-gray-600">
                Over 20 years of experience in luxury real estate
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Best Value
              </h3>
              <p className="text-gray-600">
                Competitive pricing and transparent transactions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fast Service
              </h3>
              <p className="text-gray-600">
                Quick response times and efficient processes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Properties Sold</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1,200+</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-xl">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">Expert Agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert team help you find the perfect property that matches
            your lifestyle and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/properties"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Browse All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Luxury Estates
              </h3>
              <p className="text-gray-400">
                Your premier destination for luxury real estate. Finding your
                dream home is our passion.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/properties" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Buying
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Selling
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Renting
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Property Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>123 Real Estate Ave</li>
                <li>New York, NY 10001</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@luxuryestates.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Luxury Estates. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
