import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "/public/list.json";
import Cards from "./Cards.jsx";
import axios from "axios"
const Freebook = () => {
  const filterData = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500, 
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-xl font-semibold pb-2 md:mt-20 mt-10">
            Free offered books
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            repellat fugit fuga ratione, aut provident. Voluptatibus inventore !
            Odit eaque libero nihil accusantium ab accusamus eligendi ea neque.
          </p>
        </div>

        <div>
          <Slider  {...settings}>
            {filterData.map((item, idx) => {
              return <Cards item={item} key={idx} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
