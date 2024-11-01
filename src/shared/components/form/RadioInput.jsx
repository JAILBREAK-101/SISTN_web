import React from "react";

export const RadioInput = ({ options, name, selectedOption, onChange, radioClass = "" }) => (
  <div>
    {options.map((option) => (
      <label key={option.value} className="inline-flex items-center mr-4">
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={selectedOption === option.value}
          onChange={onChange}
          className={`form-radio text-blue-600 ${radioClass}`}
        />
        <span className="ml-2 text-2xl max-md:text-3xl text-gray-800">{option.label}</span>
      </label>
    ))}
  </div>
);
