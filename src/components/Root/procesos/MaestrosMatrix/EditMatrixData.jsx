import React from 'react';
import { useParams } from "react-router-dom";
import useEditMatrixData from './useEditMatrixData';
import DataTable from '../../../General/GeneralDataTable';
import './MatrixMaster.scss';

function EditMatrixData() {
    let params  = useParams();
    const {  tableInfo, pending, columnsCreate, columnsUpdate } = useEditMatrixData(params);
    return(
        <section>
            <nav className="nav justify-content-center">
                <li className="nav-item">
                    <h2>Editar datos Matrix</h2>
                </li>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                           tableInfo.columns && tableInfo.info && 
                           (
                               <DataTable 
                                    tableName={params.tableName}
                                    columns={tableInfo.columns}
                                    columnsCreate={columnsCreate}
                                    columnsUpdate={columnsUpdate}
                                    data={tableInfo.info} 
                                    progressPending={pending}
                               />
                            )  
                        }
                    </div>
                </div>
            </div>
        </section>
        );
}

export default EditMatrixData;

