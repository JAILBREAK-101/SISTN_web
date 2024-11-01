import React from "react";

export const CurrencyInput = ({
  value,
  onChange,
  placeholder = "0.00",
  currency = "$",
  disabled = false,
  inputClass = ""
}) => (
  <div className="flex items-center border rounded-md px-3 py-2 bg-white">
    <span className="text-gray-500">{currency}</span>
    <input
      type="number"
      className={`ml-2 w-full focus:outline-none ${inputClass}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
);
