import { typeWeather } from "../types/types";

const initialState = {
  climas: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeWeather.add:
      return {
        ...state,
        climas: [...state.climas,action.payload],
      };
    case typeWeather.list:
        return {
            climas: [...action.payload],
        }

    default:
      return state;
  }
};
