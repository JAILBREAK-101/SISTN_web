import React from "react";

export const Select = ({ id, name, options, value, onChange, disabled = false, selectClass = "" }) => (
  <select
    id={id}
    name={name}
    className={`border rounded-md text-lg py-2 px-3 focus:outline-none ${selectClass}`}
    value={value}
    onChange={onChange}
    disabled={disabled}
  >
    {options.map((option) => (
      <option className="text-lg" key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
