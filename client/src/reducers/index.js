import {
  GET_EDUCATION_VIDEOS,
  GET_EDUCATION_GAMES,
  GET_READING_BOOKS,
  GET_MOVIE,
  GET_LISTEN_BOOKS,
  GET_GAMES,
  UPDATE_CHILD
} from "../actions/types";

const initialState = {
  educationVideos: [],
  educationGames: [],
  readingbooks: [],
  movie: [],
  listenbooks: [],
  games: [],
  childs:[]
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_EDUCATION_VIDEOS:
      return {
        educationVideos: payload
      };
    case GET_EDUCATION_GAMES:
      return {
        educationGames: payload
      };
    case GET_READING_BOOKS:
      return {
        readingbooks: payload
      };
    case GET_MOVIE:
      return {
        movie: payload
      };
    case GET_LISTEN_BOOKS:
      return {
        listenbooks: payload
      };
    case GET_GAMES:
      return {
        games: payload
      };
        case UPDATE_CHILD:
      return {
        childs: payload
      };
      
    default:
      return state;
  }
};

export default reducer;
