import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  position: sticky;
  top: 0px;
  background: rgba(3, 37, 65);
  display: flex;
`;

export const DeadSpace = styled.div`
  width: 10%;
`;

export const LeftWrapper = styled.section`
  width: 40%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 154px;
  height: 20px;
  position: relative;
  right: 50px;
  :hover {
    cursor: pointer;
  }
`;

export const MovieLabel = styled.div`
  color: #fff;
  margin: 0px 25px 0px -20px;
  :hover {
    cursor: pointer;
  }
`;

export const TVLabel = styled.div`
  color: #fff;
  margin-right: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const PeopleLabel = styled.div`
  color: #fff;
  margin-right: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const MoreLabel = styled.div`
  color: #fff;
  :hover {
    cursor: pointer;
  }
`;

export const RightWrapper = styled.section`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const PlusIcon = styled(FontAwesomeIcon)`
  color: #fff;
  width: 23px;
  height: 23px;
  :hover {
    cursor: pointer;
  }
`;

export const LanguageLabel = styled.div`
  color: #fff;
  margin-left: 25px;
  border: 1px solid #fff;
  padding: 4px;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    color: rgba(3, 37, 65);
    background: #fff;
  }
`;

export const LoginLabel = styled.div`
  color: #fff;
  margin-left: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const JoinLabel = styled.div`
  color: #fff;
  margin-left: 25px;
  :hover {
    cursor: pointer;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  color: rgba(1, 180, 228);
  width: 29px;
  height: 29px;
  margin-left: 30px;
  :hover {
    cursor: pointer;
  }
`;
