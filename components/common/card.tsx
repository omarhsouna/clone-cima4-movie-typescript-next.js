import React from "react";
import { MdPlayArrow } from "react-icons/md";
import { IoIosFilm } from "react-icons/io";
const Card = () => {
  return (
    <div className="flex-1 max-w-[330px]  min-w-[240px] h-[418px] rounded-[10px] border-[3px] border-[#ffffff17] relative overflow-hidden group ">
      <div className="bg-[url('https://cima4uu.quest/wp-content/uploads/075-3580.jpg')] scale-100  group-hover:scale-125 transition-all duration-300 group-hover:transition-all group-hover:duration-500 w-full h-full bg-center bg-no-repeat bg-cover cursor-pointer"></div>
      <div className="bg-cardHover absolute left-0 top-0  group-hover:opacity-80 w-full h-full bg-center bg-no-repeat bg-cover cursor-pointer opacity-0"></div>
      <div className="absolute -top-1 -right-1 bg-numberCard flex flex-col items-center justify-center w-12 px-[10px] pt-2 pb-[10px] rounded-l-lg cursor-pointer">
        <span className="text-[#e2c2e8]">حلقة</span>
        <span className="text-white text-lg font-bold">24</span>
      </div>
      <div className="absolute opacity-0 -translate-y-5 transition-all duration-300 group-hover:transition-all group-hover:duration-500 group-hover:opacity-100 group-hover:translate-y-0 top-0 left-0 z-10 text-white py-4 pl-4 pr-[76px] flex cursor-pointer flex-wrap gap-[5px]">
        <span className="border border-white py-[1px] px-[7px] rounded-sm text-xs h-5 flex items-center justify-center ">
          <MdPlayArrow />
          <span>دراما</span>
        </span>
        <span className="border border-white py-[1px] px-[7px] rounded-sm text-xs h-5 flex items-center justify-center ">
          <MdPlayArrow />
          <span>دراما</span>
        </span>
        <span className="border border-white py-[1px] px-[7px] rounded-sm text-xs h-5 flex items-center justify-center ">
          <MdPlayArrow />
          <span>دراما</span>
        </span>

        <span className="border border-white py-[1px] px-[7px] rounded-sm text-xs h-5 flex items-center justify-center ">
          <MdPlayArrow />
          <span>دراما</span>
        </span>
        <span className="border border-white py-[1px] px-[7px] rounded-sm text-xs h-5 flex items-center justify-center ">
          <MdPlayArrow />
          <span>دراما</span>
        </span>
      </div>
      <button className="absolute rounded-full top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] flex items-center justify-center text-white bg-playButton shadow-playButton text-5xl opacity-0 group-hover:opacity-100">
        <MdPlayArrow />
      </button>
      <footer className="w-full text-center text-white absolute bottom-0 pb-3 bg-footerCard pt-48 cursor-pointer">
        <span className="mb-3 absolute bottom-14 -translate-x-64 transition-all duration-200 ease-linear group-hover:opacity-100 opacity-0 group-hover:left-1/2 group-hover:-translate-x-1/2  text-white  px-2 rounded-sm bg-violet-700 h-[22px] leading-[22px] text-xs font-bold">
          <IoIosFilm className="text-lg align-middle -mt-[1px] inline-block ml-1" />
          مسلسلات تركية
        </span>
        مشاهدة مسلسل يوم الصفر موسم 1 حلقه 2
      </footer>
    </div>
  );
};

export default Card;
