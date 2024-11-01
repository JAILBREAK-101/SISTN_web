import React, { useState } from "react";

export const PassportUpload = ({
    label,
    name,
    acceptedFileTypes = "image/*", // Accept any image type
    onChange,
    error,
    disabled = false,
    containerClass = "",
    labelClass = "",
    inputClass = "",
}) => {
    const [dragOver, setDragOver] = useState(false);
    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState('');

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileChange(files[0]);
        }
    };

    const handleFileChange = (selectedFile) => {
        if (selectedFile && selectedFile.type.startsWith("image/")) {
            setFile(selectedFile);
            setFilePreview(URL.createObjectURL(selectedFile));
            if (onChange) {
                // Pass the file to the parent component
                onChange(selectedFile);
            }
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

    const handleRemoveFile = () => {
        setFile(null);
        setFilePreview('');
        if (onChange) {
            onChange(null);
        }
    };

    return (
        <div className={`mb-4 ${containerClass}`}>
            {label && (
                <label className={`block font-medium mb-1 max-xl:text-3xl ${labelClass}`}>
                    {label}
                </label>
            )}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-dashed border-2 border-gray-300 rounded-md p-4 transition duration-150 ease-in-out cursor-pointer
                    ${dragOver ? "bg-gray-100" : "bg-white"}
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
            >
                {/* Label as a clickable area for file input */}
                <label htmlFor={name} className="cursor-pointer">
                    {file ? (
                        <p className="text-center max-xl:text-2xl">{file.name}</p>
                    ) : (
                        <p className="text-center max-xl:text-2xl">Drag & drop your passport image here, or click to select a file.</p>
                    )}
                </label>
                <input
                    id={name}
                    type="file"
                    name={name}
                    accept={acceptedFileTypes}
                    onChange={handleFileInputChange}
                    className="hidden" // Hide the input, but allow it to be triggered by label
                    disabled={disabled}
                />
            </div>
            {filePreview && (
                <div className="mt-2">
                    <img 
                        src={filePreview} 
                        alt="Preview" 
                        className="mt-2 border rounded-md w-full max-w-xs" 
                    />
                    <button 
                        type="button" 
                        onClick={handleRemoveFile} 
                        className="mt-2 text-red-500 underline"
                    >
                        Remove
                    </button>
                </div>
            )}
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        </div>
    );
};
