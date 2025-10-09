import React from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Login from "./Login";


const Signup = () => {
  return (
    <>
      <div>
        <div className="h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-96 relative">
            {/* Cross Button */}
            <Link
              to="/"
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <IoClose size={24} />
            </Link>

            <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>

            <form  className="flex flex-col gap-4">
              <input
                type="fullname"
                placeholder="fullname"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
            <div className="flex items-center justify-between mt-4">
              <button className="btn btn-success">Signup</button>
              <p>
                Have account?{" "}
                <span
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="text-blue-500 underline cursor-pointer"
                >
                  Login
                </span>
              </p>
                <Login />
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
