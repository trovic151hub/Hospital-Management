import CarCard from "./CarCard"
import { cars } from "../data/cars"

const FeaturedCars = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Featured Cars</h2>
        <p className="text-gray-500 mt-2">
          Choose from our wide range of premium and economy vehicles
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

    </section>
  )
}

export default FeaturedCars