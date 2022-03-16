import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typeNotes } from "../types/types";

export const deleteNote = (id) => {
  return async (dispatch) => {
    deleteDoc(doc(db, "notas", id));
    dispatch(deleteSincrono(id));
    dispatch(listNotesAsync());
  };
};
export const deleteSincrono = (note) => {
  return {
    type: typeNotes.delete,
    payload: note,
  };
};
export const listNotesAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "notas"));
    const notas = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      data["id"] = doc.id;
      notas.push({
        ...data,
      });
    });
    dispatch(listSync(notas));
  };
};

export const listSync = (note) => {
  return {
    type: typeNotes.list,
    payload: note,
  };
};
export const registerNoteAsync = (newNote) => {
  return (dispatch) => {
    addDoc(collection(db, "notas"), newNote)
      .then((resp) => {
        dispatch(registerNoteSync(newNote));
        dispatch(listNotesAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const registerNoteSync = (note) => {
  return {
    type: typeNotes.add,
    payload: note,
  };
};
