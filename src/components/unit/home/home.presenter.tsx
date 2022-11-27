import * as S from "./home.styles";

export default function HomeUI() {
  return (
    <S.Wrapper>
      <S.IntroWrapper>
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
