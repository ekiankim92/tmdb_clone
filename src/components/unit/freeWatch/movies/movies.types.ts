export interface MovieProps {
  moviesList: string[];
  onClickDetail: (movie_id: number) => void;
}

export interface FreeWatchProps {
  movies?: boolean;
  tv?: boolean;
}
