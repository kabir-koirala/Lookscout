import React, { useState } from "react";

export default function componentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Please enter your name";
    }
    if (!email.trim()) {
      errors.email = "Please enter your email";
    }
    if (!phone.trim()) {
      errors.phone = "Please enter your Phone Number";
    }
    if (!contact.trim()) {
      errors.contact = "Please enter your Contact us";
    }
    if (!message.trim()) {
      errors.message = "Please enter your Contact us";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setTimeout(() => {
        setErrors({});
      }, 2000);
      return;
    }
    console.log("Submitted");
  };
  return (
    <div className="bg-primary-dark h-screen">
      <div className="container">
        <div>
          <h1 className="font-bold text-2xl text-white text-center pt-4 pb-3">
            Get In touch with Us
          </h1>
          <p className="text-white px-5 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="container">
          <div className="pt-5">
            <label htmlFor="" className="text-white ">
              First Name
            </label>

            <br />
            <input
              className="h-9 w-full rounded-md bg-primary-lite placeholder-white"
              type="text"
              placeholder="   Input"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && (
              <div className="alert alert-danger mt-2 text-red-700">
                {errors.name}
              </div>
            )}
          </div>
          <div className="pt-5">
            <label htmlFor="" className="text-white ">
              Email Address
            </label>

            <br />
            <input
              className="h-9 w-full rounded-md bg-primary-lite placeholder-white"
              type="email"
              placeholder="   Input"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="alert alert-danger mt-2 text-red-700">
                {errors.email}
              </div>
            )}
          </div>
          <div className="pt-5">
            <label htmlFor="" className="text-white ">
              Phone Number
            </label>

            <br />
            <input
              className="h-9 w-full rounded-md bg-primary-lite placeholder-white"
              type="text"
              placeholder="   +000"
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <div className="alert alert-danger mt-2 text-red-700">
                {errors.phone}
              </div>
            )}
          </div> 
          <div className="pt-5">
            <label htmlFor="" className="text-white ">
              Contact us
            </label>

            <br />

            <select
              className="h-9 w-full rounded-md bg-primary-lite text-white px-3"
              onChange={(e) => setContact(e.target.value)}
            >
              <option className="text-white">Dropdown</option>
            </select>
          </div>
          {errors.contact && (
            <div className="alert alert-danger mt-2 text-red-700">
              {errors.contact}
            </div>
          )}
          <div className="py-5">
            <label htmlFor="" className="text-white ">
              Message
            </label>
            
            <br />
            <textarea
              className="w-full rounded-md bg-primary-lite placeholder-white placeholder"
              type="text"
              placeholder="   Hi! we are LookScout"
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && (
              <div className="alert alert-danger mt-2 text-red-700">
                {errors.message}
              </div>
            )}
          </div>
          
          <input
            type="checkbox"
            className="h-4 w-4 text-primary-lite focus:ring-primary-dark border-gray-300 rounded"
          />
          <span className="text-white px-1 font-bold ">
            I agree with Lookscout Privacy ploicy
          </span>
          <div className="pt-3">
            <button
              type="submit"
              className="bg-primary text-white w-full rounded-md h-12 pt font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
