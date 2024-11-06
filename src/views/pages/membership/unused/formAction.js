try {
          // Prepare the data for the preview attachment
          const attachmentContent = JSON.stringify(formData, null, 2);

          console.log("Request payload:", formData);

          // Use customFetch
          const data = await customFetch('/auth/register', 'POST', {
            formData
            // attachmentContent
        }, {
            "Content-Type": "application/json" 
        });
            
          // If successful. Notify the user.   
          toast.success('Registration successful and email sent!');
          setTimeout(() => {
              window.location.href = data.redirect;
          }, 4000);
        } catch (error) {
          // Show error message
          toast.error(error.message || 'Something went wrong.');
        } finally {
          setLoading(false);
        }
        setLoading(true);
        try {
            console.log(formData)
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