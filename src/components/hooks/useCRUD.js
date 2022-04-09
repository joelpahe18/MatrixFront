import axios from "axios";
import URL from "../../utils/config";
import { toast } from "react-toastify";

const generateDynamicObject = ({ typeOperation, props, state }) => {
  const overallObject = {};

  if (typeOperation === "create") {
    props.columns.map((column) => {
      overallObject[column] = state[column];
    });
  } else if (typeOperation === "update") {
    props.columns.map((column) => {
      if (state[column] === undefined) {
        overallObject[column] = props.data[column];
      } else {
        overallObject[column] = state[column];
      }
    });
  }
  return overallObject;
};

const overallCreate = async ({ props, state }) => {
  const typeOperation = "create";
  const overallObject = generateDynamicObject({ typeOperation, props, state });

  await axios
    .post(
      URL.BASE_URL +
        `/root/procesos/maestros-matrix/editar-datos-matrix/registrar/` +
        props.tableName,
      overallObject,
      {
        headers: { Authorization: `Bearer ${localStorage.acces_token}` },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        window.location.reload(false);
      }
    });
};

const overallUpdate = async ({ props, state }) => {
  const typeOperation = "update";
  const overallObject = generateDynamicObject({ typeOperation, props, state });

  await axios
    .put(
      URL.BASE_URL +
        `/root/procesos/maestros-matrix/editar-datos-matrix/actualizar/` +
        props.tableName +
        `/` +
        props.data.id,
      overallObject,
      {
        headers: { Authorization: `Bearer ${localStorage.acces_token}` },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        window.location.reload(false);
      }
    });
};

const overallDelete = async ({ params, row }) => {
  await axios
    .delete(
      URL.BASE_URL +
        `/root/procesos/maestros-matrix/editar-datos-matrix/eliminar/` +
        params.tableName +
        `/` +
        row.id,
      {
        headers: { Authorization: `Bearer ${localStorage.acces_token}` },
      }
    )
    .then((res) => {
      if (res.data.res) {
        window.location.reload(false);
      } else {
        toast.error(res.data.message);
      }
    });
};

export { overallCreate, overallUpdate, overallDelete };
