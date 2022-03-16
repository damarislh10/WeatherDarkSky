import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, listNotesAsync } from "../redux/actions/actionNotes";

const ListNotas = () => {
  const { notes } = useSelector((store) => store.notas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listNotesAsync());
  });

  return (
    <div>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((e, i) => (
            <tr key={i}>
              <td>{e.nombre}</td>
              <td>{e.fecha}</td>
              <td>{e.descripcion}</td>
              <td>
                <input
                  onClick={() => {
                    dispatch(deleteNote(e.id));
                  }}
                  value="Delete"
                  type="button"
                  className="btn btn-outline-dark"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListNotas;
