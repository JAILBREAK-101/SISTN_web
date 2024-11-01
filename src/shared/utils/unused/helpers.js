export const validateForm = (formData) => {
    let errors = {};

    // Full Name validation (required)
    if (!formData.fullName || formData.fullName.trim() === "") {
      errors.fullName = "Full Name is required";
    }
  
    // Email validation (required and must be a valid email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || formData.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
  
    // Phone validation (optional, but if provided, should follow a valid format)
    const phonePattern = /^[0-9]{10,15}$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
  
    // Gender validation (required)
    if (!formData.gender || formData.gender === "") {
      errors.gender = "Gender is required";
    }
  
    // Membership Type validation (required)
    if (!formData.membershipType || formData.membershipType === "") {
      errors.membershipType = "Membership Type is required";
    }
  
    // Subscription Type (must have a value selected)
    if (!formData.subscriptionType || formData.subscriptionType === "") {
      errors.subscriptionType = "Subscription Type is required";
    }
  
    // Terms and Conditions validation (required)
    if (!formData.agreeTerms) {
      errors.agreeTerms = "You must agree to the Terms and Conditions";
    }
  
    return errors;
};

export const clearForm = (formData) => {
    formData.fullName = "";
    formData.email = "";
    formData.phone = "";
    formData.gender = "Select Gender";
    formData.membershipType = "Select Membership Type";
    formData.additionalInfo = "";
    formData.subscriptionType = "";
    formData.agreeTerms = false;
}
  