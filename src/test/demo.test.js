import { getLongitud } from "../base/async_await";
import { metedereologico } from "../base/data/dataMetedereologicos";
import { isLoggedIn, notLoggedIn } from "../base/logueado";
import { timeZones } from "../base/metedereologicoZone";

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

  test("Validar Metedereologico filtrado", () => {
    const zone = "Antarctica/Troll";
    const zona = timeZones(zone);
    const filtrado = metedereologico.find((m) => m.timezone === zone);
    expect(zona).toEqual(filtrado);
  });

  test("Validar Longitud", async () => {
    const lon = await getLongitud();
    console.log(lon);

    expect(typeof lon).toBe("number");
  });
});
