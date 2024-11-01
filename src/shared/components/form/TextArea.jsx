import React from "react";

export const TextArea = ({
  id,
  value,
  label,
  labelClass = "",
  onChange,
  placeholder,
  disabled = false,
  textareaClass = "",
}) => (
  <div>
    <label className={labelClass} htmlFor={id}>
      {label}
    </label>
    <textarea
      id={id}
      className={`border rounded-md p-3 focus:outline-none ${textareaClass} resize-none`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      rows={5}
    />
  </div>
);