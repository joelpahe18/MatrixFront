import { useState, useEffect } from "react";
import URL from "../../../../utils/config";
import useData from "../../../hooks/useData";
import "./MatrixMaster.scss";

const useEditMatrixData = (params) => {
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

  useEffect(() => {
    const url =
      URL.BASE_URL +
      "/root/procesos/maestros-matrix/editar-datos-matrix/" +
      params.tableName;
    var columnsName = [];
    var columnsStructure = [];

    const getColumnsNames = (datum) => {
      if (datum[0] !== undefined) {
        Object.keys(datum[0]).forEach((key) => {
          columnsName.push(key);
        });
        for (var i = 0; i < columnsName.length; i++) {
          columnsStructure.push(columnsName[i]);
        }
        return columnsStructure;
      }
    };

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
      setPending(false);
    };

    getData();

    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return {
    tableInfo,
    pending,
    columnsCreate,
    columnsUpdate,
  };
};

export default useEditMatrixData;
