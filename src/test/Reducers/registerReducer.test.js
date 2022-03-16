import "@testing-library/jest-dom";
import { registerReducer } from "../../redux/reducers/registerReducer";
import { types } from "../../redux/types/types";

describe("Prueba en registro Reducer", () => {
  test("Debe de realizar el registro user", () => {
    const initialState = {};
    const action = {
      type: types.register,
      payload: {
        nombre: "alex",
        correo: "alex@gmail.com",
        password: "1234567",
      },
    };

    const state = registerReducer(initialState, action);
    expect(state).toEqual({
      nombre: "alex",
      correo: "alex@gmail.com",
      password: "1234567",
    });
  });
});
