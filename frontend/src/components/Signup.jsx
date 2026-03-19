import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import Login from "./Login";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  // 🔥 Submit Handler
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/user/signup", data);
      reset();
      alert("Signup Successful ✅");
    } catch (error) {
      console.error("Signup Error ❌", error.response?.data || error.message);
      alert("Signup Failed ❌");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96 relative">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <IoClose size={26} />
        </Link>

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          SignUp
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border text-gray-800 placeholder-gray-500 rounded-xl p-3"
              {...register("fullname", {
                required: "Full name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border text-gray-800 placeholder-gray-500 rounded-xl p-3"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border text-gray-800 placeholder-gray-500 rounded-xl p-3 pr-10"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl font-semibold transition"
          >
            {isSubmitting ? "Signing Up..." : "Signup"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-700 text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="text-purple-600 font-semibold underline cursor-pointer"
          >
            Login
          </span>
        </p>

        <Login />
      </div>
    </div>
  );
};

export default Signup;
