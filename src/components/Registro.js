import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

import React from "react";
import { FormGroup, Row, Col } from "reactstrap";
import * as Yup from "yup";
import { Container } from "react-bootstrap";
import "../styles/styleRegister.css";
import { registroEmailPasswordNombre } from "../redux/actions/actionRegister";

const Registro = () => {
  const dispatch = useDispatch();

  const formSchema = Yup.object().shape({
    correo: Yup.string()
      .required("Campo Requerido")
      .email("Correo Electronico Invalido")
      .max(255, `Máximo 255 caracteres`),
    nombre: Yup.string()
      .min(5, `Mínimo 5 caracteres`)
      .max(25, `Máximo 25 caracteres`)
      .required("Campo Requerido"),
    password1: Yup.string()
      .required("Campo Requerido")
      .min(6, `Mínimo 6 caracteres`),
    pass2: Yup.string()
      .required("Campo Requerido")
      .oneOf([Yup.ref("password1")])
      .min(6, `Mínimo 6 caracteres`),
  });
  return (
    <div className="mt-5">
      <div className="w-50 container-login shadow rounded m-auto">
        <h2 className="text-center fs-3">Registrate en Dark Sky</h2>
        <Formik
          initialValues={{
            nombre: "",
            correo: "",
            password1: "",
            pass2: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(
              registroEmailPasswordNombre(
                values.nombre,
                values.correo,
                values.password1
              )
            );
          }}
        >
          <Form>
            <FormGroup>
              <Field
                className="form-control"
                name="nombre"
                placeholder="Nombre Usuario"
                type="text"
              />
              <ErrorMessage
                name="nombre"
                component="div"
                className="field-error text-danger"
              />
            </FormGroup>
            <FormGroup>
              <Field
                className="form-control"
                name="correo"
                placeholder="Correo Electronico"
                type="email"
              />
              <ErrorMessage
                name="correo"
                component="div"
                className="field-error text-danger"
              />
            </FormGroup>
            <FormGroup>
              <Field
                className="form-control"
                name="password1"
                placeholder="Contraseña"
                type="password"
              />
              <ErrorMessage
                name="password1"
                component="div"
                className="field-error text-danger"
              />
            </FormGroup>
            <FormGroup>
              <Field
                className="form-control"
                name="pass2"
                placeholder="Repite Contraseña"
                type="password"
              />
              <ErrorMessage
                name="pass2"
                component="div"
                className="field-error text-danger"
              />
            </FormGroup>
            <Row>
              <Col lg={12} md={12}>
                <button
                  color="primary"
                  className="w-100 btnIngreso"
                  type="submit"
                >
                  Registrarse
                </button>
              </Col>
            </Row>
          </Form>
        </Formik>

        <div className="d-flex text-center mt-4">
          <Container className="auth__social-networks text-light">
            <Container className="google-btn ">
              <Container className="google-icon-wrapper">
                <img
                  className="google-icon icon-network"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646783779/amazonasApp/Google__22G_22_Logo_aw47ma.svg"
                  alt="google button"
                />
                <label className="ms-3">Accede con Google</label>
              </Container>
            </Container>
          </Container>
          <Container className="auth__social-networks text-light">
            <Container className="facebook-btn">
              <Container className="facebook-icon-wrapper">
                <img
                  className="facebook-icon icon-network"
                  src="https://res.cloudinary.com/df90q7vvj/image/upload/v1646513036/amazonasApp/58e919b0eb97430e819064ff_owau9l_x8pgg6.png"
                  alt="facebook button"
                />
                <label className="ms-3">Accede con Facebook</label>
              </Container>
            </Container>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Registro;
