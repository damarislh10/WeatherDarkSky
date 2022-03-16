import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Input } from "reactstrap";
import { registerNoteAsync } from "../redux/actions/actionNotes";
import "../styles/styleNote.css";
import ListNotas from "./ListNotas";

const AddNota = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      nombre: "",
      fecha: "",
      descripcion: "",
    },
    onSubmit: (data) => {
      dispatch(registerNoteAsync(data));
    },
  });

  return (
    <div>
      <div className="container mt-5">
        <hr />
        <div className="row row-note">
          <div className="col-9">
            <h3 className="text-center"> Notas </h3>

            <form className="form-group" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                className="form-control mt-2"
                name="nombre"
                autoComplete="off"
                placeholder="Nombre"
                onChange={formik.handleChange}
                required
              />

              <input
                type="date"
                className="form-control mt-2"
                name="fecha"
                autoComplete="off"
                placeholder="Fecha"
                onChange={formik.handleChange}
                required
              />

              <textarea
                className="form-control mt-2"
                autoComplete="off"
                name="descripcion"
                placeholder="Descripcion"
                onChange={formik.handleChange}
                required
              ></textarea>

              <div className="d-grid gap-2 mx-auto mt-2">
                <Input
                  value="Guardar"
                  type="submit"
                  className="btn btn-outline-dark"
                />
              </div>
            </form>
          </div>
        </div>
        <ListNotas />
      </div>
    </div>
  );
};

export default AddNota;
