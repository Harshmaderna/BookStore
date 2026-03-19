import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  
  const [showPassword, setShowPassword] = useState(false);
  
  // 🔥 Login submit
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/user/login", data);

      // Example: token save
      // localStorage.setItem("token", res.data.token);

      reset();
      document.getElementById("my_modal_3").close();
      alert("Login Successful ✅");
    } catch (error) {
      console.error("Login Error ❌", error.response?.data || error.message);
      alert(error.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box dark:bg-slate-900 dark:text-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close */}
          <button
            type="button"
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="font-bold text-xl mb-4">Login</h3>

          {/* Email */}
          <div className="mb-4">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md outline-none border mt-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-md outline-none border mt-2 pr-10"
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
              className="absolute right-3 top-10 cursor-pointer text-gray-600"
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>

            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-success"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="text-sm">
              Not registered?{" "}
              <Link to="/signup" className="text-blue-500 underline">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
