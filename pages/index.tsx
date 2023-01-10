import React from "react";
import Header from "../components/layout/header";
import Banner from "../components/layout/banner";
import SliderSection from "../components/layout/sliderSection";
import FilterSection from "../components/filterSection";
import { useState } from "react";
import { Filter } from "../types";
import MainSection from "../components/mainSection";

export default function Home() {
  const [filter, setFilter] = useState<Filter>({
    category: [],
    type: [],
    releaseYear: [],
    quality: [],
    familyStatus: false,
    cinemaNews: undefined,
  });

  return (
    <>
      <Header></Header>
      <Banner />
      <SliderSection />
      <FilterSection setFilter={setFilter} filter={filter} />
      <MainSection />
    </>
  );
}
