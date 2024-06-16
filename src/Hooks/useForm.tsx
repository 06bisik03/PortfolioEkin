import { useState } from "react";

interface InputStates {
  name: string;
  phone: string;
  mail: string;
  mess: string;
}

const useForm = () => {
  const [inputStates, setInputStates] = useState<InputStates>({
    name: "",
    phone: "",
    mail: "",
    mess: "",
  });

  const handleBlur = (field: keyof InputStates) => {
    setInputStates((prevState) => ({
      ...prevState,
      [`${field}Touched`]: true,
    }));
  };

  const handleChange = (field: keyof InputStates, value: string) => {
    setInputStates((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    const phoneRegex = /^[0-9\b]*$/; // Allows only numbers and backspace
    if (phoneRegex.test(value)) {
      setInputStates((prevState) => ({
        ...prevState,
        phone: value,
      }));
    }
  };

  const isFilled = (field: keyof InputStates) => {
    return inputStates[field].length > 0;
  };

  return {
    inputStates,
    handleBlur,
    handleChange,
    handlePhoneChange,
    isFilled,
  };
};

export default useForm;
