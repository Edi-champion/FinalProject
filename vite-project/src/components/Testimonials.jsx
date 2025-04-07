import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    review:
      "Fitmeal has changed my eating habits! The meals are delicious and healthy.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Michael Smith",
    review: "Great service! I love the variety and freshness of the food.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sophia Lee",
    review: "Convenient and nutritious! My favorite food delivery service.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-lg mx-auto text-center p-6">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>

      <div className="relative bg-gray-100 p-6 rounded-lg shadow-lg">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-16 h-16 mx-auto rounded-full mb-3"
        />
        <p className="text-gray-700 italic">
          "{testimonials[currentIndex].review}"
        </p>
        <h3 className="text-lg font-semibold mt-2">
          {testimonials[currentIndex].name}
        </h3>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-900"
          onClick={prevTestimonial}
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-900"
          onClick={nextTestimonial}
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
