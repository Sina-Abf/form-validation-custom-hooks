import { useState } from 'react';

const useForm = (validation) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const valueisValid = validation(enteredValue);
  const valueIsInvalid = !valueisValid && enteredValueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setEnteredValueTouched(false);
  };

  return {
    value: enteredValue,
    enteredValueTouched,
    valueisValid,
    valueIsInvalid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useForm;
