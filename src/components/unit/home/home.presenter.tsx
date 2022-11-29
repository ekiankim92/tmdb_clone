import * as S from "./home.styles";
import { pictureArray } from "../../../common/images";

export default function HomeUI() {
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  const randomImages = pictureArray[randomIndex];

  return (
    <S.Wrapper>
      <S.IntroWrapper
        style={{
          backgroundImage: `url("${randomImages}")`,
        }}
      >
        <S.Title>Welcome.</S.Title>
        <S.Intro>
          Millions of movies, TV shows and people to discover. Explore now
        </S.Intro>
        <S.InputWrapper>
          <S.SearchInput placeholder="Search movies, TV shows, cast" />
          <S.SearchButton type="button" value="Search" />
        </S.InputWrapper>
      </S.IntroWrapper>
    </S.Wrapper>
  );
}
