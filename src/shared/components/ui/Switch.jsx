import React from "react";

export const Switch = ({ enabled, onChange, switchClass = "" }) => (
  <div
    className={`relative inline-flex items-center h-6 rounded-full w-11 ${switchClass} ${
      enabled ? "bg-blue-600" : "bg-gray-300"
    }`}
    onClick={() => onChange(!enabled)}
  >
    <span
      className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
        enabled ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </div>
);
