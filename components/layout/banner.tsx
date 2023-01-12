import React, { useEffect, useState, useRef } from "react";
const animatedText = "السينما للجميع";
const Banner = () => {
  const [count, setCount] = useState(0);
  const counter = useRef(0);
  counter.current = count;
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter.current === animatedText.length) {
        clearInterval(interval);
      } else {
        setCount((count) => count + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#3f255f] to-[#170231] min-h-[250px] flex  items-center justify-center w-full">
      <h1 className="text-3xl font-bold text-white inline-block animatedText h-auto overflow-hidden typewriter animatedText">
        مشاهدة احدث الافلام و المسلسلات على{" "}
        {animatedText.split("").slice(0, count).join("")}
      </h1>
      <div className="pacman mr-8">
        <div className="before"></div>
        <div className="after"></div>
      </div>
    </div>
  );
};

export default Banner;
// <div className="text-3xl text-yellow-400">السينما للجميع</div>
// <h1 className="text-white text-7xl">ImA4U</h1>
// <span className="text-lg text-white ">
//   لمشاهدة احدث الافلام و المسلسلات
// </span>
