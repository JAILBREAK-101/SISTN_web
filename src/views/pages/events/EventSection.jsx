import React, { useEffect, useState } from "react";
import Card from "../../../shared/components/ui/Card";
import customFetch from "../../../shared/utils/api";
import SISTNINDUCTIONIMAGE from '../../../assets/images/SISTN-2025-INDUCTION.jpg';
// import EventCard from "../../../shared/components/EventCard";

const dummyEvents = [
    {
      id: 1,
      title: 'SISTN Induction Ceremony 2025',
      date: 'Coming Soon: September 20, 2025',
      description:
        'Join industry leaders and tech enthusiasts for a deep dive into the future of digital transformation. Explore trends in AI, machine learning, and data analytics.',
      image: SISTNINDUCTIONIMAGE,
      upcoming: true,
      ctaText: "Register",
      link: '/membership-offline-form',
    },
    // -------------------------- Template for Upcoming Events
    // {
      //   id: 2,
      //   title: 'AI & Machine Learning Conference',
    //   date: 'November 10, 2024',
    //   description:
    //     'A comprehensive event focused on cutting-edge advancements in artificial intelligence, with workshops on machine learning, neural networks, and AI ethics.',
    //   image: EventImage2,
    //   link: '#',
    // },
    // {
    //   id: 3,
    //   title: 'Tech for Good: Empowering Communities',
    //   date: 'December 5, 2024',
    //   description:
    //     'Discover how technology is being used to create sustainable solutions in underserved communities. This event brings together innovators and social entrepreneurs.',
    //   image: EventImage3,
    //   link: '#',
    // },
    // {
    //   id: 3,
    //   title: 'Tech for Good: Empowering Communities',
    //   date: 'December 5, 2024',
    //   description:
    //     'Discover how technology is being used to create sustainable solutions in underserved communities. This event brings together innovators and social entrepreneurs.',
    //   image: EventImage3,
    //   link: '#',
    // },
    // -------------------------- Template for Upcoming Events
];

const EventSection = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await customFetch("/events");
                setEvents(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
 
        fetchEvents();
    }, []);

    if (loading) {
        return <div>Loading events...</div>;
    }

    // if (error) {
        // return <div>Error: {error}</div>;
    // }

    // return (
    //     <section className="py-12 bg-white">
    //         <div className="container mx-auto px-4">
    //             <h3 className="text-3xl font-bold text-sistn-dark-blue text-center mb-6 max-md:text-5xl">Upcoming Events</h3>
    //                 {/* {events.map((event, index) => (
    //                     <Card
    //                         key={index}
    //                         image={event.image}
    //                         title={event.title}
    //                         description={event.description}
    //                         link={event.link}
    //                     />
    //                 ))} */}
    //             <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
    //                 {dummyEvents.map((event) => (
    //                     <Card
    //                     key={event.id}
    //                     image={event.image}
    //                     title={event.title}
    //                     description={
    //                         <>
    //                         <p className="max-md:text-3xl">{event.description}</p>
    //                         <p className="text-gray-600 mt-2 max-md:text-3xl">{event.date}</p>
    //                         </>
    //                     }
    //                     link={event.link}
    //                     buttonText="Read more"
    //                     />
    //                 ))}
    //                 </div>
    //             </div>
    //     </section>
    // );

    return (
        <div className="bg-white py-16 px-8 md:px-16 lg:px-32">
            
          {/* Render event cards */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-sistn-dark-blue text-center mb-6 max-md:text-5xl">Upcoming Events</h3>
                        {/* {events.map((event, index) => (
                            <Card
                                key={index}
                                image={event.image}
                                title={event.title}
                                description={event.description}
                                link={event.link}
                            />
                        ))} */}
                    <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
                        {dummyEvents.map((event) => (
                          event.upcoming ? (
                            <div className="col-span-3">
                              <Card
                              key={event.id}
                              image={event.image}
                              title={event.title}
                              description={
                                  <>
                                  <p className="max-md:text-3xl">{event.description}</p>
                                  <p className="text-gray-600 mt-2 max-md:text-3xl">{event.date}</p>
                                  </>
                                }
                                link={event.link}
                                ctaText={event.ctaText}
                                />
                              </div>
                            ) : <div className="block">
                              <Card
                              key={event.id}
                              image={event.image}
                              title={event.title}
                              description={
                                  <>
                                  <p className="max-md:text-3xl">{event.description}</p>
                                  <p className="text-gray-600 mt-2 max-md:text-3xl">{event.date}</p>
                                  </>
                                }
                                link={event.link}
                                ctaText={event.ctaText}
                                />
                            </div>
                        ))}
                        </div>
                    </div>
            </section>
            

          {/* <div className="grid gap-8 lg:grid-cols-2">
            {events.length ? (
              events.map((event) => <EventCard key={event.id} event={event} />)
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No events available at the moment. Please check back later.
              </div>
            )}
          </div> */}
        </div>
    );
};

export default EventSection;
