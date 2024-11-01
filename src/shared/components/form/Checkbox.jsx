import React from "react";

export const Checkbox = ({ id, htmlFor, name, label, checked, onChange, disabled = false, checkboxClass = "" }) => (
  <div className="flex items-center mb-4">
    <input
      id={id || htmlFor}
      name={name}
      type="checkbox"
      className={`form-checkbox h-5 w-10 text-blue-600 ${checkboxClass}`}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    {label && <label htmlFor={htmlFor} className="ml-2 text-gray-700 max-xl:text-2xl max-xl:text-gray-800">{label}</label>}
  </div>
);
