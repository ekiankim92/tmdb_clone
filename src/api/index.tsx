import axios from "axios";
import { API_URL } from "../common/config";

export const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    language: "en-US",
  },
});

export const moviesApi = {
  nowPlaying: instance.get("movie/now_playing"),
  upcoming: instance.get("movie/upcoming"),
  popular: instance.get("movie/popular"),
  movieDetail: (id) =>
    instance.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    instance.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: instance.get("tv/top_rated"),
  popular: instance.get("tv/popular"),
  airToday: instance.get("tv/airing_today"),
  showDetail: (id) =>
    instance.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    instance.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
