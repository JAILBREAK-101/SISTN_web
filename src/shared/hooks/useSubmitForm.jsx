import { useState } from 'react';
import customFetch from '../utils/api';

const useSubmitForm = () => {
  const [loading, setLoading] = useState(false);

  const submitForm = async (formData) => {
    setLoading(true);
    try {
      const attachmentContent = JSON.stringify(formData, null, 2);
      const data = await customFetch('/auth/register', 'POST', {
        formData,
        attachmentContent
      });
      toast.success('Registration successful and email sent!');
      setTimeout(() => {
        window.location.href = data.redirect;
      }, 4000);
    } catch (error) {
      toast.error(error.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading };
};
