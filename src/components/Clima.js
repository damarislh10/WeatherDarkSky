import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks/useForm";
import { addWeather, listWeatherAsync } from "../redux/actions/actionWeather";
import "../styles/styleClima.css";
import DatoClima from "./DatoClima";

const Clima = () => {
  const dispatch = useDispatch();
  const [dataInputs, setdataInputs] = useState();
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
  }, []);

  const handleClima = (e) => {
    e.preventDefault();
    let climaCiudad = climas.find((n) => n.name === name);
    setdataInputs(climaCiudad);
    const url = `https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/${climaCiudad.lat},${climaCiudad.lon}`;
    getData(url);
    getMetedereologicos(climaCiudad.lat, climaCiudad.lon);
  };

  console.log(dataInputs);
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
      <Container className="w-80">
        <Form onSubmit={handleClima}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              className="inputClima"
              name="name"
              type="text"
              value={name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <button
            className="btn-car w-100"
            type="submit"
            onClick={() => {
              dispatch(addWeather(dataInputs));
            }}
          >
            Buscar
          </button>
        </Form>

        <div>
          <h2>{datosClima.summary}</h2>
          <h2>{datosClima.temperature}</h2>
          <h2>{datosClima.humidity}</h2>
          <h2>{datosClima.dewPoint}</h2>
          <h2>{datosClima.pressure}</h2>
          <h2>{datosClima.uvIndex}</h2>
          <h2>{datosClima.visibility}</h2>
          <h2>{datosClima.windGust}</h2>
          <h2>{datosClima.summaryHourly}</h2>
        </div>

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

        <DatoClima />
      </Container>
    </div>
  );
};

export default Clima;
