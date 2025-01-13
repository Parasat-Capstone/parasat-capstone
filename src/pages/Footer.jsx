import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "rgb(0, 18, 107)" }}
      className="py-12 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-16">
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Head Office</h2>
            <p className="text-lg leading-relaxed">
              Parasat Fiber San Carlos
              <br />
              San Carlos City, Negros Occidental
              <br />
              Phone: 0910-424-1784 / (034) 312-6184
            </p>
          </div>

          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Operating Hours</h2>
            <p className="text-lg leading-relaxed">
              Monday to Friday: 8:00 AM - 5:00 PM
              <br />
              Saturday: 8:00 AM - 12:00 PM
              <br />
              Closed on Sundays and Holidays
            </p>
          </div>

          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg italic leading-relaxed">
              “Leader and pioneer in state-of-the-art cable TV and broadband
              services providing quality news and information to the people of
              southern Philippines.”
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-700 pt-6 text-center">
          <p className="text-sm">
            &copy; 2025 Parasat Fiber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
