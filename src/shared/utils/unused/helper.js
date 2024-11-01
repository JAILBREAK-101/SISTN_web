export const validateForm = (formData) => {
    let errors = {};
  
    // Membership Category validation (required)
    if (!formData.membershipCategory) {
      errors.membershipCategory = "Membership Category is required";
    }
  
    // Personal Details validation
    if (!formData.surname || formData.surname.trim() === "") {
      errors.surname = "Surname is required";
    }
    if (!formData.firstName || formData.firstName.trim() === "") {
      errors.firstName = "First Name is required";
    }
  
    // Address Details validation
    if (!formData.streetAddress || formData.streetAddress.trim() === "") {
      errors.streetAddress = "Street Address is required";
    }
    if (!formData.state || formData.state.trim() === "") {
      errors.state = "State is required";
    }
  
    // Contact Information validation
    if (!formData.telephone || formData.telephone.trim() === "") {
      errors.telephone = "Telephone/GSM/Cell No is required";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email1 || formData.email1.trim() === "") {
      errors.email1 = "Email 1 is required";
    } else if (!emailPattern.test(formData.email1)) {
      errors.email1 = "Please enter a valid email address";
    }
  
    // Passport Upload validation
    if (!formData.passport) {
      errors.passport = "Passport photograph is required";
    }
  
    // Institution validation
    if (!formData.institution || formData.institution.trim() === "") {
      errors.institution = "Institution is required";
    }
    if (formData.institution === 'Other' && (!formData.otherInstitution || formData.otherInstitution.trim() === "")) {
      errors.otherInstitution = "Please specify your institution";
    }
  
    // Work Details validation
    if (!formData.occupation || formData.occupation.trim() === "") {
      errors.occupation = "Occupation is required";
    }
    if (!formData.workOrganization || formData.workOrganization.trim() === "") {
      errors.workOrganization = "Work Organization is required";
    }
    if (!formData.rank || formData.rank.trim() === "") {
      errors.rank = "Rank/Position/Designation is required";
    }
  
    // Educational Qualifications validation
    if (!formData.qualifications || formData.qualifications.trim() === "") {
      errors.qualifications = "Educational Qualifications are required";
    }
  
    // Year of Graduation validation
    if (!formData.graduationYear || formData.graduationYear.trim() === "") {
      errors.graduationYear = "Year of Graduation is required";
    }
  
    // Declaration validation
    if (!formData.declaration) {
      errors.declaration = "You must agree to the declaration";
    }
  
    // Payment Type validation
    if (!formData.paymentType || formData.paymentType.trim() === "") {
      errors.paymentType = "Payment Type is required";
    }
  
    return errors;
  };
  