import classNames from "classnames";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
interface Item {
  id: number;
  title: string;
}
interface Props {
  list: Item[];
  handleClick: (id?: number) => void;
  selectedList: number[];
}
const FilterDropdown = ({ list, selectedList, handleClick }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="py-3 px-4 h-15 cursor-pointer relative bg-FilterButtonBg rounded-[3px] flex-1  min-w-[200px] text-right"
      onClick={() => setOpen((open) => !open)}
    >
      <span className="text-white text-xl">فئة العرض</span>
      <p className="text-filterButton text-xs">بدون إختيار</p>
      <IoIosArrowDropdown
        className={classNames(
          "absolute left-3 text-filterButton text-[28px] top-1/2 -translate-y-1/2",
          { "rotate-90": open }
        )}
      />
      {open && (
        <ul className="filterButton max-h-[330px] w-full absolute right-0 overflow-auto top-[100%] bg-FilterButtonBg">
          <li
            className="py-[11px] px-4 border border-primaryBorder cursor-pointer flex items-center"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleClick();
            }}
          >
            <span className="rounded-full border-2 block mr-[3px] border-white w-[25px] h-[25px]"></span>
            <span className="text-white">بدون إختيار</span>
          </li>
          {list.map((item) => (
            <li
              key={item.id}
              className="py-[11px] px-4 border border-primaryBorder cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleClick(item.id);
              }}
            >
              <input
                type="checkbox"
                checked={selectedList.includes(item.id)}
                name="radio"
                id={item.id.toString()}
              />
              <label
                className="text-white cursor-pointer"
                htmlFor={item.id.toString()}
              >
                {item.title}
              </label>
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

export default FilterDropdown;
