import React from "react";

export const ThankYouPage = () => {
  return (
    <div className="flex justify-center mt-4 items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-11/12 md:w-2/3 lg:w-1/3">
        <h2 className="text-4xl font-semibold text-sistn-blue mb-4 text-center">Thank You for Registering!</h2>
        <p className="text-1xl text-gray-700 text-center mb-6">
          We have received your registration and sent a confirmation email to your inbox.
        </p>
        <div className="text-center">
          <a href="/" className="bg-sistn-green hover:bg-sistn-dark-blue text-white px-4 py-2 rounded-lg text-xl font-semibold transition duration-300">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};
