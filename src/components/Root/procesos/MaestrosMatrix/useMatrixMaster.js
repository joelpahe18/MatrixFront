import React, { useState, useEffect } from "react";
import useData from "../../../hooks/useData";
import URL from "../../../../utils/config";
import { Link } from "react-router-dom";
import { MdOutlineArrowForward } from "react-icons/md";
import "./MatrixMaster.scss";

const CustomTitle = ({ row }) => (
  <div
    data-tag="allowRowEvents"
    style={{ overflow: 'hidden', whiteSpace: 'wrap', textOverflow: 'ellipses' }}
  >
    {row.Tabopc}
  </div>
);

const useMatrixMaster = () => {
  const [columns, setColumns] = useState([]);
  const [pending, setPending] = useState(true);
  const info = useData(
    URL.BASE_URL + "/root/procesos/maestros-matrix/permisos"
  );

  useEffect(() => {
    setColumns([
      {
        name: "#",
        selector: (row, key) => (key = row.id),
        sortable: true,
        maxWidth: "40px",
      },
      {
        name: "Nombre de opcion",
        selector: (row) => row.Tabopc,
        sortable: true,
        cell: row => <CustomTitle row={row} />
      },
      {
        name: "Tabla matrix",
        selector: (row) => row.Tabtab,
        sortable: true,
      },
      {
        name: "Acciones",
        cell: (row) => (
          <Link
            to={`/root/procesos/maestros-matrix/editar-datos-matrix/${row.Tabtab}/${row.Tabopc}`}
          >
            <button>
              <MdOutlineArrowForward size={"1.5rem"} />
            </button>
          </Link>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ]);
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2300);
    return () => clearTimeout(timeout);
  }, []);

  return {
    info,
    columns,
    pending,
  };
};

export default useMatrixMaster;
