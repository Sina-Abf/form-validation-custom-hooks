import React, { useState } from 'react';

const FormInput = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameTouched, setFirstNameTouched] = useState(false);
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const firstNameIsValid = firstName.trim() !== '';
  const firstNameIsInvalid = !firstNameIsValid && firstNameTouched;

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log(firstName);
    console.log(lastName);
    console.log(email);

    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <form
      onSubmit={formSubmitHandler}
      className=" bg-cyan-600 rounded-xl p-20 flex flex-col gap-y-4"
    >
      <section className="flex gap-x-4">
        <div className="">
          <label
            className="text-white text-lg font-semibold block mb-1"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            onChange={firstNameChangeHandler}
            type="text"
            id="firstname"
            value={firstName}
            className="px-2 py-0.5 outline-none rounded-md "
          />
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
            type="text"
            id="lastname"
            value={lastName}
            className="px-2 py-0.5 outline-none rounded-md"
          />
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
            type="text"
            id="email"
            value={email}
            className="w-full px-2 py-0.5 outline-none rounded-md"
          />
        </div>
      </section>
      <button
        type="submit"
        className="bg-blue-800 hover:bg-blue-900 rounded-lg p-2 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default FormInput;
