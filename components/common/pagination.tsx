import classNames from "classnames";
import React, { useState } from "react";
interface PropsButton {
  isButton?: boolean;
  text: string;
  handleClick?: () => void;
}
const CircleButton = ({ isButton = false, handleClick, text }: PropsButton) => (
  <button
    disabled={!isButton}
    className={classNames(
      " h-[60px] outline-none px-6 border-none rounded-full grid items-center  text-center text-white font-bold text-2xl shadow-buttonPagination",
      isButton
        ? "bg-[#563571] hover:bg-[#6d498a] cursor-pointer"
        : " bg-[#8c2263] cursor-default"
    )}
    onClick={handleClick}
  >
    {text}
  </button>
);

const Pagination = () => {
  const pages = 3000;
  const [selectedPage, setSelectedPage] = useState(3000);
  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-[14px]">
      {selectedPage !== 1 && (
        <CircleButton
          isButton
          text="«"
          handleClick={() =>
            setSelectedPage((selectedPage) => selectedPage - 1)
          }
        />
      )}
      <CircleButton
        isButton={selectedPage !== 1}
        text="1"
        handleClick={() => setSelectedPage(1)}
      />
      <CircleButton isButton text="2" />
      <CircleButton isButton text="3" />
      <CircleButton isButton text="4" />
      <CircleButton text="..." />
      <CircleButton
        isButton={pages !== selectedPage}
        text={pages.toString()}
        handleClick={() => setSelectedPage(pages)}
      />
      {selectedPage !== pages && (
        <CircleButton
          isButton
          text="»"
          handleClick={() =>
            setSelectedPage((selectedPage) => selectedPage + 1)
          }
        />
      )}
    </section>
  );
};

export default Pagination;
