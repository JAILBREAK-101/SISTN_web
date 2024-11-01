import React from "react";

export const FormSuccess = ({ message, successClass = "" }) => (
  <div className={`bg-green-100 text-green-700 p-4 rounded-md ${successClass}`}>
    <p>{message}</p>
  </div>
);
