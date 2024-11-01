import React from "react";
import { MdPartyMode, MdCalendarMonth, MdMeetingRoom, MdClass } from "react-icons/md";

const iconMapping = {
  "Webinars": <MdPartyMode className="mr-2 text-sistn-green" />,
  "Seminars": <MdMeetingRoom className="mr-2 text-sistn-green" />,
  "Founders Day": <MdClass className="mr-2 text-sistn-green" />,
  "Conference": <MdCalendarMonth className="mr-2 text-sistn-green" />,
};

const EventCard = ({ event }) => {
  const { title, description, category, videoUrl } = event;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        {iconMapping[category] || <MdPartyMode className="mr-2 text-sistn-green" />}
        {title}
      </h2>
      <p className="text-gray-600 mb-4">{description}</p>

      {videoUrl && (
        <div className="mb-4">
          <iframe
            className="w-full h-64"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a
            href={`https://www.youtube.com/watch?v=${videoUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sistn-blue mt-4 inline-block"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default EventCard;
