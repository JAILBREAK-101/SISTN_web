import React from "react";

export const Modal = ({ isOpen, onClose, children, modalClass = "" }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75 ${modalClass}`}>
      <div className="bg-white p-6 rounded-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
