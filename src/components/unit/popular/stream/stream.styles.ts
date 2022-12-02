import styled from "@emotion/styled";

export const DataWrapper = styled.section`
  margin: 0px auto;
  overflow-x: scroll;
  display: flex;
`;

export const InnerWrapper = styled.div`
  padding: 10px 0px 40px 20px;
`;

export const DataImage = styled.img`
  width: 150px;
  height: 225px;
  border-radius: 6px;
  :hover {
    cursor: pointer;
  }
`;

export const ProgressBar = styled.div`
  width: 38px;
  height: 38px;
  background: rgba(3, 37, 65);
  border-radius: 20px;
  position: relative;
  top: -16px;
  left: 10px;
`;

export const DataName = styled.div`
  font-weight: 700;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -8px;
  padding-left: 14px;
  :hover {
    cursor: pointer;
    color: rgba(1, 180, 228);
  }
`;

export const DataDate = styled.div`
  color: rgba(0, 0, 0, 0.6);
  opacity: 0.5;
  padding-left: 14px;
  font-size: 14px;
  line-height: 26px;
`;
