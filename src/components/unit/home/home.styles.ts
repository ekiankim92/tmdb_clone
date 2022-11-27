import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const IntroWrapper = styled.section`
  width: 1300px;
  height: 300px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: lightblue;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2em;
  padding-left: 30px;
  padding: 2px 0px 10px 30px;
`;

export const Intro = styled.h2`
  color: #fff;
  font-size: 2em;
  padding: 2px 0px 10px 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 1220px;
  height: 46px;
  background: lightcoral;
`;

export const SearchInput = styled.input`
  width: 980px;
  height: 46px;
  border-radius: 30px;
  padding: 10px 20px;
  border: none;
  :focus {
    outline: none;
    border: 1px solid rgba(30, 213, 169);
  }
`;

export const SearchButton = styled.input`
  width: 100px;
  height: 46px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(to right, rgba(30, 213, 169), rgba(1, 180, 228));
  color: #fff;
  font-size: 16px;
  position: relative;
  right: 50px;
  :hover {
    cursor: pointer;
    color: #000;
  }
`;
