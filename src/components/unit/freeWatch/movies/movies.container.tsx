import { useEffect, useState } from "react";
import MovieUI from "./movies.presenter";
import { moviesApi } from "../../../../api";

export default function Movie() {
  const [moviesList, setMovieList] = useState([]);

  const handleMovieData = async () => {
    try {
      await moviesApi.popular.then((response) =>
        setMovieList(response.data?.results)
      );
    } catch (error) {
      console.log("Movies Error:", error.message);
    }
  };

  useEffect(() => {
    handleMovieData();
  }, []);

  return <MovieUI moviesList={moviesList} />;
}
