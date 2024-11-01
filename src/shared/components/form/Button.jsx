import React from "react";
import { Icon } from "../ui/icon";
import { FaSpinner } from "react-icons/fa";

export const Button = ({ 
    loading, 
    variant = "primary", 
    disabled, 
    btnClass, 
    withIcon, 
    body, 
    type = "button", 
    size = "default", 
    onClick = () => {}, 
    title 
}) => {
    const variantClasses = () => {
        switch (variant) {
            case "primary":
                return "bg-blue-500 text-white hover:bg-blue-600";
            case "secondary":
                return "bg-gray-500 text-white hover:bg-gray-600";
            case "danger":
                return "bg-red-500 text-white hover:bg-red-600";
            default:
                return "bg-gray-200 text-black";
        }
    };

    const sizeClasses = () => {
        switch (size) {
            case "large":
                return "px-8 py-3 text-lg";
            case "small":
                return "px-4 py-1 text-sm";
            case "xsmall":
                return "px-3 py-1 text-xs";
            default:
                return "px-6 py-2 text-base";
        }
    };

    const loaderSize = () => {
        switch (size) {
            case "large":
                return 20;
            case "xsmall":
                return 12;
            default:
                return 15;
        }
    };

    const loaderColor = () => {
        switch (variant) {
            case "primary":
                return "#ffffff";
            default:
                return "var(--text-20)";
        }
    };

    const classes = `inline-flex items-center justify-center rounded-md font-semibold focus:outline-none transition duration-150 ease-in-out ${
        disabled || loading ? "opacity-50 cursor-not-allowed" : ""
    } ${variantClasses()} ${sizeClasses()} ${btnClass ?? ""}`;

    const buttonIcon = () => {
        if (withIcon) return <Icon name={withIcon} className="mr-2" />;
        return null;
    };

    return (
        <button
            className={classes}
            type={type}
            disabled={disabled || loading}
            onClick={onClick ?? (() => {})}
            title={title}
        >
            {loading ? (
                <span className="flex items-center justify-center">
                    <div className="loader" style={{ width: loaderSize(), height: loaderSize(), backgroundColor: loaderColor() }}>
                        <FaSpinner color="bg-sistn-blue"/>
                    </div>
                </span>
            ) : (
                <>
                    {buttonIcon()} {body}
                </>
            )}
        </button>
    );
};
