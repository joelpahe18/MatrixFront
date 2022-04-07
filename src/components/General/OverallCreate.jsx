import React from 'react';
import { overallCreate } from '../hooks/useCRUD';


function OverallCreate(props) {
    const [state, setState] = React.useState({});
    const saveInput = (e) => {
        state[e.target.name] = e.target.value;
        setState(state);
    }
    return (
        <section>
            <div className="modal fade" id="OverallCreate" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Crear registro en la tabla {props.tableName}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="container">
                                    <div className="row">
                                            {
                                                props && props.columns ? props.columns.filter(column => column !== 'Medico' && column !== 'Fecha_data' && column !== 'Hora_data' && column !== 'Seguridad' && column !== 'id').map(column => (
                                                    <div className="col-md-4 ml-auto" key={column}>
                                                        <label className="form-label">{column}</label>
                                                        <input type="text" className="form-control" id={column} name={column} onChange={saveInput} />
                                                    </div>
                                                )) : 'Loading...'
                                            }
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary"  onClick={() => overallCreate({props, state})}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OverallCreate;

