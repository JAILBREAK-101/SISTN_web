// Validation utility that accepts a schema and formData
export const validateForm = (formData, validationSchema) => {
    let errors = {};
  
    // Iterate over each field in the validation schema
    Object.keys(validationSchema).forEach((field) => {
      const rules = validationSchema[field];
  
      rules.forEach((rule) => {
        // Check for required validation
        if (rule.type === 'required') {
            const value = formData[field];
            if (!value || (typeof value === 'string' && value.trim() === "")) {
                errors[field] = rule.message;
            }
        }
        
        // Check for pattern validation
        if (rule.type === 'pattern' && formData[field]) {
            const value = formData[field];
            const pattern = new RegExp(rule.pattern);
            if (typeof value === 'string' && !pattern.test(value)) {
                errors[field] = rule.message;
            }
        }
        
        // Custom validation
        if (rule.type === 'custom' && formData[field]) {
            const isValid = rule.condition(formData);
            if (!isValid) {
                errors[field] = rule.message;
            }
        }
      });
    });
  
    return errors;
};

// Function to clear the formData based on its fields
export const clearForm = (formData, initialState = {}) => {
    const clearedForm = {};
  
    // Loop through each key in the formData
    Object.keys(formData).forEach((key) => {
      if (key in initialState) {
        // If initial state for the field is provided, reset to it
        clearedForm[key] = initialState[key];
      } else {
        // Otherwise, apply default clearing logic based on data type
        if (typeof formData[key] === 'string') {
          clearedForm[key] = "";
        } else if (typeof formData[key] === 'number') {
          clearedForm[key] = 0;
        } else if (Array.isArray(formData[key])) {
          clearedForm[key] = [];
        } else if (formData[key] instanceof File) {
          clearedForm[key] = null; // Clear file uploads
        } else {
          clearedForm[key] = null; // Default to null for other types
        }
      }
    });
  
    return clearedForm;
};
  
export const createValidationSchema = (fields) => {
  const schema = {};

  Object.keys(fields).forEach((field) => {
    const rules = fields[field].map((rule) => {
      switch (rule.type) {
        case 'required':
          return (value) => value ? null : rule.message;
        case 'pattern':
          return (value) => rule.pattern.test(value) ? null : rule.message;
        case 'custom':
          return (value, formData) => rule.condition(formData) ? null : rule.message;
        default:
          return () => null;
      }
    });

    schema[field] = (value, formData) => {
      for (let validate of rules) {
        const error = validate(value, formData);
        if (error) return error; // return first validation error
      }
      return null;
    };
  });

  return schema;
};

 // Generic handler function for form input changes
 export const handleInputChange = (e) => {
  const { type, name, value, checked, files } = e.target;

  setFormData((prevData) => {
    switch (type) {
      case 'checkbox':
        return { ...prevData, [name]: checked };
      case 'file':
        return { ...prevData, [name]: files[0] }; // Assuming single file input
      case 'radio':
        return { ...prevData, [name]: value };
      default:
        return { ...prevData, [name]: value };
    }
  });
};

// Special handler for custom select inputs like React Select or others
// export const handleCustomSelectChange = (name, selectedOption) => {
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: selectedOption.value,
//   }));
// };

// // Error for the Validation Schema
// const errors = Object.keys(validationSchema).reduce((acc, field) => {
//   const error = validationSchema[field](formData[field], formData);
//   if (error) acc[field] = error;
//   return acc;
// }, {});

//   Custom Validation for a Password Input
//   const validationSchema = {
//     password: [
//       { type: 'required', message: 'Password is required' },
//       { type: 'custom', condition: (formData) => formData.password.length >= 8, message: 'Password must be at least 8 characters long' },
//     ],
//   };
  