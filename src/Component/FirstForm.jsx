import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext';

function FirstForm() {
  const { updateFormData } = useContext(FormDataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <form>
    <h2>enter detailes</h2>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
    </form>
  );
}

export default FirstForm;
