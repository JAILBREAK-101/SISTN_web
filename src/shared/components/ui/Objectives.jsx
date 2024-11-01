import React from 'react';

const Objectives = () => {

  const objectives = [
    "To promote the education of information scientists and professionals",
    "To promote research in information science and technology",
    "To promote multidisciplinary collaboration and interdisciplinary approaches on issues pertaining to creation, sharing, and use of information, knowledge, and information technology for national and global development",
    "To develop the competence and promote the professional integrity of information scientists and technologists",
    "To champion and protect the interests of the information science and technology profession, and improve public awareness on matters pertaining to the practice of the profession",
  ]

  return (
    <section className="bg-gradient-to-r from-sistn-blue to-sistn-dark-blue text-grey mx-24 max-md:mx-5 bg-[url('/path-to-your-image.jpg')] bg-cover bg-center bg-no-repeat py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-sistn-green max-md:text-5xl">Our Objectives</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="text-lg text-left space-y-4">
            {
              objectives.map(eachObjectives => {
                return (
                  <li className="bg-sistn-gray bg-opacity-20 text-sistn-gray rounded-lg p-4 hover:bg-opacity-30 transition duration-300">
                  <span className="font-semibold text-2xl max-md:text-4xl">{eachObjectives}</span>
                </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
