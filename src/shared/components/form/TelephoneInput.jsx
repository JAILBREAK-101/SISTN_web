import React from "react";
import { Select } from "./Select";

const countryOptions = [
    { value: "+234", label: "+234", name: "Nigeria" }, 
    // { value: "+1", label: "+1", name: "United States" }, 
    // { value: "+44", label: "+44", name: "United Kingdom" },
    // { value: "+91", label: "+91", name: "India" },
];

export const TelephoneInput = ({
    label,
    name,
    value,
    placeholder,
    onChange,
    error,
    disabled = false,
    size = "default",
    inputClass,
    labelClass,
    containerClass,
    countryCode,
    onCountryCodeChange
}) => {
    const sizeClasses = () => {
        switch (size) {
            case "large":
                return "p-4 text-lg";
            case "small":
                return "p-2 text-sm";
            default:
                return "p-3 text-base";
        }
    };

    //  when you wan’t to force authentication redirects with PHP

    return (
        <div className={`mb-4 flex items-center ${containerClass}`}>
            {label && (
                <>
                <label
                    htmlFor={name}
                    className={`block mb-1 ${labelClass}`}
                >
                    {label}
                </label>
                <br></br>
                </>
            )}
            <Select 
                options={countryOptions}
                name="countryCode"
                selectedOption={countryCode}
                onChange={onCountryCodeChange}
                className="mr-2"
                selectClass="text-3xl"
            />
            <input
                id={name}
                name={name}
                type="tel"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-150 ease-in-out block border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
                    ${error ? "border-red-500" : "border-gray-300"} 
                    ${sizeClasses()} ${inputClass}`}
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
};
