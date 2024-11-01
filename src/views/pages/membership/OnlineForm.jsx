import React, { useState, useRef } from 'react';
import { TextInput } from '../../../shared/components/form/TextInput';
import { TelephoneInput } from '../../../shared/components/form/TelephoneInput';
import { Select } from '../../../shared/components/form/Select';
import { Checkbox } from '../../../shared/components/form/Checkbox';
import { RadioInput } from '../../../shared/components/form/RadioInput';
import { PassportUpload } from '../../../shared/components/form/PassportUpload';
import { Button } from '../../../shared/components/form/Button';
import { FormValidation } from '../../../shared/components/form/FormValidationError';
import { validateForm, clearForm } from '../../../shared/utils/formValidation';
import states from '../../../shared/utils/states';
import { showToast, removeToast } from '../../../shared/utils/toastHandler';
import CustomDialog from '../../../shared/components/ui/Dialog';

// Form validation schema with Error Messages
const validationSchema = {
    surname: [{ type: 'required', message: 'Surname is required' }],
    firstName: [{ type: 'required', message: 'First Name is required' }],
    otherName: [], // Optional field, no validation required
    streetAddress: [{ type: 'required', message: 'Street Address is required' }],
    state: [{ type: 'required', message: 'State is required' }],
    telephone: [
        { type: 'required', message: 'Telephone/GSM/Cell No is required' },
        { type: 'pattern', pattern: /^\d{10}$/, message: 'Please enter a valid 10-digit telephone number' }, // Adjust pattern as needed
    ],
    email1: [
        { type: 'required', message: 'Email 1 is required' },
        { type: 'pattern', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
    ],
    email2: [
        { type: 'pattern', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
    ],
    passport: [{ type: 'required', message: 'Passport photograph is required' }],
    institution: [
        { type: 'required', message: 'Institution is required' },
        { type: 'custom', condition: (formData) => formData.institution !== 'Other' || (formData.otherInstitution && formData.otherInstitution.trim() !== ""), message: 'Please specify your institution' },
    ],
    occupation: [{ type: 'required', message: 'Occupation is required' }],
    workOrganization: [{ type: 'required', message: 'Work Organization/Address is required' }],
    rank: [{ type: 'required', message: 'Rank/Position/Designation is required' }],
    qualifications: [], // Optional field, no validation required
    graduationYear: [
        { type: 'required', message: 'Graduation Year is required' },
        { type: 'pattern', pattern: /^\d{4}$/, message: 'Please enter a valid year (YYYY)' }, // Adjust pattern as needed
    ],
    declaration: [{ type: 'required', message: 'You must declare that the information is true' }],
    paymentType: [{ type: 'required', message: 'Payment type is required' }],
    membershipCategory: [{ type: 'required', message: 'Membership Category is required' }],
};

const initialState = {
    surname: '',
    firstName: '',
    otherName: '',
    streetAddress: '',
    state: '',
    telephone: '',
    countryCode: '+234', // Nigeria by default
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
};

// const baseUrl = process.env.NODE_ENV === "development" 
//   ? "http://localhost:5001/api/auth/register" 
//   : "https://sistn-backend.onrender.com/auth/register";

// const response = await fetch(baseUrl);


const OnlineForm = () => {
    const [formData, setFormData] = useState(initialState);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [formInputErrors, setFormInputErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const handlePrint = () => {
        const printContent = formRef.current.innerHTML; 
        const originalContent = document.body.innerHTML;
    
        document.body.innerHTML = printContent;
        window.print();
    
        document.body.innerHTML = originalContent;
        window.location.reload();
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Show dialog if "online" payment is selected
        if (name === 'paymentType' && value === 'online') {
            setDialogMessage('Online payment not available for now, kindly select offline payment.');
            setDialogOpen(true);
        }
    };

    const membershipOptions = [
        { label: "Student", value: "Student" },
        { label: "Associate", value: "Associate" },
        { label: "Professional", value: "Professional" },
        { label: "Fellow", value: "Fellow" },
    ];

    // Handle file input from the PassportUpload component
    const handleFileChange = (file) => {
        setFormData((prevData) => ({
            ...prevData,
            passport: file,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { checked, name } = e.target;
        setFormData({ ...formData, [name]: checked});
    };

    const handleCountryCodeChange = (selected) => {
        setFormData((prevState) => ({
            ...prevState,
            countryCode: selected.value,
        }));
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setFormData({
        ...formData,
        membershipCategory: value,
        });
    };

    const handleInstitutionChange = (e) => {
        const { value } = e.target;
        setFormData({ ...formData, institution: value });
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
      };

    const handleReset = () => {
        setFormData(clearForm(formData, initialState));
    };

    const submitForm = async () => {
        setLoading(true);

        // console.log(formData)

        // const toastId = showToast('loading', 'Submitting your form', {
        //     autoClose: !loading || null
        //   });

        // Turn this into the custom API Fetch function
        try {
                const response = await fetch(
                "localhost:8000/api/register", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log(data)
                showToast('success', 'Registration successful and email sent!');
                // removeToast(toastId); // Remove the loading toast
                window.location.href = data.redirect;
                handleReset();
            } else {
                const newToastId = showToast('error', data.message);
                removeToast(newToastId) // Remove the loading toast in case of error
                // removeToast(toastId) // Remove the loading toast in case of error
            } 
        } catch (error) {
            showToast('error', "Something went wrong. Please try again.");
            console.log(error)
            } finally {
            setLoading(false);
            // removeToast(toastId); // Remove the loading toast in case of error
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show dialog on form submit if online payment is selected
        if (formData.paymentType === 'online') {
            setDialogMessage('Online payment is not available at the moment. Please choose offline payment.');
            setDialogOpen(true);
            return;
        }

        const validationErrors = validateForm(formData, validationSchema);
        if (Object.keys(validationErrors).length > 0) {
            setFormInputErrors(validationErrors);
            return;
        }
        setFormInputErrors({});
        await submitForm(); 
        // handleReset();
    };

    return (
    <div className="flex items-center justify-center">
        <form ref={formRef} onSubmit={handleSubmit} className='mx-40 max-xl:mx-10 my-10 flex flex-col justify-center bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg space-y-6 p-8'>
            
            <h2 className="text-4xl max-xl:text-5xl text-sistn-dark-blue font-bold mb-6">Membership Online Form</h2>
            
            {/* Membership Category */}
            <div className="form-group">
                <label className='text-2xl max-xl:text-3xl'>Membership Category Sought:</label>
                <RadioInput
                    options={membershipOptions}
                    name="membershipCategory"
                    selectedOption={formData.membershipCategory}
                    onChange={handleRadioChange}
                />
                <FormValidation errorMessage={formInputErrors.membershipCategory} />
            </div>

            {/* Personal Details */}
            <TextInput
                label="Surname (Print in Block Letters):"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
                required
            />
            <FormValidation errorMessage={formInputErrors.surname} />

            <TextInput
                label="First Name:"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
                required
            />
            <FormValidation errorMessage={formInputErrors.firstName} />

            <TextInput
                label="Other Name (Optional):"
                name="otherName"
                value={formData.otherName}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
            />

            {/* Address Details */}
            <TextInput
                label="Street Address:"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
                required
            />
            <FormValidation errorMessage={formInputErrors.streetAddress} />

            <Select
                label="State:"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                options={states.map((state) => ({
                    value: state.value,
                    label: state.label,
                }))}
                selectClass='text-3xl max-md:text-3xl'
                required
            />
            <FormValidation errorMessage={formInputErrors.state} />

            {/* Contact Information */}
            <TelephoneInput
                label="Telephone: "
                name="telephone"
                value={formData.telephone}
                placeholder="0123456788"
                onChange={handleInputChange}
                inputClass={"text-3xl max-md:text-3xl"}
                labelClass={"text-3xl max-md:text-3xl"}
                countryCode={formData.countryCode}
                onCountryCodeChange={handleCountryCodeChange}
            />
            <FormValidation errorMessage={formInputErrors.telephone} />

            <TextInput
                label="Email 1:"
                name="email1"
                type="email"
                value={formData.email1}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
                required
            />
            <FormValidation errorMessage={formInputErrors.email1} />

            <TextInput
                label="Email 2:"
                name="email2"
                type="email"
                value={formData.email2}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
            />

            {/* Passport Upload */}
            <div className="form-group">
                <PassportUpload
                    label="Upload Passport Photograph:"
                    name="passport"
                    onChange={handleFileChange}
                    containerClass="my-4"
                    labelClass={"text-3xl max-md:text-3xl"}
                    inputClass={"text-3xl max-md:text-3xl"}
                />
                <FormValidation errorMessage={formInputErrors.passport} />
            </div>

            {/* Institution Attended */}
            <Select
                label="Institution Attended:"
                name="institution"
                value={formData.institution}
                onChange={handleInstitutionChange}
                selectClass='text-3xl max-md:text-3xl'
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
                    labelClass={"text-3xl max-md:text-3xl"}
                    inputClass={"text-3xl max-md:text-3xl"}
                />
            )}
            <FormValidation errorMessage={formInputErrors.otherInstitution} />

            {/* Occupation and Work Details */}
            <TextInput
                label="Occupation:"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
                required
            />
            <FormValidation errorMessage={formInputErrors.occupation} />

            <TextInput
                label="Work Organization/Address:"
                name="workOrganization"
                value={formData.workOrganization}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
                required
            />
            <FormValidation errorMessage={formInputErrors.workOrganization} />

            <TextInput
                label="Rank/Position/Designation:"
                name="rank"
                value={formData.rank}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
                required
            />
            <FormValidation errorMessage={formInputErrors.rank} />

            <TextInput
                label="Qualifications (Optional):"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
            />

            <TextInput
                label="Graduation Year:"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl"}
                inputClass={"text-3xl max-md:text-3xl"}
                required
            />
            <FormValidation errorMessage={formInputErrors.graduationYear} />

            {/* Declaration */}
            <div className="form-group">
                <Checkbox
                    htmlFor={"declaration"}
                    label="I declare that the information provided is true and accurate to the best of my knowledge."
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleCheckboxChange}
                    required
                />
                <FormValidation errorMessage={formInputErrors.declaration} />
            </div>

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
            <div className="flex gap-2 items-center">
                <Button size='large' btnClass={"text-3xl max-md:text-3xl w-full bg-sistn-dark-blue"} type="button" body="Print" onClick={handlePrint} />
                <Button size='large' btnClass={"text-3xl max-md:text-3xl w-full bg-sistn-green hover:bg-green-500"} type="submit" loading={loading} 
                    body={loading ? 'Submitting...' : 'Submit'}  
                    />
            </div>
        </form>

        {/* Custom Dialog */}
        <CustomDialog
        open={dialogOpen}
        title="Notice"
        message={dialogMessage}
        onClose={handleDialogClose}
        />
    </div>
    );
};

export default OnlineForm;
