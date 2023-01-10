import React from "react";
import Card from "./common/card";
import Pagination from "./common/pagination";

const MainSection = () => {
  return (
    <section className="p-5 bg-[url('/background-main-section.svg')] bg-no-repeat bg-cover bg-[0]">
      <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap mb-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </section>
  );
};

export default MainSection;
