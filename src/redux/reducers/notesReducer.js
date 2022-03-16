import { typeNotes } from "../types/types";

const initialState = {
  notes: [],
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeNotes.add:
      return {
        notes: [action.payload],
      };
    case typeNotes.list:
      return {
        notes: [...action.payload],
      };
    case typeNotes.delete:
      return {
        notes: state.notes.filter((n) => n.id !== action.payload),
      };

    default:
      return state;
  }
};
