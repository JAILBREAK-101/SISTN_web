import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ label, href, onClick }) => {
  return (
    <Link
      to={href}
      className="
        text-sistn-dark-blue 
        hover:text-sistn-blue
        font-semibold 
        text-1xl
        transition-colors 
        duration-300
        block
        px-4
        py-2
        rounded-md
        hover:bg-gray-100
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-opacity-50
        sm:px-2
        md:px-4
        lg:text-lg
      "
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default LinkComponent;
