import { metedereologico } from "./data/dataMetedereologicos";

export const timeZones = (zone) => {
  return metedereologico.find((m) => m.timezone === zone);
};
