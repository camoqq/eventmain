import React, { useContext } from "react";
import { ContextApp } from "../context/Context";
import CardComp from "./CardComp";
import Events from "./Events";

const Home = () => {
  //I am bringing the state from the Context Component here:
  const {
    state: { eventss },
  } = useContext(ContextApp);
  return (
    <div className="bHome">
      {/* This is my events component */}
      <Events />
      <div className="home">
        {/* This is my CardComponent */}
        {eventss.map((ev) => {
          return <CardComp ev={ev} />;
        })}
      </div>
    </div>
  );
};

export default Home;
