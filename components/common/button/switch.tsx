import classNames from "classnames";
import React, { useState } from "react";

const Switch = () => {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform -translate-x-8 bg-white";
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <label className="flex flex-col ml-7" htmlFor="">
        <p
          className={classNames("text-xl font-bold text-white", {
            "text-[#bfffca]": !toggle,
          })}
        >
          الوضع العائلي
        </p>
        <p
          className="text-[#9db7a1] relative tooltip cursor-pointer"
          data-tooltip="الوضع العائلي يحجب عنك اي عروض إباحيه من الظهور للإستمتاع بإختيار عرض مناسب بشكل أسهل مع العائلة .."
        >
          {" "}
          ماهو الوضع العائلي ؟
        </p>
      </label>

      <div
        className={classNames(
          "w-[60px] md:h-7  h-6 flex items-center bg-FilterButtonBg rounded-full p-1 cursor-pointer",
          {
            "bg-selectedSwitch": !toggle,
          }
        )}
      >
        {/* Switch */}
        <div
          className={classNames(
            "h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out",
            toggle ? "bg-filterButton" : toggleClass
          )}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
