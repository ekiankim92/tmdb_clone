import { useState } from "react";
import PopularUI from "./popular.presenter";

export default function Popular() {
  const [isSelected, setIsSelected] = useState({
    stream: true,
    TV: false,
    rent: false,
    theaters: false,
  });

  const onClickStream = () => {
    console.log("stream");
    setIsSelected({
      stream: true,
      TV: false,
      rent: false,
      theaters: false,
    });
  };

  const onClickTV = () => {
    console.log("TV");
    setIsSelected({
      stream: false,
      TV: true,
      rent: false,
      theaters: false,
    });
  };

  const onClickRent = () => {
    console.log("Rent");
    setIsSelected({
      stream: false,
      TV: false,
      rent: true,
      theaters: false,
    });
  };

  const onClickTheaters = () => {
    console.log("theaters");
    setIsSelected({
      stream: false,
      TV: false,
      rent: false,
      theaters: true,
    });
  };

  return (
    <PopularUI
      isSelected={isSelected}
      onClickStream={onClickStream}
      onClickTV={onClickTV}
      onClickRent={onClickRent}
      onClickTheaters={onClickTheaters}
    />
  );
}
