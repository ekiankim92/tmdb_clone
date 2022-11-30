import styled from "@emotion/styled";
import { PopularStyledProps } from "./populuar.types";

export const Wrapper = styled.div`
  width: 1300px;
  height: 360px;
  margin: 0px auto;
  overflow-x: scroll;
`;

export const Title = styled.h2`
  padding: 20px;
`;

export const TitleWrapper = styled.div`
  border: 1px solid #000;
  border: 8px;
  display: flex;
  align-items: center;
`;

export const RadioWrapper = styled.div`
  border: 1px solid #000;
  border-radius: 20px;
  width: 400px;
  height: 34px;
  display: flex;
  align-items: center;
`;

export const StreamLabel = styled.div`
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

export const TVLabel = styled.div`
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

export const RentLabel = styled.div`
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

export const TheatersLabel = styled.div`
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
