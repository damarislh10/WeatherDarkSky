import "@testing-library/jest-dom";
import { typeNotes, types, typeWeather } from "../../redux/types/types";

describe("Verificar Types", () => {
  test("Comparar Types Login", () => {
    expect(types).toEqual({
      login: "[AUTH] login",
      logout: "[AUTH] logout",
      register: "[AUTH] register",
    });
  });
  test("Comparar Type Weather", () => {
    expect(typeWeather).toEqual({
      add: "add",
      list: "list",
    });
  });

  test("Comparar Type Note", () => {
    expect(typeNotes).toEqual({
      add: "[NOTE] add",
      list: "[NOTE] list",
      delete: "[NOTE] delete",
      edit: "[NOTE] edit",
    });
  });
});
