import React, { useState } from 'react';
import { TextInput } from '../../../../shared/components/form/TextInput';
import { Select } from '../../../../shared/components/form/Select';
import { Checkbox } from '../../../../shared/components/form/Checkbox';
import { TextArea } from '../../../../shared/components/form/TextArea';
import { Button } from '../../../../shared/components/form/Button';
import { FormValidation } from '../../../../shared/components/form/FormValidationError';
import { validateForm, clearForm } from '../../../../shared/utils/unused/helpers';
import { toast } from 'react-toastify';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    otherName: '',
    streetAddress: '',
    city: '',
    country: '',
    postalAddress: '',
    telephone: '',
    email1: '',
    email2: '',
    occupation: '',
    workOrganization: '',
    rankPosition: '',
    membershipCategory: '',
    qualifications: '',
    experience: '',
    agreeTerms: false,
  });

  const [formInputErrors, setFormInputErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
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
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setFormInputErrors(validationErrors);
      return;
    }
    setFormInputErrors({});
    submitForm(formData);
    clearForm(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-40 my-10 flex flex-col justify-center bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg space-y-6 p-8">
      <h2 className="text-4xl text-sistn-dark-blue font-bold mb-6">Membership Application Form</h2>

      {/* Surname */}
      <TextInput
        id="surname"
        label="Surname *"
        name="surname"
        placeholder="Enter your surname"
        value={formData.surname}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.surname} />

      {/* First Name */}
      <TextInput
        id="firstName"
        label="First Name *"
        name="firstName"
        placeholder="Enter your first name"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.firstName} />

      {/* Other Name */}
      <TextInput
        id="otherName"
        label="Other Name"
        name="otherName"
        placeholder="Enter your other name"
        value={formData.otherName}
        onChange={handleInputChange}
      />

      {/* Street Address */}
      <TextArea
        id="streetAddress"
        label="Street Address *"
        name="streetAddress"
        placeholder="Enter your street address"
        value={formData.streetAddress}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.streetAddress} />

      {/* City */}
      <TextInput
        id="city"
        label="City *"
        name="city"
        placeholder="Enter your city"
        value={formData.city}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.city} />

      {/* Country */}
      <TextInput
        id="country"
        label="Country *"
        name="country"
        placeholder="Enter your country"
        value={formData.country}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.country} />

      {/* Telephone */}
      <TextInput
        id="telephone"
        label="Telephone *"
        name="telephone"
        placeholder="Enter your phone number"
        value={formData.telephone}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.telephone} />

      {/* Email 1 */}
      <TextInput
        id="email1"
        label="Email 1 *"
        name="email1"
        type="email"
        placeholder="Enter your primary email"
        value={formData.email1}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.email1} />

      {/* Email 2 */}
      <TextInput
        id="email2"
        label="Email 2"
        name="email2"
        type="email"
        placeholder="Enter your secondary email"
        value={formData.email2}
        onChange={handleInputChange}
      />

      {/* Occupation */}
      <TextInput
        id="occupation"
        label="Occupation *"
        name="occupation"
        placeholder="Enter your occupation"
        value={formData.occupation}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.occupation} />

      {/* Work Organization */}
      <TextInput
        id="workOrganization"
        label="Work Organization *"
        name="workOrganization"
        placeholder="Enter your work organization"
        value={formData.workOrganization}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.workOrganization} />

      {/* Membership Category */}
      <Select
        id="membershipCategory"
        label="Membership Category *"
        name="membershipCategory"
        value={formData.membershipCategory}
        onChange={handleInputChange}
        options={[
          { value: '', label: 'Select Category' },
          { value: 'student', label: 'Student' },
          { value: 'associate', label: 'Associate' },
          { value: 'professional', label: 'Professional' },
          { value: 'fellow', label: 'Fellow' },
        ]}
        required
      />
      <FormValidation errorMessage={formInputErrors.membershipCategory} />

      {/* Agree Terms */}
      <Checkbox
        id="agreeTerms"
        label="I agree to the Terms and Conditions"
        name="agreeTerms"
        checked={formData.agreeTerms}
        onChange={handleInputChange}
        required
      />
      <FormValidation errorMessage={formInputErrors.agreeTerms} />

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        body="Submit Application"
        loading={loading}
        size="large"
        btnClass="w-full py-3 px-6 bg-sistn-blue hover:bg-sistn-dark-blue rounded-lg text-2xl font-semibold text-white transition duration-300"
      />
    </form>
  );
};

export default MembershipForm;
