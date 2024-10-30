
import React from "react";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side with Image and Intro Text */}
      <div
        className="relative hidden md:flex md:w-3/5 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/loginscrn.jpg')" }}
      >
        {/* Menu Icon */}
        <div className="absolute top-9 left-9 bg-white p-7 m-8 rounded cursor-pointer shadow-md">
          <div className="w-4 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-3 h-0.5 bg-gray-800"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start justify-end p-10 bg-black bg-opacity-30 text-white h-full w-full ">
          <h1 className="text-3xl font-bold mb-2 ">Login</h1>
          <h2 className="text-5xl font-bold mb-4 ">SKILLS CAREERS</h2>
          <p className="text-md leading-relaxed mb-10 ">
            Welcome to Skill Careers, where finding your dream job or the right
            talent is just a click away.
          </p>
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="flex flex-col justify-center md:w-2/5 p-8">
        <div className="flex flex-col items-center mb-4">
          <img src="/images/logo.png" alt="Logo" className="w-30 mb-4" />
          <h2 className="text-2xl text-blue-900 font-semibold text-center mb-2 ">
            Welcome Back! Let's Get You Started.
          </h2>
          <p className="text-blue-900 text-center text-m mt-4 mb-4 ">
            Log in to access your account and continue your career journey or
            recruitment process.
          </p>
        </div>

        <form className="space-y-4 text-blue-900">
          <label className="block">
            <input
              type="email"
              className="w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
              placeholder="Email"
            />
          </label>

          <label className="block">
            <input
              type="password"
              className="w-full p-3 border rounded-lg mt-1 outline-none focus:ring-2 focus:ring-blue-500 placeholder-blue-900 font-semibold"
              placeholder="Password"
            />
          </label>

          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-blue-900 underline mb-4">
              Forgot Password
            </a>
          </div>

          <Button variant="primary">
            <span className="flex items-center justify-center ">
              Login
              <img
                src="/images/login-icon.png"
                alt="Login"
                className="h-5 w-5 ml-2"
              />
            </span>
          </Button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <span className="border-t border-gray-500 md:w-full lg:w-full"></span>
        </div>
        <div className="justify-items-center">
          <p className="mt-5 mb-5 text-black text-lg font-bold">
            Continue with Google or LinkedIn.
          </p>
        </div>
        <div className="space-y-2 mt-4">
          <div className="mb-6">
            <Button variant="primary">
              <span className="flex items-center justify-center ">
                <img
                  src="/images/google-icon.png"
                  alt="Google"
                  className="h-5 w-5 mr-2"
                />
                Sign in with Google
              </span>
            </Button>
          </div>

          <div className="mt-5">
            <Button variant="primary">
              <span className="flex items-center justify-center">
                <img
                  src="/images/linkedin-icon.png"
                  alt="LinkedIn"
                  className="h-5 w-5 mr-2"
                />
                Sign in with LinkedIn
              </span>
            </Button>
          </div>
        </div>

        <p className="text-sm text-center mt-6 text-black ">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-500 ">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
