import { types } from "../types/types";

export const registerReducer = (state = {}, action) => {
  switch (action.type) {
    case types.register:
      return {
        nombre: action.payload.nombre,
        correo: action.payload.correo,
        password: action.payload.password,
      };

    default:
      return state;
  }
};
