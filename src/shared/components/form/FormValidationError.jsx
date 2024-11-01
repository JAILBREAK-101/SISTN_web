import React from "react";

// export const FormValidation = ({ errorMessage, validationClass = "" }) => (
//   <div className={`text-red-500 text-bold ${validationClass}`}>
//     {errorMessage && <p>{errorMessage}</p>}
//   </div>
// );

export const FormValidation = ({ errorMessage }) => {
  return errorMessage ? <div className="text-red-500 max-md:text-2xl">{errorMessage}</div> : null;
};

