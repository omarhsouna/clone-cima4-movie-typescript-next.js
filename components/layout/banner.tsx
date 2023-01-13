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
    <div className="bg-gradient-to-b from-[#3f255f] to-[#170231] min-h-[250px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute overflow-hidden translate-y-[-220px] wrapperText">
        <div className="text-3xl text-yellow-400 opacity-0 translate-y-[-38px] firstText">
          السينما للجميع
        </div>
        <span className="text-white text-7xl flex">
          <span className="text-[105px] font-bold u">U</span>
          <span className="text-[105px] font-bold text-yellow-400 four">4</span>
          <span className="text-[105px] font-bold a">A</span>
          <span className="text-[105px] font-bold m">M</span>
          <span className="text-[105px] font-bold i">I</span>
        </span>
        <div className="text-lg text-white lastText">
          لمشاهدة احدث الافلام و المسلسلات
        </div>
      </div>
      <h1 className="text-3xl font-bold text-white animatedText typewriter animatedText">
        مشاهدة احدث الافلام و المسلسلات على{" "}
        {animatedText.split("").slice(0, count).join("")}
      </h1>
      <div className="pacman">
        <div className="before"></div>
        <div className="after"></div>
      </div>
    </div>
  );
};

export default Banner;
