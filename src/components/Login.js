import React from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { loginEmailPassword, loginGoogle } from "../redux/actions/actionLogin";

export const Login = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  return (
    <div className="mt-5">
      <Container className="w-50 container-login shadow rounded">
      <h2 className="text-center fs-3">Accede a Dark Sky</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="inputLogin"
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              className="inputLogin"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <button className="w-100 btnIngreso" type="submit">
            INGRESAR
          </button>
          <div className="cuentaRegister my-3">
            <span className="fs-4">¿No tienes cuenta?</span>
            <Link className="fw-bold fs-5 ms-2 registerLink" to="/registro">
              Registrarse aquí
            </Link>
          </div>
          <div className="d-flex text-center">
            <Container className="auth__social-networks text-light">
              <Container className="google-btn" onClick={handleGoogle}>
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
        </Form>
      </Container>
    </div>
  );
};
