import React from "react";
import { Carousel } from "../../components/Carousel";
export const Slider: React.FC = ({}) => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => {
    return {
      item: `/assets/images/${e}.jpeg`,
    };
  });
  const options = {
    visibleItems: 4,
    grip: 16,
    fit: true,
  };
  return (
    <div>
      <Carousel {...options}>
        {items.map((e, index) => {
          return (
            <img
              src={e.item}
              width={336}
              key={index}
              onClick={() => console.log("Click:", e.item)}
              style={{ borderRadius: 12 }}
            />
          );
        })}
      </Carousel>
      <button onClick={() => {}}>Reset</button>
      <button onClick={() => {}}>Increment</button>
    </div>
  );
};
