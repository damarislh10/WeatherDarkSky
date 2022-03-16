import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const DatoClima = () => {
  const { climas } = useSelector((state) => state.climas);
  console.log(climas);
  return (
    <div>
      <h2 className="text-center mt-4 mb-4 fs-4"> Ciudades Disponibles</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name city</th>
            <th>Longitud</th>
            <th>Latitud</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {climas.map((clima, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{clima.name}</td>
              <td>{clima.lat}</td>
              <td>{clima.lon}</td>
              <td>{clima.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DatoClima;
