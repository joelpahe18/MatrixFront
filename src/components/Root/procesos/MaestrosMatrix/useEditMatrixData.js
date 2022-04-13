import { useState, useEffect } from "react";
import URL from "../../../../utils/config";
import useData from "../../../hooks/useData";
import "./MatrixMaster.scss";
import { httpConToken } from "../../../../helpers/http";
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

  const CustomTitle = ({ row, column }) => (
    <div
      data-tag="allowRowEvents"
      style={{ overflow: 'hidden', whiteSpace: 'wrap', textOverflow: 'ellipses' }}
    >
      {row[column]}
    </div>
  );

  const CustomHead = ({index, column,tableName, columnsName}) => {

    const [descriptions, setDescriptions] = useState([]);

    const columnDescription = async (columns, tableName) => {
      try {
        const { data } = await httpConToken.post(
          "/root/procesos/maestros-matrix/descripcion-columna",
          {
            columns: columnsName,
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
      columnDescription(columnsName
        .filter(
          (column) =>
            column !== "Medico" &&
            column !== "Fecha_data" &&
            column !== "Hora_data" &&
            column !== "Seguridad" &&
            column !== "id"
        ), tableName);
    }, [])
    
    return (
      <>
          {descriptions[index]}
          <br />({column})
      </>
    )
  }



  const getColumnsNames = (datum, tableName) => {
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
        .map((column, index) => {
          columnsStructure.push({
            name: <CustomHead column={column} columnsName={columnsName} tableName={tableName} index={index} />,
            selector: (row) => row[column],
            sortable: true,
            cell: row => <CustomTitle row={row} column={column} />,
            
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

    const loadingData = () => {
      setPending(false);
    }

    const getData = () => {
      fetch(url, {
        headers: { Authorization: `Bearer ${localStorage.acces_token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setTableInfo({
            columns: getColumnsNames(data.data, params.tableName),
            info: data.data,
          });
        })
        .then(
          () => loadingData()
        );
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
