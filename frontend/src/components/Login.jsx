import { useForm } from "react-hook-form"
import React from "react";
import { Link } from "react-router-dom";
const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data) 
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
              <Link to="/" className="btn dark:bg-slate-900 dark:text-white btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            
            <h3 className="dark:bg-slate-900 dark:text-white font-bold text-lg">
              Login!
            </h3>
            <div className="mt-4">
              <p className="font-semibold">Email</p>
              <input {...register("email", { required: true })}
                className="w-80 px-3 py-1 rounded-md outline-none border-2 border-gray-400 mt-3"
                type="email"
                placeholder="enter your email"
              />
              <br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4">
              <p className="font-semibold">Password</p>
              <input {...register("password", { required: true })}
                className="w-80 px-3 py-1 rounded-md outline-none border-2 border-gray-400 mt-3"
                type="password"
                placeholder="enter your password"
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex gap-20 mt-6 px-6">
              <button className="btn btn-success">Login</button>

              <p className="mt-2">
                Not registered?{" "}
                <Link to="/signup" className="text-blue-500 cursor-pointer underline">Signup</Link>
              </p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
