import React, { useContext } from "react";
import { HomeContext } from "../Home/Home";

const InsideHome = () => {
  const homeData = useContext(HomeContext);
  return (
    <div>
      <h1>INSIDE HOME</h1>
      {homeData}
    </div>
  );
};

export default InsideHome;
