import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Contact Us
        </h2>
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-10">
          {/* Contact Details Section */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-4">
              We’d love to hear from you! Reach out to us using the details
              below:
            </p>
            <ul className="space-y-4">
              <li>
                <strong>Address:</strong> Unit 5, San Carlos City Plaza, Rizal
                St, San Carlos City, Negros Occidental
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+123456789" className="text-blue-600">
                  0910-424-1784 / (032) 312-6184
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@company.com" className="text-blue-600">
                  @sctv_csr@yahoo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Subject"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
