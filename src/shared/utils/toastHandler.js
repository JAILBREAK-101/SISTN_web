import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define toast configuration
const defaultConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

// Define a custom Toast Handler function
const showToast = (status, message, config = {}) => {
  
    // Combine default configuration with any custom config provided
  const toastConfig = { ...defaultConfig, ...config };

  // Determine toast type based on status
  switch (status) {
    case 'success':
      toast.success(message, toastConfig);
      break;
    case 'error':
      toast.error(message, toastConfig);
      break;
    case 'info':
      toast.info(message, toastConfig);
      break;
    case 'warn':
      toast.warn(message, toastConfig);
      break;
    case 'loading':
      toast.loading(message, { ...toastConfig, autoClose: false });
      break;
    default:
      toast(message, toastConfig);
  }

  // function to remove the toast
  return () => toast.dismiss(toast.toastId);
};

// Custom remove toast helper function
const removeToast = (toastId) => {
  if (toastId) {
    toast.dismiss(toastId);
  }
};

export { showToast, removeToast };
