import { Fragment, useState, useRef, useEffect } from "react";
import { MdSearch, MdMenu, MdFacebook, MdExpandMore } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import classNames from "classnames";
import CircleIconButton from "../common/button/circleIconButton";
import SocialButton from "../common/button/socialButton";
import Drawer from "../drawer";
import HeaderMobile from "./headerMobile";
import ContentSearch from "../contentSearch";
import useOnClickOutside from "../../hooks/useOnClickOutside";
const listItems = [
  { title: "الرئيسية" },
  {
    title: "افلام",
    subItems: ["افلام اجنبي", "سلاسل افلام كاملة", "افلام هندي"],
  },
  {
    title: "مسلسلات",
    subItems: ["افلام اجنبي", "سلاسل افلام كاملة", "افلام هندي"],
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [filter, setFilter] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpenSearch(false));
  useEffect(() => {
    if (openSearch && inputRef?.current) {
      inputRef.current.focus();
    }
  }, [openSearch]);
  return (
    <header className="h-[70px] px-2 flex items-center justify-between bg-primary fixed z-50 w-full">
      <CircleIconButton handleClick={() => setOpen(true)} className="lg:hidden">
        <MdMenu />
      </CircleIconButton>
      <h1 className="text-white font-bold min-w-[240px] mx-3">CImA4U</h1>
      <nav className="md:mx-auto hidden lg:flex flex-1  items-center h-full">
        <ul className="text-white text-right text-base font-bold relative flex items-center h-full">
          {listItems.map((item) => (
            <Fragment key={item.title}>
              <li
                className={classNames(
                  "cursor-pointer px-6 group flex items-center h-full relative",
                  {
                    " flex items-center justify-between": Boolean(
                      item?.subItems?.length
                    ),
                  }
                )}
              >
                <a href="#">{item.title}</a>
                {Boolean(item?.subItems?.length) && (
                  <MdExpandMore className="text-2xl group-hover:rotate-180" />
                )}
                {Boolean(item?.subItems?.length) && (
                  <div className="w-full hidden group-hover:block absolute right-1/2 translate-x-1/2 top-[70px] min-w-[210px]  before:left-1/2 before:-top-2 before:absolute before:w-0 before:h-0 before:border-x-8 before:border-b-8 before:border-b-subMenu before:border-x-transparent z-50">
                    <ul className="text-white bg-subMenu rounded-md relative">
                      {item.subItems?.map((subItem) => (
                        <li
                          key={subItem}
                          className="border-b border-b-primaryBorder py-[10px] px-[20px] last:border-0"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="ripple"></div>
              </li>
            </Fragment>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:flex items-center justify-between w-24 px-1">
        <SocialButton className="!bg-twitter">
          <BsTwitter />
        </SocialButton>
        <SocialButton className="!bg-facebook">
          <MdFacebook />
        </SocialButton>
      </div>
      <form className="relative h-[40px]">
        <input
          ref={inputRef}
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          placeholder="إبحث فى السينما للجميع .."
          className={classNames(
            "absolute left-0 w-[40px] rounded-full h-full bg-transparent outline-none border-none px-5 text-base placeholder:text-primary transition-all duration-150 ease-in-out",
            openSearch && "w-[280px] md:w-[400px] bg-white"
          )}
        />
        <CircleIconButton
          className={classNames(
            "relative",
            openSearch && "bg-white text-primary text-[22px]"
          )}
          handleClick={(e) => {
            e.preventDefault();
            setOpenSearch(true);
          }}
        >
          <MdSearch />
        </CircleIconButton>
      </form>
      <Drawer
        open={open}
        setOpen={setOpen}
        styleContainer="inset-0"
        styleContent="bg-bgDrawer w-[290px] right-0 h-full"
        styleClosedContent="translate-x-full"
      >
        <HeaderMobile setOpen={setOpen} />
      </Drawer>
      <Drawer
        open={openSearch}
        setOpen={setOpenSearch}
        styleContainer="inset-0 top-[70px]"
        styleContent="left-0 h-[95%] px-5 pb-5 bg-white w-[90%] md:w-[680px] overflow-y-auto text-center"
        styleClosedContent="-translate-x-full"
      >
        <ContentSearch filter={filter} />
      </Drawer>
    </header>
  );
};

export default Header;
