import React, { useState } from 'react';
import { TextInput } from '../../../../shared/components/form/TextInput';
import { Select } from '../../../../shared/components/form/Select';
import { Checkbox } from '../../../../shared/components/form/Checkbox';
import { TextArea } from '../../../../shared/components/form/TextArea';
import { Button } from '../../../../shared/components/form/Button';
import { FormValidation } from '../../../../shared/components/form/FormValidationError';
import { validateForm, clearForm } from '../../../../shared/utils/formValidation';
// import { validateForm, clearForm } from '../../../shared/utils/helpers';
import { toast } from 'react-toastify';

// Form validation schema with Error Messages
const validationSchema = {
    surname: [
      { type: 'required', message: 'Surname is required' },
    ],
    firstName: [
      { type: 'required', message: 'First Name is required' },
    ],
    membershipCategory: [
      { type: 'required', message: 'Membership Category is required' },
    ],
    email1: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
    ],
    passport: [
      { type: 'required', message: 'Passport photograph is required' },
    ],
    institution: [
      { type: 'required', message: 'Institution is required' },
      { type: 'custom', condition: (formData) => formData.institution !== 'Other' || (formData.otherInstitution && formData.otherInstitution.trim() !== ""), message: 'Please specify your institution' },
    ],
};  
  
const MembershipForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    otherName: '',
    streetAddress: '',
    state: '',
    telephone: '',
    email1: '',
    email2: '',
    passport: null,
    institution: '',
    otherInstitution: '',
    occupation: '',
    workOrganization: '',
    rank: '',
    qualifications: '',
    graduationYear: '',
    declaration: false,
    paymentType: 'offline',
    membershipCategory: '',
  });

//   const initialState = {
//     payment_type: "Select Payment Type",
//     membershipCategory: "Select Membership Category",
//   };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, passport: e.target.files[0] });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleInstitutionChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, institution: value });
  };

  const handleReset = () => {
    const clearedForm = clearForm(formData, initialState);
    setFormData(clearedForm);
  };

  const submitForm = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5001/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Registration successful and email sent!');
        window.location.href = data.redirect;
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData, validationSchema);
    if (Object.keys(validationErrors).length > 0) {
      setFormInputErrors(validationErrors);
      return;
    }
    setFormInputErrors({});
    submitForm(formData);
    clearForm(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Membership Category */}
      <div className="form-group">
        <label>Membership Category Sought:</label>
        <Checkbox
          label="Student"
          name="membershipCategory"
          value="Student"
          checked={formData.membershipCategory === 'Student'}
          onChange={handleInputChange}
        />
        <Checkbox
          label="Associate"
          name="membershipCategory"
          value="Associate"
          checked={formData.membershipCategory === 'Associate'}
          onChange={handleInputChange}
        />
        <Checkbox
          label="Professional"
          name="membershipCategory"
          value="Professional"
          checked={formData.membershipCategory === 'Professional'}
          onChange={handleInputChange}
        />
        <Checkbox
          label="Fellow"
          name="membershipCategory"
          value="Fellow"
          checked={formData.membershipCategory === 'Fellow'}
          onChange={handleInputChange}
        />
         <FormValidation errorMessage={formInputErrors.membershipCategory} />
      </div>

      {/* Personal Details */}
      <TextInput
        label="Surname (Print in Block Letters):"
        name="surname"
        value={formData.surname}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.surname} />

      <TextInput
        label="First Name:"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
     <FormValidation errorMessage={formInputErrors.firstName} />

      <TextInput
        label="Other Name:"
        name="otherName"
        value={formData.otherName}
        onChange={handleInputChange}
      />

      {/* Address Details */}
      <TextInput
        label="Street Address:"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.streetAddress} />

      <Select
        label="State:"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        options={[
          { value: '', label: 'Select State' },
          { value: 'Abia', label: 'Abia' },
          { value: 'Lagos', label: 'Lagos' },
          { value: 'Oyo', label: 'Oyo' },
        ]}
        required
      />
      <FormValidation errorMessage={formInputErrors.state} />

      {/* Contact Information */}
      <TextInput
        label="Telephone/GSM/Cell No:"
        name="telephone"
        value={formData.telephone}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.telephone} />

      <TextInput
        label="Email 1:"
        name="email1"
        type="email"
        value={formData.email1}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.email1} />
      <TextInput
        label="Email 2:"
        name="email2"
        type="email"
        value={formData.email2}
        onChange={handleInputChange}
      />

      {/* Passport Upload */}
      <div className="form-group">
        <label htmlFor="passport">Upload Passport Photograph (JPEG format only):</label>
        <input
          type="file"
          id="passport"
          name="passport"
          accept=".jpeg,.jpg"
          onChange={handleFileChange}
          className="form-control w-50"
          required
        />
        <FormValidation errorMessage={formInputErrors.passport} />
      </div>

      {/* Institution Attended */}
      <Select
        label="Institution Attended:"
        name="institution"
        value={formData.institution}
        onChange={handleInstitutionChange}
        options={[
          { value: '', label: 'Select Institution' },
          { value: 'University of Lagos', label: 'University of Lagos' },
          { value: 'University of Ibadan', label: 'University of Ibadan' },
          { value: 'Other', label: 'Other' },
        ]}
        required
      />
      <FormValidation errorMessage={formInputErrors.institution} />

      {formData.institution === 'Other' && (
        <TextInput
          label="Please specify if other:"
          name="otherInstitution"
          value={formData.otherInstitution}
          onChange={handleInputChange}
        />
      )}
      <FormValidation errorMessage={formInputErrors.otherInstitution} />

      {/* Occupation and Work Details */}
      <TextInput
        label="Occupation:"
        name="occupation"
        value={formData.occupation}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.occupation} />

      <TextInput
        label="Work Organization/Address:"
        name="workOrganization"
        value={formData.workOrganization}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.workOrganization} />

      <TextInput
        label="Rank/Position/Designation:"
        name="rank"
        value={formData.rank}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.rank} />

      {/* Educational Qualifications */}
      <TextArea
        label="Educational Qualifications:"
        name="qualifications"
        value={formData.qualifications}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.qualifications} />

      {/* Year of Graduation */}
      <Select
        label="Year of Graduation:"
        name="graduationYear"
        value={formData.graduationYear}
        onChange={handleInputChange}
        options={Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => ({
          value: `${1980 + i}`,
          label: `${1980 + i}`,
        }))}
        required
      />
      <FormValidation errorMessage={formInputErrors.graduationYear} />

      {/* Declaration */}
      <Checkbox
        label="I hereby apply for admission to membership of the Society for Information Science and Technology of Nigeria (SISTN). I pledge to abide by the rules, ethics and code of conduct of the society."
        name="declaration"
        checked={formData.declaration}
        onChange={handleCheckboxChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.declaration} />

      {/* Payment Type */}
      <Select
        label="Payment Type:"
        name="paymentType"
        value={formData.paymentType}
        onChange={handleInputChange}
        options={[
          { value: 'offline', label: 'Offline Payment' },
          { value: 'online', label: 'Online Payment' },
        ]}
        required
      />
      <FormValidation errorMessage={formInputErrors.paymentType} />

      {/* Action Buttons */}
      <div className="form-group">
        <Button type="button" label="Print" onClick={() => window.print()} />
        <Button type="button" label="Preview" onClick={() => console.log(formData)} />
        <Button type="submit" label="Submit" className="btn-primary" />
      </div>
    </form>
  );
};

export default MembershipForm;
