import * as S from "./header.styles";
import { logo } from "../../../../common/images";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";

export default function HeaderUI() {
  const [isVisible, setIsVisible] = useState(true);

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY >= 80) {
      setIsVisible(false);
    } else if (scrollY <= 75) {
      setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <>
      <S.Wrapper isVisible={isVisible}>
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
    </>
  );
}
