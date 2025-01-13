import React from "react";
import { Link } from "react-router-dom";
import plan40 from "../assets/40mb hfc.avif";
import plan25 from "../assets/25mb hfc.avif";

const ApplyNow = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={plan40}
              alt="40 Mbps Plan"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <img
              src={plan25}
              alt="25 Mbps Plan"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Requirements Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Apply Now</h2>
            <p className="text-lg text-gray-700 mb-4">
              To subscribe to our plans, please prepare the following documents:
            </p>
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
              <li>Valid ID of Subscriber</li>
              <li>Any proof of billing</li>
              <li>Sketch of home address with landmark</li>
            </ul>
            <Link
              to="/application-form"
              className="mt-6 inline-block bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNow;
