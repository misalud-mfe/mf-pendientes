import React, { useEffect, useState } from 'react'
import { apiGetAtenciones } from "common-utils";

import "common-resources/css/table.css";

const Pendientes = () => {
  const [atenciones, setAtenciones] = useState([]);

  const getData = async () => {
    const data = await apiGetAtenciones({
      estado: 'PX'
    })
    setAtenciones(data.items);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Historia</th>
            <th>Prioridad</th>
            <th>Destino</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {atenciones.map((a) => (
            <tr key={a.atencionId}>
              <td>{a.nombreCompleto}</td>
              <td>{a.historiaClinica}</td>
              <td style={{ backgroundColor: a.prioridadBgColor, color: a.prioridadFgColor }}>
                {a.prioridad}
              </td>
              <td>{a.destinoAtencion}</td>
              <td>{new Date(a.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Pendientes