import { Link } from "react-router";
import hero from "../assets/homepage.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Experience Blazing Fast Internet + Cable
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          All new plans with FREE installation and up to 600 Mbps speeds!
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4 mb-8">
          <Link
            to="/features"
            className="bg-red-600 py-3 px-6 rounded-full font-medium text-white hover:bg-red-700 transition-all duration-300"
          >
            View Plans
          </Link>
          <Link
            to="/contact"
            className="bg-white py-3 px-6 rounded-full font-medium text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img
            src={hero}
            alt="Internet Plans"
            className="max-w-full h-auto shadow-lg rounded-lg"
          />
        </div>

        {/* Additional Info */}
        <p className="text-sm mt-6 opacity-80">
          P 1,500 refundable activation deposit | Contract Duration: 24 Months
        </p>
      </div>
    </section>
  );
};

export default Hero;
