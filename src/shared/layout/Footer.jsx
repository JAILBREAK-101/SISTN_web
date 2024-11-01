import React from "react";
import ContactInformation from "../components/ContactInfo";
import SocialMediaIcons from "../components/ui/SocialMediaIcons";
import GoogleMapsSection from "./GoogleMap";

const Footer = () => {
 
  return (
    <footer className="bg-sistn-grey text-sistn-dark-blue py-10">
      <div className="w-full sm:w-full bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
          
          <div className="flex items-start justify-between max-sm:flex-col max-sm:items-center">
            <ContactInformation />
  
            <GoogleMapsSection />
          </div>

         {/* Social Media Icons */}
         <div className="mt-6 text-center">
            <SocialMediaIcons />
          </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-md text-gray-700">
          &copy; {new Date().getFullYear()} SISTN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
