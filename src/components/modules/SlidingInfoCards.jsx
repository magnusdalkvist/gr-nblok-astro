import clsx from "clsx";
import CustomImage from "../CustomImage";
import { useState } from "react";

export default function SlidingInfoCards({ module }) {
  // console.log(module);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="w-full h-screen relative" datatype="slidingInfoCard">
      <h2>{module?.title}</h2>
      <div className="infoCardsWrapper">
        {module?.cards.map((card, i) => {
          const handleClick = () => {
            setActiveCard(i);
          };
          return (
            <div
              key={i}
              className={clsx("infoCard", i == activeCard && "active")}
              onClick={handleClick}
            >
              <div className="flex flex-col">
                <CustomImage src={card.image.url} alt="" className="rounded-sm" />
                <h2>{card.title}</h2>
                <h3>{card.subtitle}</h3>
              </div>
              <div className="">
                <p>{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
