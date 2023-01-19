import classNames from "classnames";
import React from "react";
interface Props {
  open: boolean;
  children?: React.ReactNode;
  setOpen: (state: boolean) => void;
  styleContainer?: string;
  styleContent?: string;
  styleClosedContent?: string;
}
const Drawer: React.FC<Props> = ({
  open,
  children,
  setOpen,
  styleContainer = "",
  styleContent = "",
  styleClosedContent = "",
}) => {
  return (
    <main
      className={classNames(
        "fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25  transform ease-in-out",
        styleContainer,
        open
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : `transition-all delay-500 opacity-0 ${styleClosedContent}`
      )}
    >
      <section
        className={classNames(
          `absolute shadow-xl delay-400 duration-500 ease-in-out transition-all transform`,
          styleContent,
          open ? " translate-x-0 " : styleClosedContent
        )}
      >
        {children}
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setOpen(false);
        }}
      ></section>
    </main>
  );
};
export default Drawer;
