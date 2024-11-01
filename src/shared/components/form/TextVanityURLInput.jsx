import React from "react";

export const TextVanityURL = ({
  value,
  baseURL = "https://example.com/",
  onChange,
  placeholder = "vanity-url",
  disabled = false,
  inputClass = ""
}) => (
  <div className="flex items-center">
    <span className="text-gray-500">{baseURL}</span>
    <input
      type="text"
      className={`ml-2 border rounded-md py-2 px-3 focus:outline-none ${inputClass}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
);
