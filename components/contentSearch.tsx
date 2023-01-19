import React from "react";
import Card from "./common/card";
import { AiOutlineArrowLeft } from "react-icons/ai";
interface Props {
  filter: string;
}
const ContentSearch = ({ filter = "" }: Props) => {
  return (
    <>
      {filter && (
        <h2 className="text-center text-black pt-[10px] pb-[30px] text-[27px] font-bold">
          نتائج البحث عن
          <strong className="text-primary">&quot;{filter}&quot;</strong>
        </h2>
      )}
      <div className="flex flex-wrap justify-center sm:justify-start mb-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <button className="text-white px-2 rounded-sm bg-[#8c2463] h-[40px] text-base font-bold relative">
        مسلسلات تركية
        <AiOutlineArrowLeft className="text-lg align-middle -mt-[1px] inline-block mr-2" />
        <span className="ripple"></span>
      </button>
    </>
  );
};

export default ContentSearch;
