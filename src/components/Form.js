import React from 'react';

const Form = () => {
  return (
    <form className=" bg-cyan-600 rounded-xl p-20 flex flex-col gap-y-4">
      <section className="flex gap-x-4">
        <div className="">
          <label
            className="text-white text-lg font-semibold block mb-1"
            htmlFor="firstname"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
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
            type="text"
            id="lastname"
            className="px-2 py-0.5 outline-none rounded-md "
          />
        </div>
      </section>
      <section className="flex gap-x-4 mb-6">
        <div className="">
          <label
            className="text-white text-lg font-semibold block mb-1"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            type="text"
            id="email"
            className="px-2 py-0.5 outline-none rounded-md "
          />
        </div>
      </section>
      <button className="bg-blue-800 hover:bg-blue-900 rounded-lg p-2 text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
