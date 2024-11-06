import React, { useState } from 'react';
import {TextInput} from "../../../../shared/components/form/TextInput";
import {Select} from "../../../../shared/components/form/Select";
import { Checkbox } from "../../../../shared/components/form/Checkbox";
import {RadioInput} from "../../../../shared/components/form/RadioInput";
import {TextArea} from "../../../../shared/components/form/TextArea";
import {Button} from "../../../../shared/components/form/Button";
import { FormValidation } from '../../../../shared/components/form/FormValidationError';
import { validateForm } from '../../../shared/utils/helpers';
import { clearForm } from '../../../shared/utils/helpers';
import { toast } from 'react-toastify';

const MembershipForm = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    membershipType: '',
    additionalInfo: '',
    agreeTerms: false,
    subscriptionType: '',
  });

  const [formError, setFormError] = useState();
  const [formInputErrors, setFormInputErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleTextAreaChange = (e) => {
    const { innerText } = e.target;
    setFormData({
      ...formData.additionalInfo = innerText
    });
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async () => {
    setLoading(true);
        setFormError("");
        try {
            const response = await fetch(`http://localhost:5001/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            if (response.ok) {
                toast.success("Registration successful and email sent!");
                // redirect to Thank You page
                window.location.href = data.redirect;
            } else {
                setFormError(data.message);
                toast.error(formError);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            setFormError("Something went wrong.");
            toast.error(formError);
        } finally {
            setLoading(false);
        }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);

    // If there are errors, set them in the state to display the error messages
    if (Object.keys(validationErrors).length > 0) {
      setFormInputErrors(validationErrors);
      return;
    }

    // Clear the errors and submit the form (if validation passes)
    setFormInputErrors({});

    // Handle success inside the form
    submitForm(formData);

    clearForm(formData)
  };

  return (
    <form onSubmit={handleSubmit} className="mx-40 my-10 flex flex-col justify-center bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg space-y-6 p-8">
      <h2 className="text-4xl text-sistn-dark-blue font-bold mb-6">Membership Registration</h2>

      {/* Full Name */}
      <TextInput
        id="fullName"
        label="Full Name *"
        name="fullName"
        size='large'
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChange}
        inputClass={"w-full p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sistn-green"}
        labelClass={"block text-left text-1xl text-sistn-blue font-semibold mb-2"}
        required
      />
      <FormValidation errorMessage={formInputErrors.fullName}/>

      {/* Email */}
      <TextInput
        id="email"
        label="Email *"
        name="email"
        type="email"
        size='large'
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleInputChange}
        inputClass={"w-full p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sistn-green"}
        labelClass={"block text-left text-1xl text-sistn-blue font-semibold mb-2"}
        required
      />
      <FormValidation errorMessage={formInputErrors.email} />

      {/* Phone */}
      <TextInput
        id="phone"
        label="Phone"
        name="phone"
        type="tel"
        size='large'
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleInputChange}
        inputClass={"w-full p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sistn-green"}
        labelClass={"block text-left text-1xl text-sistn-blue font-semibold mb-2"}
      />
      <FormValidation errorMessage={formInputErrors.phone} />

      {/* Gender */}
      <Select
        id="gender"
        label="Gender *"
        name="gender"
        value={formData.gender}
        onChange={handleSelectChange}
        options={[
          { value: '', label: 'Select Gender' },
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ]}
        required
      />
      <FormValidation errorMessage={formInputErrors.gender} />

      {/* Membership Type */}
      <Select
        id="membershipType"
        label="Membership Type"
        name="membershipType"
        value={formData.membershipType}
        onChange={handleSelectChange}
        options={[
          { value: '', label: 'Select Membership Type' },
          { value: 'student', label: 'Student' },
          { value: 'professional', label: 'Professional' },
          { value: 'corporate', label: 'Corporate' },
        ]}
        required
      />
      <FormValidation errorMessage={formInputErrors.membershipType} />

      {/* Additional Information */}
      <TextArea
        id="additionalInfo"
        label="Additional Information"
        name="additionalInfo"
        placeholder="Any other information you would like to provide"
        value={formData.additionalInfo}
        onChange={handleTextAreaChange}
        textareaClass="w-full p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        labelClass="block text-left text-1xl text-sistn-blue font-semibold mb-2"
      />

      {/* Subscription Type */}
      <div className="mb-4">
        <p className="font-medium">Subscription Type</p>
        <RadioInput
            id="subscriptionType"
            name="subscriptionType"
            selectedOption={formData.subscriptionType}
            onChange={handleInputChange}
            options={[
            { value: 'monthly', label: 'Monthly' },
            { value: 'yearly', label: 'Yearly' }
            ]}
        />
      </div>
      <FormValidation errorMessage={formInputErrors.subscriptionType} />

    {/* Terms and Conditions */}
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
        body="Register"
        loading={loading}
        size='large'
        btnClass={"w-full py-3 px-6 bg-sistn-blue hover:bg-sistn-dark-blue rounded-lg text-2xl font-semibold text-white transition duration-300"}
      />
    </form>
);
}


export default MembershipForm;
