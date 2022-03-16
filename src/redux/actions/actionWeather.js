import { typeWeather } from "../types/types";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const listWeatherAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "ciudades"));
    const climas = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data["id"] = doc.id;
      climas.push({
        ...data,
      });
    });
    dispatch(listSync(climas));
  };
};

export const listSync = (climas) => {
  return {
    type: typeWeather.list,
    payload: climas,
  };
};

export const addWeather = (wheather) => {
  return {
    type: typeWeather.add,
    payload: wheather,
  };
};
