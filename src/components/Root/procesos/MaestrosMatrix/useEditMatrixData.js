import { useState, useEffect } from "react";
import URL from "../../../../utils/config";
import useData from "../../../hooks/useData";
import "./MatrixMaster.scss";
import { MdCreateNewFolder, MdCreate, MdDelete } from "react-icons/md";
import { overallDelete } from "../../../hooks/useCRUD";

const useEditMatrixData = (params, editData) => {
  const [pending, setPending] = useState(true);
  const [tableInfo, setTableInfo] = useState({
    columns: [],
    info: [],
  });
  const columnsCreate = useData(
    URL.BASE_URL +
      "/root/procesos/maestros-matrix/nombres-columnas-crear/" +
      params.tableName
  );
  const columnsUpdate = useData(
    URL.BASE_URL +
      "/root/procesos/maestros-matrix/nombres-columnas-actualizar/" +
      params.tableName
  );

  const getColumnsNames = (datum) => {
    var columnsName = [];
    var columnsStructure = [];

    if (datum[0] !== undefined) {
      Object.keys(datum[0]).forEach((key) => {
        columnsName.push(key);
      });

      columnsName
        .filter(
          (column) =>
            column !== "Medico" &&
            column !== "Fecha_data" &&
            column !== "Hora_data" &&
            column !== "Seguridad" &&
            column !== "id"
        )
        .map((column) => {
          columnsStructure.push({
            name: column,
            selector: (row) => row[column],
            sortable: true,
          });
        });

      columnsStructure.push(
        {
          name: "Editar",
          cell: (row) => (
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#OverallUpdate"
              onClick={() => editData(row)}
            >
              <MdCreate size={"1.7rem"} />
            </button>
          ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
        },
        {
          name: "Elimnar",
          cell: (row) => (
            <button type="button">
              <MdDelete
                onClick={() => overallDelete({ params, row })}
                size={"1.7rem"}
              />
            </button>
          ),
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
        }
      );

      return columnsStructure;
    }
  };

  useEffect(() => {
    const url =
      URL.BASE_URL +
      "/root/procesos/maestros-matrix/editar-datos-matrix/" +
      params.tableName;

    const getData = () => {
      fetch(url, {
        headers: { Authorization: `Bearer ${localStorage.acces_token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setTableInfo({
            columns: getColumnsNames(data.data),
            info: data.data,
          });
        });
      const timeout = setTimeout(() => {
        setPending(false);
      }, 2000);
      return () => clearTimeout(timeout);
    };

    getData();

  }, []);

  return {
    tableInfo,
    pending,
    columnsCreate,
    columnsUpdate,
  };
};

export default useEditMatrixData;
