import React from 'react';
import { Button } from '../../../shared/components/form/Button';
import LinkComponent from '../../../shared/components/ui/LinkComponent';
import ProfessionalDevelopmentImage from "../../../assets/images/Professional-Development.avif";

const MembershipCategories = () => {
  const memberships = [
    {
      title: 'Professional Member',
      description: `A person with a tertiary-level qualification relevant to the Information Science and Technology industry can apply for the Professional Member grade. Professional Members are entitled to use the letters PSISTN (Professional Member of the Society for Information Science and Technology of Nigeria) after their names.`,
      privileges: [
        'Vote on general Society business',
        'Hold office or committee chairmanships',
        'Sit on committees and vote on matters',
        'Receive all SISTN publications',
      ],
      image: ProfessionalDevelopmentImage,
    },
    {
      title: 'Associate Member',
      description: `Professional Members with 10+ years of experience can apply for Associate Member status. Associate Members are entitled to use the letters ASISTN after their names.`,
      privileges: [
        'Vote on general Society business',
        'Hold office or committee chairmanships',
        'Sit on committees and vote on matters',
        'Receive all SISTN publications',
      ],
      image: ProfessionalDevelopmentImage,
    },
    {
      title: 'Corporate Membership',
      description: `Corporate organisations in the information business can apply for Corporate Membership. They receive benefits and privileges designed for organisations in the industry.`,
      image: ProfessionalDevelopmentImage,
    },
    {
      title: 'Student Member',
      description: `Full-time students in Information Science and Technology programs recognized by SISTN can apply for Student Membership. Student members enjoy discounted rates on SISTN activities and publications.`,
      privileges: [
        'Receive copies of e-magazines and e-newsletters',
        'Reduced registration fees for meetings',
        'Discounted subscription rates for SISTN journals',
      ],
      image: ProfessionalDevelopmentImage,
    },
    {
      title: 'Fellows',
      description: `SISTN Fellow status is awarded to individuals with lifetime contributions to the Information Science and Technology professions. Fellows are entitled to use the letters FSISTN after their names.`,
      privileges: [
        'Receive all SISTN publications',
        'Exempt from participation fees in any SISTN activity',
      ],
      image: ProfessionalDevelopmentImage,
    },
    {
      title: 'Honorary Fellowship',
      description: `Honorary Fellowship is bestowed on individuals who have made significant contributions to Information Science and Technology in Nigeria and beyond.`,
      privileges: [
        'Receive all SISTN publications',
        'Exempt from participation fees in any SISTN activity',
      ],
      image: ProfessionalDevelopmentImage,
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-14">SISTN Membership Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {memberships.map((membership, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={membership.image}
                  alt={membership.title}
                  className="h-60 w-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-t-xl"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl max-md:text-4xl font-semibold text-white z-10">
                  {membership.title}
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-950 leading-relaxed max-md:text-3xl">{membership.description}</p>
                {membership.privileges && (
                  <ul className="space-y-2">
                    {membership.privileges.map((privilege, index) => (
                      <li key={index} className="flex items-start max-md:text-3xl">
                        <span className="mr-2 text-sistn-dark-blue">✔️</span>
                        <span className="text-gray-800">{privilege}</span>
                      </li>
                    ))}
                  </ul>
                )}
                  
                <LinkComponent 
                  label={
                    <Button
                      body={"Learn More"}
                      size='large'
                      btnClass={"mt-6 w-full py-2 max-md:text-2xl bg-sistn-dark-blue text-white text-center rounded-lg font-semibold hover:bg-sistn-blue transition-colors"}
                    />
                  } 
                  href={`/membership-categories/${membership.title.replace(/ /g, '-')}`} 
                  // href={`/membership-categories/${membership.title.replace(' ', '-').toLowerCase()}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
        <LinkComponent
          label={
            <Button
              body={"Register as a New Member"}
              size='large'
              btnClass={"text-4xl max-md:text-3xl"}
            />
          }
          href="/membership-form"
        />
        </div>

      </div>
    </div>
  );
};

export default MembershipCategories;
