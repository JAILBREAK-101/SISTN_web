import React from 'react';
import EarlyBeginningsImage from "../../../assets/images/Early-Beginnings.avif";
import FormationImage from "../../../assets/images/Formation.avif";
import Objectives from '../../../shared/components/ui/Objectives';
import VisionAndMission from '../../../shared/components/ui/VisionAndMission';

const History = () => {
  return (
    <div className="py-12 px-4 lg:px-20 bg-gray-100">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-sistn-dark-blue max-md:text-5xl">A Brief History of SISTN</h2>
                <p className="text-2xl text-gray-600 mt-2 max-md:text-3xl">The journey towards the formation of the Society for Information Science and Technology of Nigeria (SISTN).</p>
            </div>

            {/* Early Beginnings Section */}
            <section className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 className="text-4xl font-bold text-gray-800 mb-4">The Early Beginnings</h3>
                        <p className="text-2xl text-gray-700 max-md:text-3xl">
                            {/* The need for a professional society for trained and practicing information scientists 
                            and professionals in academia, public services, industries, and allied disciplines was felt 
                            from when the Africa Regional Centre for Information Science (ARCIS) began operations in 1990. 
                            However, several challenges delayed the formation of such a body. */}

                            The need for a Professional Society for trained and practicing information scientists and professionals
                            in academia, public services, industries and allied disciplines as a platform to promote the growth and 
                            rapid development of the Information Science and Technology occupations, professions, and careers in Nigeria
                            was keenly felt right from when the Africa Regional Centre for Information Science (ARCIS) began operation 
                            in 1990. However, several challenges and unforeseen circumstances prevented action on the formation of a 
                            professional body to cater to the needs of information professionals in Nigeria. ARCIS (now DDIS) has since 
                            trained more than 1,500 high-level human resources through its higher degree academic and professional degree 
                            programmes alone, not to talk of the exponentially growing number of graduates of bachelor’s and master’s 
                            degrees, higher national diplomas, and high-level industry certification programmes in the Information 
                            Science and Technology sector in Nigeria and in the diaspora. 

                        </p>
                    </div>
                    <div>
                        <img 
                            src={EarlyBeginningsImage} 
                            alt="Early Beginnings" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Formation of SISTN Section */}
            <section className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <img 
                            src={FormationImage} 
                            alt="Formation of SISTN" 
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-gray-800 mb-4">Formation of SISTN</h3>
                        <p className="text-2xl text-gray-700 max-md:text-3xl">
                            {/* On the 12th of April 2008, Mr. Olatunji Apampa convened a meeting in Ibadan with like-minded 
                            professionals. After deliberations, the Nigeria Society for Information Science and Technology 
                            (NSIST) was formed. However, it wasn't until January 12, 2015, that the professional body 
                            was officially registered as SISTN by the Corporate Affairs Commission (CAC). */}
                            The yearning for a professional body to cater to Nigerian graduates of the Information Sciences 
                            was realized on the 12th of April 2008 when Mr. Olatunji Apampa convened a meeting of like-minded 
                            individuals and professionals in the Information Sciences in Ibadan. In attendance at the meeting 
                            were Professor Mutawakilu Tiamiyu, Professor Oluwole Olatokun, Dr. Williams Nwagwu, Dr. Rosemary 
                            Agbonlahor, a host of ARCIS alumni, and many other attendees. 
                        </p>
                    </div>
                </div>
            </section>

            <div className='flex flex-col'>
                <h3 className="text-4xl font-bold text-gray-800 mb-4">Declaration and Name of Society</h3>
                <p className="text-2xl text-gray-700 max-md:text-3xl">
                The society shall be known as the “Nigeria Society for Information Science and Technology” (NSIST, pronounced “en-cist” as suggested by Dr. Williams Nwagwu). April 12, 2008, was taken as the foundation day for NSIST.
                </p>
            </div>
 
            {/* Vision and Mission Statements */}
            <VisionAndMission bgColor="bg-sistn-dark-blue" textColor={"text-white"}/>

            {/* Objectives Section */}
            <Objectives />

            <p className='text-gray-700 text-2xl mt-6'><b>NB: </b>It must be emphasised that the take-off of SISTN was due to the efforts of many including the Department of Data and Information Science (DDIS formerly ARCIS). The contributions of individuals such as Professor M.A. Tiamiyu, Professor Oluwole Olatokun, Mr. Olatunji Apampa, Dr. Williams Nwagwu, Dr. Funmilayo Omotayo, Dr. Olamidipupo Ajigboye and Dr. Rosemary Agbonlahor cannot be overemphasised. The pioneering efforts of the mentioned individuals was instrumental to the growth of SISTN in more ways than one. The dedication to duty and love of the profession remains the driving force behind SISTN and its accolades of achievements till date.</p>
    </div>
  );
};

export default History;
