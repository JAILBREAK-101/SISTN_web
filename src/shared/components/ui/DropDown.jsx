import LinkComponent from "./LinkComponent";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = ({ title, links, isOpen, onToggle }) => {
    const handleItemClick = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className="flex text-2xl items-center focus:outline-none max-md:text-3xl"
            >
                {title} 
                <MdArrowDropDown size={20} />
            </button>
            {isOpen && (
                <div className="absolute left-0 mt-2 flex flex-col gap-2 w-52 bg-white rounded-md shadow-lg z-50 max-md:text-2xl">
                    {links.map((link) => (
                         <LinkComponent key={link.href} label={link.label} href={link.href} onClick={handleItemClick} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
