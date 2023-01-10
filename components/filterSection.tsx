import React from "react";
import { CinemaNews, Filter, PropertyFilter } from "../types";
import Switch from "./common/button/switch";
import FilterDropdown from "./common/filterDropdown";
import { IoIosPodium } from "react-icons/io";
import classNames from "classnames";
const types = [
  { id: 1, title: "اخرى" },
  { id: 2, title: "افلام" },
  { id: 3, title: "افلام اسيوية" },
  { id: 4, title: "افلام تركية" },
  { id: 5, title: "افلام نتفلكس" },
  { id: 6, title: "افلام هندي" },
];
interface Props {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  filter: Filter;
}
interface PropsButton {
  filter: Filter;
  cinemaNews: CinemaNews;
  children: React.ReactNode;
  handleClick: () => void;
}
const Button = ({ filter, cinemaNews, children, handleClick }: PropsButton) => (
  <button
    className={classNames(
      " flex items-center flex-1 cursor-pointer px-2 rounded-lg  w-40 min-w-[150px] h-[40px]  text-base font-bold",
      filter.cinemaNews === cinemaNews
        ? " bg-[#2a1e3e] text-white"
        : "text-[#b1b7ea] bg-transparent"
    )}
    onClick={handleClick}
  >
    {children}
  </button>
);

const FilterSection = ({ setFilter, filter }: Props) => {
  const handleFilter = (type: PropertyFilter) => (id?: number) =>
    id
      ? setFilter((filter) => ({
          ...filter,
          [type]: filter[type].includes(id)
            ? filter[type].filter((item) => item !== id)
            : [...filter[type], id],
        }))
      : setFilter((filter) => ({ ...filter, [type]: [] }));
  return (
    <>
      <section className="px-5 bg-[#1d1b3e] py-1 flex items-center sm:items-start gap-1 flex-col sm:flex-row">
        <div>
          <FilterDropdown
            list={types}
            handleClick={handleFilter("type")}
            selectedList={filter["type"]}
          />
        </div>
        <div className="self-center flex items-center justify-center ml-auto h-full mr-2">
          <p className="text-xl text-[#7988e4] font-bold flex-1">
            تصفية متقدمة
          </p>
          {filter.familyStatus && (
            <p
              className="text-white cursor-pointer hidden lg:block px-2 rounded-sm bg-violet-700 h-[22px] leading-[22px] text-xs font-bold mt-2 mr-1"
              onClick={() => {
                setFilter((filter) => ({
                  ...filter,
                  familyStatus: !filter.familyStatus,
                }));
              }}
            >
              إعادة تعيين التصفية
            </p>
          )}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <Switch
            toggle={filter.familyStatus}
            handleToggle={() =>
              setFilter((filter) => ({
                ...filter,
                familyStatus: !filter.familyStatus,
              }))
            }
          />

          <FilterDropdown
            list={types}
            handleClick={handleFilter("type")}
            selectedList={filter["type"]}
          />
          <FilterDropdown
            list={types}
            handleClick={handleFilter("type")}
            selectedList={filter["type"]}
          />
          <FilterDropdown
            list={types}
            handleClick={handleFilter("type")}
            selectedList={filter["type"]}
          />
        </div>
      </section>
      <section className="bg-[#2a2c5c] py-2 px-5 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-white font-bold text-2xl text-center min-w-[160px]  xl:text-right flex-1">
          جديد السينما
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <Button
            filter={filter}
            cinemaNews="newlyAdded"
            handleClick={() =>
              setFilter((filter) => ({ ...filter, cinemaNews: "newlyAdded" }))
            }
          >
            <IoIosPodium className="ml-4 text-2xl" />
            <span> المضاف حديثاََ</span>
          </Button>

          <Button
            filter={filter}
            cinemaNews="mostAdmired"
            handleClick={() =>
              setFilter((filter) => ({ ...filter, cinemaNews: "mostAdmired" }))
            }
          >
            <IoIosPodium className="ml-4 text-2xl" />
            <span> الأكثر اعجاباََ</span>
          </Button>
          <Button
            filter={filter}
            cinemaNews="mostWatched"
            handleClick={() =>
              setFilter((filter) => ({ ...filter, cinemaNews: "mostWatched" }))
            }
          >
            <IoIosPodium className="ml-4 text-2xl" />
            <span> الاكثر مشاهدة</span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default FilterSection;

//
