import React from 'react';
import OverallCreate from './OverallCreate';
import OverallUpdate from './OverallUpdate';
import { overallDelete } from '../hooks/useCRUD';
import TableHead  from '../hooks/useTable';
import { MdCreateNewFolder, MdCreate, MdDelete } from "react-icons/md";

function EditMatrixData(props) {
    const [state, setState] = React.useState({});
    const editData = (data) => {
        setState(data)
      }

    const tableBody = () => {
        return (
            props && props.columns ? props.data.map(data => (
                <tr key={data.id}>
                    <td>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#OverallUpdate" onClick={() => editData(data)}><MdCreate size={'1.7rem'} /></button>
                        
                    </td>
                    <td>
                        <button type="button" onClick={() => overallDelete({props, data})}><MdDelete size={'1.7rem'}/></button>
                    </td>
                    {
                        props && props.columns ? props.columns.filter(column => column !== 'Medico' && column !== 'Fecha_data' && column !== 'Hora_data' && column !== 'Seguridad' && column !== 'id').map((column, index) => (
                            <td key={index}>{data[column]}</td>
                        )) : 'LoadingInside...'
                    }
                    <td>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#OverallUpdate" onClick={() => editData(data)}><MdCreate size={'1.7rem'} /></button>
                        
                    </td>
                    <td>
                        <button type="button" onClick={() => overallDelete({props, data})}><MdDelete size={'1.7rem'}/></button>
                    </td>
                </tr>
            )) : 'Loading...'
        );
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-11">
                        <h4>{props.tableName}</h4>
                    </div>
                    <div className="col">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#OverallCreate">
                            <MdCreateNewFolder size={'1.7rem'} />
                        </button>
                    </div>
                </div>
                <div className="caption-top">
                    <table className="table">
                        <thead>
                            <tr>{ TableHead(props) }</tr>
                        </thead>
                        <tbody>{ tableBody() }</tbody>
                    </table>
                </div>
            </div>
            <OverallCreate 
                tableName={props.tableName}
                columns={props.columnsCreate}
                />
            <OverallUpdate 
                tableName={props.tableName}
                columns={props.columnsUpdate}
                data={state}
            />
        </section>
    );
}

export default EditMatrixData;

