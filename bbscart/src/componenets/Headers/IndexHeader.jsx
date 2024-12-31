import React from "react";
import StartHeader from "./StartHeader";
import SearchHeader from "./SearchHeader";
import PagesHeader from "./PagesHeader";

const IndexHeader = () => {
  return (
    <div className="w-full">
    <StartHeader />
    <SearchHeader />
    <PagesHeader />
  </div>
  );
};

export default IndexHeader;