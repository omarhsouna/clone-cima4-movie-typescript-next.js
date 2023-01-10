import React from "react";
import { Filter, PropertyFilter } from "../types";
import Switch from "./common/button/switch";
import FilterDropdown from "./common/filterDropdown";
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
    <section className="px-5 bg-[#1d1b3e] py-1 flex items-center sm:items-start gap-1 flex-col sm:flex-row">
      <div className="flex-1">
        <FilterDropdown
          list={types}
          handleClick={handleFilter("type")}
          selectedList={filter["type"]}
        />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <Switch />

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
  );
};

export default FilterSection;
