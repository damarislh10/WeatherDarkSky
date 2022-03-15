import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const registroEmailPasswordNombre = (nombre, correo, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, correo, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: nombre });
        dispatch(registerSincrono(user.email, user.uid, user.displayName));
        console.log(user);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
export const registerSincrono = (nombre, correo, password) => {
  return {
    type: types.register,
    payload: {
      nombre,
      correo,
      password,
    },
  };
};
