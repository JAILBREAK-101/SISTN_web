import React from "react";
import PeopleTogetherImage from "../../assets/images/people-together.webp";
import Card from "../../shared/components/ui/Card";
import VisionAndMission from "../../shared/components/ui/VisionAndMission";
import ProfessionalDevelopmentImage from "../../assets/images/Professional-Development.avif"
import DigitalMediaAndTechnologiesImage from "../../assets/images/Information-Management.avif"
import InformationManagementImage from "../../assets/images/Information-Management.avif"
import EventSection from "./events/EventSection";

const Welcome = () => {
    const services = [
        {
            image: InformationManagementImage,
            title: "Information Management",
            description: "We provide expertise in managing and organizing critical information for public and private sector organizations.",
            link: "#",
            ctaText: "Read More",
            upcoming: false
        },
        {
            image: DigitalMediaAndTechnologiesImage,
            title: "Digital Media & Technologies",
            description: "We offer cutting-edge solutions in digital media, big data analytics, and machine learning applications.",
            link: "#",
            ctaText: "Read More",
            upcoming: false
        },
        {
            image: ProfessionalDevelopmentImage,
            title: "Professional Development",
            description: "We provide professional services to upgrade skills and knowledge for members and corporate organizations.",
            link: "#",
            ctaText: "Read More",
            upcoming: false
        },
    ];

    return (
        <div className="text-center">

            <div className="bg-sistn-gray min-h-[min-w-600px] py-4">
                {/* Image Section */}
                <div className="flex justify-center mb-8">
                    <img 
                        src={PeopleTogetherImage}
                        alt="People Together" 
                        className="object-cover rounded-lg"
                        />
                </div>
    
                {/* Title and Intro Section */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-sistn-dark-blue mb-4 max-md:text-5xl">
                        Society for Information Science & Technology of Nigeria
                    </h1>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-4xl font-bold text-sistn-dark-blue mb-6 max-md:text-5xl">About SISTN</h3>
                    <p className="text-gray-600 text-2xl mb-8 max-md:text-3xl">
                        SISTN is a nongovernmental organisation registered in Nigeria by the Corporate Affairs Commission (CAC) with a broad mandate to cater for the professional interests of information professionals and allied disciplines in Nigeria.
                    </p>
                    <p className="text-gray-600 text-2xl max-md:text-3xl">
                        SISTN is committed to professionalism in fields such as information management, digital media, big data analytics, business intelligence, machine learning, and artificial intelligence.
                    </p>
                </div>
            </section>

            <VisionAndMission bgColor={"bg-sistn-dark-blue"} textColor={"text-white"}/>

            {/* Services Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-sistn-dark-blue text-center mb-6 max-md:text-5xl">Our Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {services.map((eachService, index) => (
                            <Card
                                key={index}
                                image={eachService.image}
                                title={eachService.title}
                                description={eachService.description}
                                link={eachService.link}
                                ctaText={eachService.ctaText}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <EventSection />
        </div>
    );
};

export default Welcome;