import { useEffect, useState } from "react";

const useForm = (initialState: any, fn: any) => {
  const [values, saveValues] = useState(initialState);
  const [submitForm, saveSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      fn();
    } else {
      saveSubmitForm(false);
    }
  }, [submitForm, fn]);

  const handleChange = (e: any) => {
    saveValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    saveSubmitForm(true);
  };
  
  return {
    values,
    handleChange,
    handleSubmit,
    saveSubmitForm
  };
};

export default useForm;
