import React, { useState } from "react";

export const FileUpload = ({
    label,
    name,
    acceptedFileTypes = '*',
    onChange,
    error,
    disabled = false,
    containerClass = "",
    labelClass = "",
    inputClass = "",
}) => {
    const [dragOver, setDragOver] = useState(false);
    const [fileName, setFileName] = useState('');

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileChange(files[0]);
        }
    };

    const handleFileChange = (file) => {
        if (onChange) {
            onChange(file);
            setFileName(file.name);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = () => {
        setDragOver(false);
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        if (files.length > 0) {
            handleFileChange(files[0]);
        }
    };

    return (
        <div className={`mb-4 ${containerClass}`}>
            {label && (
                <label className={`block font-medium mb-1 ${labelClass}`}>
                    {label}
                </label>
            )}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-dashed border-2 border-gray-300 rounded-md p-4 transition duration-150 ease-in-out 
                    ${dragOver ? "bg-gray-100" : "bg-white"}
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
            >
                <input
                    type="file"
                    name={name}
                    accept={acceptedFileTypes}
                    onChange={handleFileInputChange}
                    className={`hidden ${inputClass}`}
                    disabled={disabled}
                />
                <p className="text-center">
                    {fileName || "Drag & drop your file here, or click to select a file."}
                </p>
            </div>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
};
