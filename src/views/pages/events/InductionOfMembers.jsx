import React from 'react'
import { Link } from 'react-router-dom';
import SISTNINDUCTIONIMAGE from '../../../assets/images/SISTN-2025-INDUCTION.jpg';


export const InductionOfMembers = () => {
  const imageTitle = "SISTN INDUCTION IMAGE";
  const buttonLink = "/membership-offline-form";
  const buttonLinkText = "Register Now"
  
  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32 gap-4 flex flex-col">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Induction of Members</h1>
             <p className="text-2xl text-gray-700 mb-6">
                Register for the 2025 Induction Ceremony coming up on Saturday 20th September, 2025.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg col-span-4">
                 <img
                    src={SISTNINDUCTIONIMAGE}
                    alt={imageTitle}
                    className="w-full h-100 object-cover"
                />
            </div>

            <div className='text-center mt-4'>
                <button className="bg-sistn-blue text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none max-md:text-2xl">
                    <Link to={buttonLink}>{buttonLinkText}</Link>
                </button>
            </div>
        </div>
    </div>
  )
}
