import React, { useState } from 'react';

const FormInput = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameTouched, setFirstNameTouched] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameTouched, setLastNameIsTouched] = useState(false);

  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const firstNameIsValid = firstName.trim() !== '';
  const firstNameIsInvalid = !firstNameIsValid && firstNameTouched;

  const lastNameIsValid = lastName.trim() !== '';
  const lastNameIsInvalid = !lastNameIsValid && lastNameTouched;

  const emailIsValid = email.trim() !== '' && email.includes('@');
  const emailIsInvalid = !emailIsValid && emailTouched;

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const firstNameTouchedHandler = () => {
    setFirstNameTouched(true);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const lastNameBlurHandler = () => {
    setLastNameIsTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (firstNameIsInvalid || lastNameIsInvalid || emailIsInvalid) {
      return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(email);

    setFirstName('');
    setFirstNameTouched(false);

    setLastName('');
    setLastNameIsTouched(false);

    setEmail('');
    setEmailTouched(false);
  };

  const firstNameErrorClasses = firstNameIsInvalid ? 'bg-red-400' : '';
  const lastNameErrorClasses = lastNameIsInvalid ? 'bg-red-400' : '';
  const emailErrorClasses = emailIsInvalid ? 'bg-red-400' : '';

  return (
    <form
      onSubmit={formSubmitHandler}
      className=" bg-cyan-800 rounded-xl p-20 flex flex-col gap-y-4"
    >
      <section className="flex gap-x-4">
        <div>
          <label
            className="text-white text-lg font-semibold block mb-1"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameTouchedHandler}
            type="text"
            id="firstname"
            value={firstName}
            className={`px-2 py-0.5 outline-none rounded-md ${firstNameErrorClasses}`}
          />
          {firstNameIsInvalid && (
            <p className="text-center mt-2 font-bold text-red-500">
              Enter a Valid Name
            </p>
          )}
        </div>
        <div className="">
          <label
            className="text-white text-lg font-semibold block mb-1"
            htmlFor="lastname"
          >
            Last Name
          </label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            type="text"
            id="lastname"
            value={lastName}
            className={`px-2 py-0.5 outline-none rounded-md ${lastNameErrorClasses}`}
          />
          {lastNameIsInvalid && (
            <p className="text-center mt-2 font-bold text-red-500">
              Enter a Valid LastName
            </p>
          )}
        </div>
      </section>
      <section className="flex gap-x-4 mb-6">
        <div className="w-full">
          <label
            className="text-white text-lg font-semibold block mb-1"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            type="text"
            id="email"
            value={email}
            className={`px-2 py-0.5 outline-none rounded-md w-full ${emailErrorClasses}`}
          />
          {emailIsInvalid && (
            <p className="text-center mt-2 font-bold text-red-500">
              Enter a Valid Email
            </p>
          )}
        </div>
      </section>
      <button
        type="submit"
        disabled={firstNameIsInvalid}
        className={`bg-blue-600 disabled ${
          firstNameIsInvalid || lastNameIsInvalid || emailIsInvalid
            ? 'cursor-not-allowed'
            : ''
        } hover:bg-blue-800 rounded-lg p-2 text-white`}
      >
        Submit
      </button>
    </form>
  );
};

export default FormInput;
