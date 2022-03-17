import React from 'react';
import { useParams } from "react-router-dom";
// import useEditMatrixData from './useEditMatrixData';
import './MatrixMaster.scss';

function EditMatrixData(props) {
    let params  = useParams();
    // useEditMatrixData(params);
    return(
        <section>
            <nav className="nav justify-content-center">
                <li className="nav-item">
                <h2> {params.tableName}</h2>
                </li>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                            {/* <DataTable 
                                title="Opciones"
                                columns={columns}
                                info={info} 
                                progressPending={pending}
                                getTableName={getTableName}
                            /> */}
                    </div>
                </div>
            </div>
        </section>
        );
}

export default EditMatrixData;

