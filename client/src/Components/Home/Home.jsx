import React, { createContext, useState } from "react";

export const HomeContext = createContext(null);

const Home = (data) => {
  console.log(data);
  const [homeData, setHomeData] = useState("From Home");
  return (
    <div>
      {/* <h1>This is home</h1> */}
      {/* {data.children} */}

      <HomeContext.Provider value={homeData}>
        {data.children}
      </HomeContext.Provider>
    </div>
  );
};

export default Home;
