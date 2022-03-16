import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import { editAsync } from "../redux/actions/actionNotes";

const Editar = ({ datoAct }) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    id: datoAct.id,
    nombre: datoAct.nombre,
    fecha: datoAct.fecha,
    descripcion: datoAct.descripcion,
  });

  const { id, nombre, fecha, descripcion } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAsync(id, values));

    reset();
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form-group" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mt-2"
              name="nombre"
              autoComplete="off"
              placeholder="Nombre"
              value={nombre}
              onChange={handleInputChange}
              required
            />

            <input
              type="date"
              className="form-control mt-2"
              name="fecha"
              autoComplete="off"
              placeholder="Fecha"
              value={fecha}
              onChange={handleInputChange}
              required
            />

            <textarea
              className="form-control mt-2"
              autoComplete="off"
              name="descripcion"
              placeholder="Descripcion"
              value={descripcion}
              onChange={handleInputChange}
              required
            ></textarea>

            <div className="d-grid gap-2 mx-auto mt-2">
              <input
                onClick={handleClose}
                value="Actualizar"
                type="submit"
                className="btn btn-outline-dark"
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Editar;
