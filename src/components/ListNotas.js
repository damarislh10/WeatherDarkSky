import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, listNotesAsync } from "../redux/actions/actionNotes";
import AddNota from "./AddNota";

const ListNotas = () => {
  const [enviarDatos, setEnviarDatos] = useState([]);
  const { notes } = useSelector((store) => store.notas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listNotesAsync());
  });

  const editar = (id) => {
    const editNote = notes.find((n) => n.id === id);
    console.log(editNote);
    setEnviarDatos(editNote);
  };

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
                    editar(e.id);
                  }}
                  value="Editar"
                  type="button"
                  className="btn btn-outline-dark"
                />
              </td>
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
      {/* <AddNota datosEdit={enviarDatos} /> */}
    </div>
  );
};

export default ListNotas;
