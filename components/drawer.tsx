import React from "react";
interface Props {
  open: boolean;
  children?: React.ReactNode;
  setOpen: (state: boolean) => void;
  className?: string;
}
const Drawer: React.FC<Props> = ({
  open,
  children,
  setOpen,
  className = "",
}) => {
  return (
    <main
      className={
        `fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${className}` +
        (open
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "bg-bgDrawer w-[290px] right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (open ? " translate-x-0 " : " translate-x-full ")
        }
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
