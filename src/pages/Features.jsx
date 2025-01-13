import React from "react";
import plan90 from "../assets/90.png";
import plan120 from "../assets/120.png";
import plan200 from "../assets/200.png";
import plan250 from "../assets/250.png";
import plan450 from "../assets/450.png";
import plan600 from "../assets/600.png";
import banner from "../assets/Banner.avif";

const pricingPlans = [
  { id: 1, speed: "90 Mbps", price: "₱999", image: plan90 },
  { id: 2, speed: "120 Mbps", price: "₱1,199", image: plan120 },
  { id: 3, speed: "200 Mbps", price: "₱1,499", image: plan200 },
  { id: 4, speed: "250 Mbps", price: "₱1,699", image: plan250 },
  { id: 5, speed: "450 Mbps", price: "₱1,999", image: plan450 },
  { id: 6, speed: "600 Mbps", price: "₱2,599", image: plan600 },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner */}
        <div className="mb-8">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Choose Your Plan
        </h2>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={plan.image}
                alt={`${plan.speed} Plan`}
                className="w-full h-50 object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {plan.speed}
              </h3>
              <p className="text-gray-700 text-2xl font-semibold mb-4">
                {plan.price} / month
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-500 transition-colors duration-300 text-2xl">
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
