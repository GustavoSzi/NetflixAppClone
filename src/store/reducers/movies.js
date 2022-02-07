import {
  FETCH_FEATURED,
  FETCH_ALL_FEATURED,
  FETCH_CATEGORY_MOVIES,
} from "../actions/movies";

const initialState = {
  trending: {},
  trendingMovies: {},
  comedyMovies: [],
  adventureMovies: [],
  actionMovies: [],
  shows: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEATURED:
      const newState = { ...state, trending: action.featured };
      return newState;
    case FETCH_ALL_FEATURED:
      return {
        ...state,
        trendingMovies: action.featuredMovies,
      };
    case FETCH_CATEGORY_MOVIES:
      return {
        ...state,
        comedyMovies: action.comedyMovies,
        adventureMovies: action.adventureMovies,
        actionMovies: action.actionMovies,
      };

    default:
      return state;
  }
};
