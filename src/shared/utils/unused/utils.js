export const validateForm = (formData) => {
    let errors = {};
  
    // Full Name (required fields: surname, first_name)
    if (!formData.first_name || formData.first_name.trim() === "") {
      errors.first_name = "First Name is required";
    }
    if (!formData.surname || formData.surname.trim() === "") {
      errors.surname = "Surname is required";
    }
  
    // Other name (optional)
  
    // Street Address validation (required)
    if (!formData.street_address || formData.street_address.trim() === "") {
      errors.street_address = "Street Address is required";
    }
  
    // City validation (required)
    if (!formData.city || formData.city.trim() === "") {
      errors.city = "City is required";
    }
  
    // Country validation (required)
    if (!formData.country || formData.country.trim() === "") {
      errors.country = "Country is required";
    }
  
    // Telephone validation (optional but should be a valid phone number if provided)
    const phonePattern = /^[0-9]{10,15}$/;
    if (formData.telephone && !phonePattern.test(formData.telephone)) {
      errors.telephone = "Please enter a valid phone number (10-15 digits)";
    }
  
    // Email validation (required and valid email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email1 || formData.email1.trim() === "") {
      errors.email1 = "Primary Email is required";
    } else if (!emailPattern.test(formData.email1)) {
      errors.email1 = "Please enter a valid email address";
    }
  
    // Secondary email validation (optional but must be a valid email if provided)
    if (formData.email2 && !emailPattern.test(formData.email2)) {
      errors.email2 = "Please enter a valid secondary email address";
    }
  
    // Occupation validation (required)
    if (!formData.occupation || formData.occupation.trim() === "") {
      errors.occupation = "Occupation is required";
    }
  
    // Work Organization validation (required)
    if (!formData.work_organization || formData.work_organization.trim() === "") {
      errors.work_organization = "Work Organization is required";
    }
  
    // Rank validation (required)
    if (!formData.rank || formData.rank.trim() === "") {
      errors.rank = "Rank is required";
    }
  
    // Qualifications validation (optional but encouraged)
    if (formData.qualifications && formData.qualifications.trim().length < 10) {
      errors.qualifications = "Qualifications must be at least 10 characters long";
    }
  
    // Work experience validation (optional but encouraged)
    if (formData.work_experience && formData.work_experience.trim().length < 10) {
      errors.work_experience = "Work experience must be at least 10 characters long";
    }
  
    // Passport photo upload validation (required)
    if (!formData.passport) {
      errors.passport = "Passport photo is required";
    }
  
    // Payment Type validation (required: must be 'offline' or 'online')
    if (!formData.payment_type || (formData.payment_type !== "offline" && formData.payment_type !== "online")) {
      errors.payment_type = "Payment Type is required and must be either 'offline' or 'online'";
    }
  
    // Membership Category validation (required)
    if (!formData.membershipCategory || formData.membershipCategory.trim() === "") {
      errors.membershipCategory = "Membership Category is required";
    }
  
    return errors;
};

export const clearForm = (formData) => {
    formData.surname = "";
    formData.first_name = "";
    formData.other_name = "";
    formData.street_address = "";
    formData.city = "";
    formData.country = "";
    formData.telephone = "";
    formData.email1 = "";
    formData.email2 = "";
    formData.occupation = "";
    formData.work_organization = "";
    formData.rank = "";
    formData.qualifications = "";
    formData.work_experience = "";
    formData.passport = null; 
    formData.payment_type = "Select Payment Type";
    formData.membershipCategory = "Select Membership Category";
};
  