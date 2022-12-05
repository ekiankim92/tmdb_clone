import { useContext, useEffect, useState } from "react";
import MovieUI from "./movies.presenter";
import { instance, moviesApi } from "../../../../api";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";

export default function Movie() {
  const [moviesList, setMovieList] = useState([]);
  const router = useRouter();
  const { setData } = useContext(GlobalContext);

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

  const onClickDetail = async (movieId: number) => {
    try {
      await instance
        .get(`movie/${movieId}`)
        .then((response) => setData(response.data));
      router.push(`board/${movieId}`);
    } catch (error) {
      console.log("Detail Error:", error.message);
    }
  };

  return <MovieUI moviesList={moviesList} onClickDetail={onClickDetail} />;
}
