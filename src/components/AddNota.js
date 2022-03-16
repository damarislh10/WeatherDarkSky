import React from "react";
import { Input } from "reactstrap";
import "../styles/styleNote.css"

const AddNota = () => {
  return (
    <div>
      <div className="container mt-5">
        <hr />
        <div className="row row-note">
          <div className="col-9">
            <h3 className="text-center"> Notas </h3>

            <form className="form-group">
              <input
                type="text"
                className="form-control mt-2"
                name="nombre"
                autoComplete="off"
                placeholder="Nombre"
                required
              />

              <input
                type="date"
                className="form-control mt-2"
                name="fecha"
                autoComplete="off"
                placeholder="Fecha"
                required
              />

              <textarea
                className="form-control mt-2"
                autoComplete="off"
                name="descripcion"
                placeholder="Descripcion"
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
      </div>
    </div>
  );
};

export default AddNota;
