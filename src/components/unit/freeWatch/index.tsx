import styled from "@emotion/styled";
import { useState } from "react";
import { FreeWatchProps } from "./movies/movies.types";
import Movie from "./movies/movies.container";

const Wrapper = styled.div`
  width: 1300px;
  height: 360px;
  margin: 100px auto 40px auto;
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
  width: 160px;
  height: 34px;
  display: flex;
  align-items: center;
`;

const MovieLabel = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100%;
  border-radius: 20px;
  padding: 6px;
  text-align: center;
  background: ${(props: FreeWatchProps) =>
    props.movies ? "rgba(3, 37, 65)" : ""};
  color: ${(props: FreeWatchProps) => (props.movies ? "#fff" : "")};
  transition: all 0.6s ease;
`;

const TVLabel = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100%;
  border-radius: 20px;
  padding: 6px;
  text-align: center;
  background: ${(props: FreeWatchProps) => (props.tv ? "rgba(3, 37, 65)" : "")};
  color: ${(props: FreeWatchProps) => (props.tv ? "#fff" : "")};
  transition: all 0.6s ease;
`;

const FreeWatch = () => {
  const [isSelected, setIsSelected] = useState({
    movies: true,
    tv: false,
  });
  const { movies, tv } = isSelected;

  const onClickMovies = () => {
    setIsSelected({
      movies: true,
      tv: false,
    });
  };

  const onClickTV = () => {
    setIsSelected({
      movies: false,
      tv: true,
    });
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Free to Watch</Title>
        <RadioWrapper>
          <MovieLabel movies={movies} onClick={onClickMovies}>
            Movies
          </MovieLabel>
          <TVLabel tv={tv} onClick={onClickTV}>
            TV
          </TVLabel>
        </RadioWrapper>
      </TitleWrapper>
      {movies && <Movie />}
    </Wrapper>
  );
};

export default FreeWatch;
