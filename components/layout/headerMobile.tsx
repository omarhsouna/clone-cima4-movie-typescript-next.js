import React, { Fragment, useState } from "react";
import classNames from "classnames";
import CircleIconButton from "../common/button/circleIconButton";
import { MdClose, MdExpandMore } from "react-icons/md";
import { getUpdateArray } from "../../utils";
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
interface Props {
  setOpen: (state: boolean) => void;
}
const HeaderMobile: React.FC<Props> = ({ setOpen }) => {
  const [displaySubItems, setDisplaySubItems] = useState(
    new Array(listItems.length).fill(false)
  );
  const handleDisplaySubItems = (index: number) =>
    setDisplaySubItems((displaySubItems) =>
      getUpdateArray(displaySubItems, index, !displaySubItems[index])
    );
  return (
    <>
      <header className="px-4 bg-primary h-[72px] text-white text-lg flex items-center justify-between">
        <span> تصفح السينما للجميع</span>
        <CircleIconButton handleClick={() => setOpen(false)}>
          {" "}
          <MdClose />
        </CircleIconButton>
      </header>
      <ul className="text-white text-right text-base font-bold relative">
        {listItems.map((item, index) => (
          <Fragment key={item.title}>
            <li
              className={classNames(
                "p-4 border-b border-b-primaryBorder cursor-pointer",
                {
                  " flex items-center justify-between relative": Boolean(
                    item?.subItems?.length
                  ),
                }
              )}
              onClick={() => handleDisplaySubItems(index)}
            >
              <a href="#">{item.title}</a>
              {Boolean(item?.subItems?.length) && (
                <MdExpandMore
                  className={classNames("text-2xl", {
                    "rotate-180": displaySubItems[index],
                  })}
                />
              )}
            </li>
            {Boolean(item?.subItems?.length) && displaySubItems[index] && (
              <li className="w-100% relative before:left-1/2 before:-top-2 before:absolute before:w-0 before:h-0 before:border-x-8 before:border-b-8 before:border-b-primary before:border-x-transparent">
                <ul className="text-white bg-primary rounded-md relative">
                  {item.subItems?.map((subItem) => (
                    <li
                      key={subItem}
                      className="border-b border-b-primaryBorder py-[10px] px-[20px]"
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default HeaderMobile;
