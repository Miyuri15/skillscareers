// components/JobSeekerRegister.js
import React from "react";
import Button from "./Button";
import Link from "next/link";

const JobSeekerRegister = () => (
  <form className="space-y-4 text-blue-900">
    {/* First Name and Last Name in parallel */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <label className="block">
        <input
          type="text"
          className="w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
          placeholder="First Name"
        />
      </label>
      <label className="block">
        <input
          type="text"
          className="w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
          placeholder="Last Name"
        />
      </label>
    </div>

    {/* Remaining form fields */}
    <label className="block">
      <input
        type="email"
        className="w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
        placeholder="Email"
      />
    </label>
    <label className="block">
      <input
        type="text"
        className="w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
        placeholder="Contact Number"
      />
    </label>
    <label className="block">
      <input
        type="password"
        className="w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
        placeholder="Password"
      />
    </label>
    <label className="block">
      <input
        type="password"
        className="w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
        placeholder="Confirm Password"
      />
    </label>
    <Button variant="primary" className="w-full py-3 mt-4">
    <span className="flex items-center justify-center ">

      <Link href="/login">Register </Link>
      <img
                src="/images/arrow-up.png"
                alt="Register"
                className="h-5 w-5 ml-2"
              />
            </span>

    </Button>
  </form>
);

export default JobSeekerRegister;
