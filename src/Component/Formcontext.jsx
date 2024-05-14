import React, { createContext, useState} from 'react';

export const FormDataContext = createContext();

// Step 2: Create a provider component to share the form data
export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    address: '',
    city: '',
    state: ''
  });

  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
