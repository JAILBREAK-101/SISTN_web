import MissionImage from "../../../assets/images/Mission.webp"
import VisionImage from "../../../assets/images/Vision.webp"

const VisionAndMission = ({bgColor, textColor}) => {
    return (
        <>
            {/* Vision and Mission Section */}
            <section id="vision" className="py-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-4">
                        {/* Vision */}
                        <div className={`${bgColor} flex items-center justify-between px-2 py-4 rounded-lg shadow-lg text-center max-md:flex-col max-sm:gap-6`}>
                            <img src={VisionImage} alt="Vision" className="mb-4 object-cover mx-auto rounded-lg" />
                            <div className="max-w-60ch">
                                <h4 className={`${textColor} text-4xl font-bold mb-4 max-md:text-5xl`}>Vision Statement</h4>
                                <p className={`text-2xl ${textColor} max-w-70ch sm:text-3xl max-md:text-3xl`}>
                                    A Nigerian society wherein quality information and appropriate information technologies are effectively harnessed to promote growth, development, and social inclusion.
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div id="mission" className={`${bgColor} flex items-center justify-between px-2 py-4 rounded-lg shadow-lg text-center max-md:flex-col max-sm:gap-6`}>
                            <div className="max-w-60ch">
                                <h4 className={`${textColor} text-4xl font-bold mb-4 max-md:text-5xl`}>Mission Statement</h4>
                                <p className={`text-2xl ${textColor} max-w-70ch sm:text-3xl max-md:text-3xl`}>
                                    To advance knowledge and professionalism in information science and technology through research, education, and promotion of public awareness.
                                </p>
                            </div>

                            <img src={MissionImage} alt="Mission" className="mb-4 object-cover mx-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VisionAndMission;

