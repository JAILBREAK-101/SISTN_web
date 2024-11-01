import React from "react";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="loader">
                <style jsx>{`
                    .loader {
                        border: 8px solid rgba(0, 0, 0, 0.1);
                        border-left-color: #007bff; /* Change this color as needed */
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        animation: spin 1s linear infinite;
                    }

                    @keyframes spin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }
                `}</style>
            </div>
            <p className="mt-4 text-lg text-sistn-dark-blue">Loading events...</p>
        </div>
    );
};

export default Loader;
