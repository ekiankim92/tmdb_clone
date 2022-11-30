import * as S from "./header.styles";
import { logo } from "../../../../common/images";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { GlobalContext } from "../../../../../pages/_app";
import { GlobalProps } from "../../../unit/home/home.types";

export default function HeaderUI() {
  const { isShow }: GlobalProps = useContext(GlobalContext);

  console.log("header isShow:", isShow);

  return (
    <>
      {isShow && (
        <S.Wrapper>
          <S.DeadSpace />
          <S.LeftWrapper>
            <S.Logo src={logo} />
            <S.MovieLabel>Movies</S.MovieLabel>
            <S.TVLabel>TV Shows</S.TVLabel>
            <S.PeopleLabel>People</S.PeopleLabel>
            <S.MoreLabel>More</S.MoreLabel>
          </S.LeftWrapper>
          <S.RightWrapper>
            <S.PlusIcon icon={faPlus} />
            <S.LanguageLabel>EN</S.LanguageLabel>
            <S.LoginLabel>Login</S.LoginLabel>
            <S.JoinLabel>Join TMDB</S.JoinLabel>
            <S.SearchIcon icon={faSearch} />
          </S.RightWrapper>
          <S.DeadSpace />
        </S.Wrapper>
      )}
    </>
  );
}
