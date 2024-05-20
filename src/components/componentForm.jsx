import React from "react";


export default function componentForm() {
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
        <form action="" className="container">
        <div className="pt-5">
          <label htmlFor="" className="text-white ">
            First Name
          </label>
          <br />
          <input
            className="h-9 w-full rounded-md bg-primary-lite placeholder-white"
            type="text"
            placeholder="   Input"
          />
          </div>
          <div className="pt-5">
          <label htmlFor="" className="text-white ">
            Email Address
          </label>
          <br />
          <input
            className="h-9 w-full rounded-md bg-primary-lite placeholder-white"
            type="text"
            placeholder="   Input"
          />
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
          />
          </div>
          <div className="pt-5">
          <label htmlFor="" className="text-white ">
            Phone Number
          </label>
          <br />

          <select className="h-9 w-full rounded-md bg-primary-lite text-white px-3">
            <option className="text-white">Dropdown</option>
          </select>
          </div>
          <div className="py-5">
          <label htmlFor="" className="text-white ">
            Message
          </label>
          <br />
          <textarea
            className="w-full rounded-md bg-primary-lite placeholder-white placeholder"
            type="text"
            placeholder="   Hi! we are LookScout"
          />
          </div>
          <input
              type="checkbox"
            
              className="h-4 w-4 text-primary-lite focus:ring-primary-dark border-gray-300 rounded"
            /><span className="text-white px-1 font-bold ">I agree with Lookscout Privacy ploicy</span>
            <div className="pt-3">
            <button className="bg-primary text-white w-full rounded-md h-12 pt font-bold">
                Submit
            </button>
            </div>
          
        </form>
      </div>
    </div>
  );
}
