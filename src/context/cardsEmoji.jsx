import { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [emoji] = useState([
    "&#9992;",  // ✈️ Plane
    "&#128663;", // 🚗 Car
    "&#128661;", // 🚕 Taxi
    "&#127949;", // 🏍️ Motorcycle
    "&#127800;", // 🌸 Flower
    "&#127795;", // 🌳 Tree
    "&#9728;",  // ☀️ Sun
    "&#127752;", // 🌈 Rainbow
    "&#127874;", // 🎂 Cake
    "&#127865;", // 🍹 Drink
    "&#128077;", // 👍 Thumbs Up
    "&#128525;", // 😍 Heart Eyes
    "&#128514;", // 😂 Laughing Face
    "&#129395;", // 🥳 Party Face
    "&#128526;", // 😎 Cool Face
    "&#128640;", // 🚀 Rocket
    "&#127881;", // 🎉 Party Popper
    "&#127774;", // 🌞 Bright Sun
    "&#127754;", // 🌊 Wave
    "&#127965;", // 🏡 House
  ]);

  return (
    <CardContext.Provider value={{ emoji }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  return useContext(CardContext);
};
