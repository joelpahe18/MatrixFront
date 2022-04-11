import React, { useState } from 'react';
import { overallCreate } from '../hooks/useCRUD';
import "./OverallCreate.scss";
import { httpConToken } from "../../helpers/http";
import DinamicField from '../Root/procesos/MaestrosMatrix/DinamicField/DinamicField';

function OverallCreate(props) {
    const [state, setState] = React.useState({});

    const saveInput = (e) => {
        state[e.target.name] = e.target.value;
        setState(state);
    }

    const [descriptions, setDescriptions] = useState([]);

    const columnDescription = async () => {
        try {
          const { data } = await httpConToken.post(
            "/root/procesos/maestros-matrix/descripcion-columna",
            {
              columns: props.columns,
              tableName: props.tableName,
            }
          );
          setDescriptions(data.data);
        } catch (error) {
          console.log(error);
          return error;
        }
      };

    columnDescription();

    return (
        <section>
            <div className="modal fade" id="OverallCreate" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Crear registro en la tabla {props.tableName}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={() => overallCreate({props, state})}>
                            <div className="modal-body">
                                
                                    <div className="container">
                                        {
                                            props && props.columns ? props.columns.filter(column => column !== 'Medico' && column !== 'Fecha_data' && column !== 'Hora_data' && column !== 'Seguridad' && column !== 'id').map( (column, index) => (
                                                <div className="row ml-auto" key={column}>
                                                    <h1 className="col-6 label form-label">({descriptions[index]}) <br /> {column}</h1>
                                                    <div className='col-6 right-field'>
                                                        <DinamicField column={column} tableName={props.tableName} saveInput={saveInput} />
                                                    </div>
                                                </div>
                                            )) : 'Loading...'
                                        }
                                    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" >Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OverallCreate;

