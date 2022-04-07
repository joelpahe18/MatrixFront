import React, { useEffect, useState } from "react";
import { httpConToken } from "../../helpers/http";

export default function TableHead({ columns, tableName }) {
  const [descriptions, setDescriptions] = useState([]);

  const columnDescription = async () => {
    try {
      const { data } = await httpConToken.post(
        "/root/procesos/maestros-matrix/descripcion-columna",
        {
          columns: columns,
          tableName: tableName,
        }
      );
      setDescriptions(data.data);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    columnDescription();
  }, [columns]);

  return (
    <>
      <td>Editar</td>
      <td>Eliminar</td>
      {columns
        ? columns
            .filter(
              (column) =>
                column !== "Medico" &&
                column !== "Fecha_data" &&
                column !== "Hora_data" &&
                column !== "Seguridad" &&
                column !== "id"
            )
            .map((column, index) => {
              return (
                <th key={index}>
                  {descriptions[index]}
                  <br />({column})
                </th>
              );
            })
        : "Loading..."}
      <td>Editar</td>
      <td>Eliminar</td>
    </>
  );
}
