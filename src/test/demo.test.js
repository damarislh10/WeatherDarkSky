import { isLoggedIn, notLoggedIn } from "../base/logueado";

describe("Validando Logueado", () => {
  test("Validar Rutas privadas", () => {
    const isAuthenticated = isLoggedIn;

    if (isAuthenticated) {
      console.log("Usuario Autenticado");
    } else {
      throw new Error("Usuario No autenticado");
    }
  });
  test("Validar Rutas publicas", () => {
    const isAuthenticated = notLoggedIn;

    if (!isAuthenticated) {
      console.log("Usuario No Autenticado");
    } else {
      throw new Error("Usuario autenticado");
    }
  });
});
