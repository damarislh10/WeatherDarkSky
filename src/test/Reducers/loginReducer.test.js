import "@testing-library/jest-dom";
import { loginReducer } from "../../redux/reducers/loginReducer";
import { types } from "../../redux/types/types";

describe("Prueba en login reducer", () => {
  test("Debe de realizar el login", () => {
    const initialState = {};
    const action = {
      type: types.login,
      payload: {
        id: "8FOgKY5mA0PjK3fFnaa1si306Fv1",
        displayName: "Damaris Hernandez",
      },
    };

    const state = loginReducer(initialState, action);
    expect(state).toEqual({
      id: "8FOgKY5mA0PjK3fFnaa1si306Fv1",
      displayName: "Damaris Hernandez",
    });

    console.log(state);
  });

  test("Cerrar sesion - logout", () => {
    const initState = {
      id: "8FOgKY5mA0PjK3fFnaa1si306Fv1",
      displayName: "Damaris Hernandez",
    };

    const action = {
      type: types.logout,
    };

    const state = loginReducer(initState, action);
    expect(state).toEqual({});
  });
});
