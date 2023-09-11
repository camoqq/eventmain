import React, { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { Reducer } from "./Reducer";

export const ContextApp = createContext();

const Context = ({ children }) => {
  const eventss = [...Array(10)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.department(),
    image: faker.image.nightlife(640, 480, true), //dont forget true to randomize image
    date: faker.date.weekday(),
    location: faker.location.streetAddress(),
    description: faker.lorem.word(5),

    fastDelivery: faker.datatype.boolean(),
  }));
  console.log(eventss);
  const [state, dispatch] = useReducer(Reducer, { eventss: eventss });

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
      {children}
    </ContextApp.Provider>
  );
};

export default Context;
