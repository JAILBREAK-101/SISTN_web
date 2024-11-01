import React, {useState} from 'react';
import { TextInput } from '../../shared/components/form/TextInput';
import { TextArea } from '../../shared/components/form/TextArea';
import { Button } from '../../shared/components/form/Button';
import ContactInformation from '../../shared/components/ContactInfo';
import { FormValidation } from '../../shared/components/form/FormValidationError';
import { validateForm, clearForm } from '../../shared/utils/formValidation';
import { showToast } from '../../shared/utils/toastHandler';

const validationSchema = {
  name: [{ type: 'required', message: 'Name is required' }],
  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
  ],
  subject: [{ type: 'required', message: 'Subject is required' }],
  message: [], //Optional field
}

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const [formInputErrors, setFormInputErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData(clearForm(formData, initialState));
  };

  const submitForm = async () => {
    setLoading(true);

    try {
      showToast('loading','Submitting your form', 
        {
            autoClose: loading || null
        })
    // ${process.env.API_BASE_URL}
    const response = await fetch(
        window.location.hostname === "localhost"
          ? "http://localhost:5001/api/contact"
          : "https://sistn-backend.onrender.com/contact", {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
        showToast('success', 'Thank you for contacting us!')
        window.location.href = data.redirect;
        handleReset();
    } else {
        showToast('error', data.message);
    }
    } catch (error) {
        showToast('error', 'Something went wrong.');
        } finally {
        setLoading(false);
    }
  }

  // work on this
  const handleSubmit = async (e) => {
    e.preventDefault()

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
    <section className="bg-gradient-to-right from-sistn-green to-green-400 text-gray-100 py-16 px-8 bg-[url('/path-to-your-background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
        {/* Contact Info */}
        <div className="w-full sm:w-full bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
        <ContactInformation />
          
        </div>

        {/* Contact Form */}
        <div className="w-full bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
          <h2 className="text-4xl text-sistn-dark-blue font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <TextInput
                label="Name"
                name="name"
                size='large'
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl text-sistn-dark-blue"}
                inputClass={"text-3xl max-md:text-3xl text-black"}
                required
            />
            <FormValidation errorMessage={formInputErrors.name} />

            <TextInput
                label="Email"
                name="email"
                size='large'
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl text-sistn-dark-blue"}
                inputClass={"text-3xl max-md:text-3xl text-black"}
                required
            />
            <FormValidation errorMessage={formInputErrors.email} />

            <TextInput
                label="Subject"
                name="Subject"
                size='large'
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleInputChange}
                labelClass={"text-3xl max-md:text-3xl text-sistn-dark-blue"}
                inputClass={"text-3xl max-md:text-3xl text-black"}
                required
            />
            <FormValidation errorMessage={formInputErrors.subject} />

            <TextArea
                label="Message"
                name="message"
                size='large'
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                textareaClass="w-full text-3xl max-md:text-3xl text-black p-3 rounded-lg bg-white bg-opacity-70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                labelClass="block text-left text-3xl max-md:text-3xl text-sistn-blue font-semibold mb-2"
            />
            <FormValidation errorMessage={formInputErrors.message} />

            <Button
                type="submit"
                variant="primary"
                body="Send Message"
                loading={false}
                size='large'
                btnClass={"w-full py-3 px-6 bg-sistn-green hover:bg-green-700 rounded-lg font-semibold text-white transition duration-300 max-md:text-3xl"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;