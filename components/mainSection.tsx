import React from "react";
import Card from "./common/card";

const MainSection = () => {
  return (
    <section className="flex items-center justify-center sm:justify-start gap-4 flex-wrap p-5 bg-[url('/background-main-section.svg')] bg-no-repeat bg-cover bg-[0]">
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
    </section>
  );
};

export default MainSection;
