import Stream from "./stream/stream.container";
import Tv from "./tv/tv.container";
import styled from "@emotion/styled";
import { PopularStyledProps } from "./stream/stream.types";
import { useState } from "react";

const Wrapper = styled.div`
  width: 1300px;
  height: 360px;
  margin: 0px auto;
`;

const Title = styled.h2`
  padding: 20px;
`;

const TitleWrapper = styled.div`
  border: 1px solid #000;
  border: 8px;
  display: flex;
  align-items: center;
`;

const RadioWrapper = styled.div`
  border: 1px solid #000;
  border-radius: 20px;
  width: 400px;
  height: 34px;
  display: flex;
  align-items: center;
`;

const StreamLabel = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100%;
  border-radius: 20px;
  padding: 6px;
  text-align: center;
  background: ${(props: PopularStyledProps) =>
    props.stream ? "rgba(3, 37, 65)" : ""};
  color: ${(props: PopularStyledProps) => (props.stream ? "#fff" : "")};
  transition: all 0.6s ease;
  /* background: linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%); */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
`;

const TVLabel = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100%;
  border-radius: 20px;
  padding: 6px;
  text-align: center;
  background: ${(props: PopularStyledProps) =>
    props.TV ? "rgba(3, 37, 65)" : ""};
  color: ${(props: PopularStyledProps) => (props.TV ? "#fff" : "")};
  transition: all 0.6s ease;
`;

const RentLabel = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100%;
  border-radius: 20px;
  padding: 6px;
  text-align: center;
  background: ${(props: PopularStyledProps) =>
    props.rent ? "rgba(3, 37, 65)" : ""};
  color: ${(props: PopularStyledProps) => (props.rent ? "#fff" : "")};
  transition: all 0.6s ease;
`;

const TheatersLabel = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100%;
  border-radius: 20px;
  padding: 6px;
  text-align: center;
  background: ${(props: PopularStyledProps) =>
    props.theaters ? "rgba(3, 37, 65)" : ""};
  color: ${(props: PopularStyledProps) => (props.theaters ? "#fff" : "")};
  transition: all 0.6s ease;
`;

const PopularPage = () => {
  const [isSelected, setIsSelected] = useState({
    stream: true,
    TV: false,
    rent: false,
    theaters: false,
  });

  const { stream, TV, rent, theaters } = isSelected;

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
    <Wrapper>
      <TitleWrapper>
        <Title>What&apos;s Popular</Title>
        <RadioWrapper>
          <StreamLabel onClick={onClickStream} stream={stream}>
            Streaming
          </StreamLabel>
          <TVLabel onClick={onClickTV} TV={TV}>
            On TV
          </TVLabel>
          <RentLabel onClick={onClickRent} rent={rent}>
            For Rent
          </RentLabel>
          <TheatersLabel onClick={onClickTheaters} theaters={theaters}>
            In Theaters
          </TheatersLabel>
        </RadioWrapper>
      </TitleWrapper>
      {stream && <Stream />}
      {TV && <Tv />}
      {rent && <Stream />}
      {theaters && <Tv />}
    </Wrapper>
  );
};
export default PopularPage;
