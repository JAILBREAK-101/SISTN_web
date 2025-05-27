import React from 'react';
import { Link } from 'react-router-dom/dist';

const Card = ({ image, title, description, link, ctaText }) => {
  return (
    <div className="bg-sistn-gray shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-7 text-center">
        <h3 className="text-3xl font-bold mb-2 text-gray-800 max-md:text-4xl">{title}</h3>
        <p className="text-gray-900 mb-4 max-md:text-3xl">{description}</p>
        <button className="bg-sistn-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none max-md:text-2xl">
          <Link to={link}>{ctaText}</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
