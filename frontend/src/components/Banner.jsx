import React from "react";
import photo from '/photo.jpg'  

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl mt-12 md:gap-6 md:mt-2 container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              hello, welocome here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              voluptatem corporis doloribus neque placeat rerum delectus illo.
              Quos voluptatem tempore dolor. Culpa veniam eligendi modi et magni
              ex, dicta quod!
            </p>
             <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input className="outline-none border-none"  type="email" placeholder="mail@site.com" required />
            </label>
          </div>
            <button className="mt-6 btn btn-secondary">Secondary</button>
        </div>
        <div className="w-full md:w-1/2">
            <img className="md:w-[80%] md:h-[80%] md:mt-20" src={photo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
