import React, { useEffect, useState } from "react";
import { MdPartyMode, MdCalendarMonth, MdMeetingRoom, MdClass } from "react-icons/md";

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
            window.location.hostname === "localhost"
              ? "http://localhost:5001/api/events"
              : "https://sistn-backend.onrender.com/events", {
            method: 'GET',
        });
    
        const data = await response.json();
        if (response.ok) {
            setEvents(data)
        } else {
            showToast('error', data.message);
        }
        } catch (error) {
            showToast('error', `Failed to fetch events: ${error}`);
            } finally {
            setLoading(false);
        }
    }

    fetchEvents();
  }, []);

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-32 gap-4 flex flex-col">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Upcoming Events</h1>
        <p className="text-2xl text-gray-700">
          Stay updated with our upcoming webinars, seminars, workshops, and more.
        </p>
      </div>

      {/* Event Sections */}
        {/* SISTN Webinars */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg col-span-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <MdPartyMode className="mr-2 text-sistn-green" />
            SISTN Webinars
          </h2>
          <p className="text-gray-700 mb-4">
            Join us for engaging webinars led by seasoned professionals in the information sciences and technology.
            Our speakers discuss contemporary issues, providing valuable insights and encouraging participant interaction.
          </p>
          {/* Embed YouTube Video */}
          <div className="mb-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/KaEl37mRQqQ?si=LkhGojRmRtBd7WfH" // Replace with dynamic ID from backend or state
              title="SISTN Webinar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button
            onClick={() => window.open("https://www.youtube.com/KaEl37mRQqQ?si=LkhGojRmRtBd7WfH", "_blank")}
            className="text-sistn-blue hover:underline"
          >
            Watch on YouTube
          </button>
        </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Render all events from the database dynamically */}
        {events.map((event, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
              <MdCalendarMonth className="mr-2 text-sistn-green" />
              {event.title}
            </h2>
            <p className="text-gray-700 mb-4">{event.description}</p>
            {event.videoUrl && (
              <div className="mb-4">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${event.videoUrl}`} // Embed video from DB
                  title={event.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${event.videoUrl}`, "_blank")}
                  className="text-sistn-blue hover:underline"
                >
                  Watch on YouTube
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Additional Hardcoded Sections */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <MdMeetingRoom className="mr-2 text-sistn-green" />
            Seminars and Workshops
          </h2>
          <p className="text-gray-600 mb-4">
            SISTN regularly hosts seminars, workshops, and training programs at various locations throughout Nigeria.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Participate in skill-building sessions tailored to industry needs.</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <MdClass className="mr-2 text-sistn-green" />
            Founders Day Lecture
          </h2>
          <p className="text-gray-700 mb-4">
            Annually in April, SISTN commemorates its founding with the Founders Day Lecture, inviting professionals from the information industry to share insights.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Corporate organizations can showcase their products, and startups are encouraged to participate.</li>
          </ul>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <MdCalendarMonth className="mr-2 text-sistn-green" />
            Annual Conference & Induction
          </h2>
          <p className="text-gray-700 mb-4">
            The SISTN Conference and Induction Ceremony occur annually, welcoming new members into the SISTN community and fostering professional development.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>The conference lasts three to four days and focuses on unity and professional growth.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Event;
