import { api_key, BASE_URL, MOVIES_CATEGORY_IDS } from "../../utils/constants";

export const FETCH_FEATURED = "FETCH_FEATURED";
export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_ALL_FEATURED = "FETCH_ALL_FEATURED";
export const FETCH_CATEGORY_MOVIES = "FETCH_CATEGORY_MOVIES";

export const fetchFeatured = () => {
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}movie/popular?api_key=${api_key}&language=pt-BR&page=1`
    );
    const { results } = await response.json();

    const randomFeaturedMovie = Math.floor(Math.random() * results.length + 1);

    dispatch({ type: FETCH_FEATURED, featured: results[randomFeaturedMovie] });
  };
};

export const fetchFeaturedMovies = () => {
  return async (dispatch) => {
    const response = await fetch(
      `${BASE_URL}movie/popular?api_key=${api_key}&language=pt-BR&page=1`
    );
    const { results } = await response.json();

    dispatch({ type: FETCH_ALL_FEATURED, featuredMovies: results });
  };
};

export const fetchCategoryMovies = () => {
  return async (dispatch) => {
    const comedyResponse = await fetch(
      `${BASE_URL}discover/movie?api_key=${api_key}&language=pt-BR&page=1&with_genres=${MOVIES_CATEGORY_IDS.comedy}`
    );
    const comedyResults = await comedyResponse.json();

    const adventureResponse = await fetch(
      `${BASE_URL}discover/movie?api_key=${api_key}&language=pt-BR&page=1&with_genres=${MOVIES_CATEGORY_IDS.adventure}`
    );
    const adventureResults = await adventureResponse.json();

    const actionResponse = await fetch(
      `${BASE_URL}discover/movie?api_key=${api_key}&language=pt-BR&page=1&with_genres=${MOVIES_CATEGORY_IDS.action}`
    );
    const actionResults = await actionResponse.json();

    dispatch({
      type: FETCH_CATEGORY_MOVIES,
      comedyMovies: comedyResults.results,
      adventureMovies: adventureResults.results,
      actionMovies: actionResults.results,
    });
  };
};

export const fetchMovies = (genre) => {
  return async (dispatch) => {
    const response = await fetch();
  };
};
