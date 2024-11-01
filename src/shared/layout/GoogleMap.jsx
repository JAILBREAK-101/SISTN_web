  import React, { useEffect } from "react";

  const GoogleMapsSection = () => {
    useEffect(() => {
      function initMap() {
        const mapFrame = document.createElement("iframe");
        mapFrame.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1502849957424!2d3.8924040740924735!3d7.448620192562519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f3d95969df33%3A0xdfaca1ba64b7171d!2sDepartment%20of%20Data%20and%20Information%20Science!5e0!3m2!1sen!2sng!4v1726679353257!5m2!1sen!2sng&output=embed&iwloc=false&z=15";
          // "https://www.google.com/maps/embed/v1/place?q=Department%20of%20Data%20and%20Information%20Science%2C%20University%20of%20Ibadan%2C%20Oyo%20State%2C%20Nigeria";
        mapFrame.width = "100%";
        mapFrame.height = "100%";
        mapFrame.allowFullscreen = "";
        mapFrame.loading = "lazy";
        mapFrame.style.border = "0";
        mapFrame.referrerPolicy = "no-referrer-when-downgrade";
      
        const mapContainer = document.getElementById("map-container");
        if (mapContainer) {
          mapContainer.appendChild(mapFrame);
        }
      }    

      initMap();
    }, []);

    return (
      <div className="w-full px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center max-md:text-3xl">Locate Us via Google Maps</h2>
        <div
          id="map-container"
          className="w-full border border-gray-600 rounded-md overflow-hidden"
        >
          {/* The iframe will be inserted here dynamically */}
        </div>
      </div>
    );
  };

  export default GoogleMapsSection;

// import React, { useEffect } from "react";

// const GoogleMapsSection = () => {
//   useEffect(() => {
//     // Initialize the Google Map when the component mounts
//     function initMap() {
//       // Create the map centered around the specified coordinates
//       const map = new google.maps.Map(document.getElementById("map-container"), {
//         zoom: 15,
//         center: { lat: 7.4415, lng: 3.902 },
//       });

//       // Geocode the provided address and place a marker on the map
//       const geocoder = new google.maps.Geocoder();
//       geocoder.geocode(
//         {
//           address:
//             "Department of Data and Information Science, University of Ibadan, Oyo State, Nigeria",
//         },
//         function (results, status) {
//           if (status === "OK") {
//             map.setCenter(results[0].geometry.location);
//             new google.maps.Marker({
//               map: map,
//               position: results[0].geometry.location,
//             });
//           } else {
//             console.error("Geocode was not successful for the following reason: " + status);
//           }
//         }
//       );
//     }

//     // Load the Google Maps JavaScript API script
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     window.initMap = initMap;
//     document.head.appendChild(script);

//     // Cleanup script tag on component unmount
//     return () => {
//       document.head.removeChild(script);
//       delete window.initMap;
//     };
//   }, []);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4 max-md:text-3xl">Locate Us via Google Maps</h2>
//       <div
//         id="map-container"
//         className="max-sm:max-w-[300px] max-md:max-w-[500px] h-64 border border-gray-600 rounded-md overflow-hidden"
//       ></div>
//     </div>
//   );
// };

// export default GoogleMapsSection;
