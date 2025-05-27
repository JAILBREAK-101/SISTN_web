import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SISTNLOGO from "../../assets/images/SISTN-LOGO.png";
import { Link } from "react-router-dom";
import Dropdown from "../components/ui/DropDown";

export const Navbar = () => {
    const [openDropDown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleDropdownToggle = (dropdownId) => {
        setOpenDropdown(openDropDown === dropdownId ? null : dropdownId);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header id="header" className={`page-header shadow z-50 sticky ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className={`bg-sistn-dark-blue text-white transition duration-300 ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
                <div className="nav m-0 flex items-center justify-between relative">

                    {/* Logo Section */}
                    <div className="navbar-brand">
                        <Link to={'/'}>
                            <section className="hidden-folded d-inline">
                                <img width={140} src={SISTNLOGO} alt="Logo" />
                            </section>
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="lg:hidden">
                        <button 
                            className="flex items-center p-2"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className={`absolute lg:static left-0 top-full bg-sistn-dark-blue w-full lg:w-auto transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`} id="navbarToggler">
                        <ul className="flex items-center flex-col lg:flex-row gap-4 p-4 lg:p-0">
                            {/* About Dropdown */}
                            <li className="nav-item">
                                <Dropdown
                                    title="About"
                                    links={[
                                        { label: "History", href: "/history" },
                                        { label: "Organization and Constitution", href: "/organization" },
                                        { label: "Memorandum of Association", href: "/about/memorandum-of-association" },
                                        { label: "Article of Association", href: "/about/article-of-association" },
                                    ]}
                                    isOpen={openDropDown === "about"}
                                    onToggle={() => handleDropdownToggle("about")}
                                    onClose={closeDropdown}
                                />
                            </li>

                            {/* Membership Dropdown */}
                            <li className="nav-item">
                                <Dropdown
                                    title="Membership"
                                    links={[
                                        { label: "Membership Categories", href: "/membership-categories" },
                                        { label: "Membership Form", href: "/form" },
                                    ]}
                                    isOpen={openDropDown === "membership"}
                                    onToggle={() => handleDropdownToggle("membership")}
                                    onClose={closeDropdown}
                                />
                            </li>

                            {/* Events Dropdown */}
                            <li className="nav-item">
                                <Dropdown
                                    title="Events"
                                    links={[
                                        { label: "Webinars", href: "/webinars" },
                                        { label: "Lectures and Seminars", href: "/lectures-and-seminars" },
                                        { label: "Founders Day Lectures", href: "/founders-day-lectures" },
                                        { label: "Conference", href: "/conference" },
                                        { label: "Induction of Members", href: "/induction-of-members" },
                                    ]}
                                    isOpen={openDropDown === "events"}
                                    onToggle={() => handleDropdownToggle("events")}
                                    onClose={closeDropdown}
                                />
                            </li>

                            {/* Contact Link */}
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link text-1xl max-md:text-3xl">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
