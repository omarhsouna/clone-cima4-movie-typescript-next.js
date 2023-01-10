import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../common/card";
import classNames from "classnames";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={classNames(
        className,
        "!left-6 !w-[50px] !h-20 !bg-primary !rounded before:hidden !text-white !text-[40px] !flex !items-center !justify-center"
      )}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div
      className={classNames(
        className,
        "!right-5 !z-30 !w-[50px] !h-20 !bg-primary !rounded before:hidden !text-white !text-[40px] !flex !items-center !justify-center"
      )}
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </div>
  );
}
const SliderSection = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="border-t-[14px] border-dashed border-t-[#ffffff14] -mt-4 shadow-slider py-3 bg-primary overflow-hidden">
      <Slider {...settings}>
        <div className="px-2">
          <Card />
        </div>
        <div className="px-2">
          <Card />
        </div>
        <div className="px-2">
          <Card />
        </div>
        <div className="px-2">
          <Card />
        </div>
        <div className="px-2">
          <Card />
        </div>
        <div className="px-2">
          <Card />
        </div>
        <div className="px-2">
          <Card />
        </div>
        <div className="px-2">
          <Card />
        </div>
      </Slider>
    </section>
  );
};

export default SliderSection;
