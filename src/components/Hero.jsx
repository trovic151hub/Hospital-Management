import { useState } from "react"
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from "react-icons/fa"

const Hero = () => {
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")

  return (
    <section className="w-full h-screen relative flex items-center justify-center bg-gray-50">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          alt="car background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text */}
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Premium Cars for <br /> Every Journey
          </h1>

          <p className="mt-4 text-gray-200 text-lg">
            Book luxury, SUV, and economy cars instantly with flexible pricing and fast pickup options.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-medium">
              Book Now
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Booking Card */}
        <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Find Your Perfect Car
          </h2>

          {/* Location */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Pickup Location</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaMapMarkerAlt className="text-green-600 mr-2" />
              <input
                type="text"
                placeholder="Enter city or airport"
                className="w-full outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Pickup Date</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <FaCalendarAlt className="text-green-600 mr-2" />
              <input
                type="date"
                className="w-full outline-none"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          {/* Button */}
          <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium">
            <FaSearch />
            Search Cars
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero