import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/signup", userInfo) 
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signup Successfully');
          
        }
        window.location.href="Course"
          setTimeout(() => {}, 3000);
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if(err.response){
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex items-center justify-center mt-20 ">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="dark:text-black btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="dark:text-black font-bold text-lg">Signup</h3>
              {/* email */}
              <div className="dark:text-black mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="enter your Fullname"
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="dark:text-black mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* password */}
              <div className="dark:text-black mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="Password"
                  placeholder="enter your password"
                  className="w-80 py-1 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 hover:bg-pink-800 duration-200 text-white rounded-md px-3 py-1">
                  Signup
                </button>
                <p className="dark:text-black text-xl">
                  Have account?{""}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
