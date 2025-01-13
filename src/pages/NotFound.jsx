import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="bg-gray-100 py-12 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 font-medium"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
