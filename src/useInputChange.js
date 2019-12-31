import { useState } from "react";

export const useInputChange = () => {
  const [input, setInput] = useState({});

  const handleInputChange = e => {
    e.preventDefault();
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  console.log(input);

  return [input, handleInputChange];
};
