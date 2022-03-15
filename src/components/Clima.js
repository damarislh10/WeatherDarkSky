import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { addWeather, listWeatherAsync } from "../redux/actions/actionWeather";
import "../styles/styleClima.css";
import DatoClima from "./DatoClima";
import NavLogout from "./NavLogout";

const Clima = () => {
  const dispatch = useDispatch();

  const [datosClima, setDatosClima] = useState({
    summary: "",
    temperature: "",
    humidity: "",
    windGust: "",
    dewPoint: "",
    uvIndex: "",
    visibility: "",
    pressure: "",
    summaryHourly: "",
  });
  const [datoMetedeologico, setDatoMetedeologico] = useState([]);
  const [datosHourly, setDatoHourly] = useState([]);
  const [datosDaily, setDatoDaily] = useState([]);

  const [values, handleInputChange] = useForm({
    name: "",
  });
  const { name } = values;

  const { climas } = useSelector((state) => state.climas);

  useEffect(() => {
    dispatch(listWeatherAsync());
    dispatch(addWeather(listWeatherAsync()));
  }, []);
  let climaCiudad;
  const handleClima = (e) => {
    e.preventDefault();
    climaCiudad = climas.find((n) => n.name === name);

    const url = `https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/${climaCiudad.lat},${climaCiudad.lon}`;
    getData(url);
    getMetedereologicos(climaCiudad.lat, climaCiudad.lon);
  };

  const getData = async (url) => {
    var proxy = "https://cors-anywhere.herokuapp.com/";
    const resp = await fetch(proxy + url);
    const data = await resp.json();
    setDatosClima({
      summary: data.currently.summary,
      temperature: data.currently.temperature,
      humidity: data.currently.humidity,
      windGust: data.currently.windGust,
      dewPoint: data.currently.dewPoint,
      uvIndex: data.currently.uvIndex,
      visibility: data.currently.visibility,
      pressure: data.currently.pressure,
      summaryHourly: data.hourly.summary,
    });
  };

  const getMetedereologicos = async (lat, long) => {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=9ae67a9ffe88cb10092c754a81d5e192`;
    const resp = await fetch(url);
    const data = await resp.json();
    setDatoMetedeologico(data.minutely);
    setDatoHourly(data.hourly);
    setDatoDaily(data.daily);
  };
  return (
    <div>
      <Container className="w-100">
        <NavLogout />
        <div className="w-100 container-form">
          <Form
            onSubmit={handleClima}
            className="w-50 d-flex "
            style={{ alignItems: "center" }}
          >
            <Form.Group className="form my-3" controlId="formBasicName">
              <Form.Control
                className="inputClima"
                name="name"
                type="text"
                placeholder="Ingresa nombre de ciudad disponible"
                value={name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <button className="btn-seach ms-3" type="submit">
              <img
                className="imgSearch"
                src="https://darksky.net/images/search.png"
                alt="imgSearch"
              />
            </button>
          </Form>
        </div>
        <div>
          <div className="container-whet">
            <h2>
              <span>Wind: </span>
              {datosClima.windGust}
            </h2>
            <h2>
              <span>Humidity: </span>
              {datosClima.humidity} %
            </h2>
            <h2>
              <span>Dew Pt: </span>
              {datosClima.dewPoint}
            </h2>
            <h2>
              <span>UV Index: </span>
              {datosClima.uvIndex}
            </h2>
            <h2>
              <span>Visibility: </span>
              {datosClima.visibility}
            </h2>
            <h2>
              <span>Pressure: </span>
              {datosClima.pressure}
            </h2>
          </div>

          <h2>{datosClima.summary}</h2>
          <h2>
            <span>Feels Like: </span>
            {datosClima.temperature}
          </h2>

          <h2>{datosClima.summaryHourly}</h2>
        </div>
        <DatoClima />

        <div className="tableMinutes">
          <table className="table text-center mt-3">
            <thead>
              <tr>
                <th scope="col">Minute</th>
                <th scope="col">Dt</th>
                <th scope="col">precipitation</th>
              </tr>
            </thead>
            <tbody>
              {datoMetedeologico.map((e, i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{e.dt}</td>
                  <td>{e.precipitation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="tableHours">
          <table className="table text-center mt-3">
            <thead>
              <tr>
                <th scope="col">Hourly</th>
                <th scope="col">Dt</th>
                <th scope="col">Temperature</th>
                <th scope="col">Feels Like</th>
                <th scope="col">Humidity</th>
                <th scope="col">Weather</th>
              </tr>
            </thead>
            <tbody>
              {datosHourly.map((e, i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{e.dt}</td>
                  <td>{e.temp}</td>

                  <td>{e.feels_like}</td>
                  <td>{e.humidity}</td>
                  <td>
                    <ul>
                      {e.weather.map((w, i) => (
                        <div key={i}>
                          <li>
                            <span>Main: </span>
                            {w.main}
                          </li>
                          <li>
                            <span>Descripcion: </span>
                            {w.description}
                          </li>
                          <span>Icon: </span>
                          <li>{w.icon}</li>
                        </div>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="tableDailys">
          <table className="table text-center mt-3">
            <thead>
              <tr>
                <th scope="col">Daily</th>
                <th scope="col">Dt</th>
                <th scope="col">Temperature</th>
                <th scope="col">Weather</th>
              </tr>
            </thead>
            <tbody>
              {datosDaily.map((e, i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{e.dt}</td>
                  <td>
                    <ul>
                      <li>
                        <span>Day: </span> {e.temp.day}
                      </li>
                      <li>
                        <span>Night: </span> {e.temp.night}
                      </li>
                      <li>
                        <span>Everning: </span> {e.temp.eve}
                      </li>
                      <li>
                        <span>Morning: </span> {e.temp.morn}
                      </li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {e.weather.map((w, i) => (
                        <div key={i}>
                          <li>
                            <span>Main: </span>
                            {w.main}
                          </li>
                          <li>
                            <span>Description: </span>
                            {w.description}
                          </li>
                          <li>
                            <span>Icon: </span>
                            {w.icon}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default Clima;
