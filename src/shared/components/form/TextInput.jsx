import React from "react";

export const TextInput = ({
    label,           
    name,            
    type = "text",   
    value,           
    placeholder,     
    onChange,        
    error,           
    disabled = false,
    size = "default",
    inputClass,      
    labelClass,        
    containerClass     
}) => {
    const sizeClasses = () => {
        switch (size) {
            case "large":
                return "p-4 text-1xl";
            case "small":
                return "p-2 text-sm";
            default:
                return "p-3 text-base";
        }
    };

    return (
        <div className={`mb-4 ${containerClass}`}>
            {label && (
                <label
                    htmlFor={name}
                    className={`block font-medium mb-1 ${labelClass}`}
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full border rounded-md focus:ring-2 focus:ring-sistn-blue focus:outline-none transition duration-150 ease-in-out block border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
                    ${error ? "border-red-500" : "border-gray-300"} 
                    ${sizeClasses()} ${inputClass}`}
            />
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
};
