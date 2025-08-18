import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form method="dialog">
              <button className="btn dark:bg-slate-900 dark:text-white btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="dark:bg-slate-900 dark:text-white font-bold text-lg">
              Login!
            </h3>
            <div className="mt-4">
              <p className="font-semibold">Email</p>
              <input
                className="w-80 px-3 py-1 rounded-md outline-none border-2 border-gray-400 mt-3"
                type="email"
                placeholder="enter your email"
              />
            </div>
            <div className="mt-4">
              <p className="font-semibold">Password</p>
              <input
                className="w-80 px-3 py-1 rounded-md outline-none border-2 border-gray-400 mt-3"
                type="password"
                placeholder="enter your password"
              />
            </div>
            <div className="flex gap-20 mt-6 px-6">
              <button className="btn btn-success">Login</button>

              <p className="mt-2">
                Not registered?{" "}
                <Link to="/signup" className="text-blue-500 cursor-pointer underline">Signup</Link>
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
