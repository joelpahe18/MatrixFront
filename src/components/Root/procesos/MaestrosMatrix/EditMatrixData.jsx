import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useEditMatrixData from './useEditMatrixData';
import DynamicDataTable from './DinamicDataTable/DynamicDataTable';
import './MatrixMaster.scss';
import Nav from '../../../Nav';
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import { MdCreateNewFolder } from "react-icons/md";
import OverallCreate from '../../../General/OverallCreate';
import OverallUpdate from '../../../General/OverallUpdate';

function EditMatrixData() {
    let params  = useParams();
    const [state, setState] = useState({});
    const editData = (data) => {
        setState(data)
    }
    const {  tableInfo, pending, columnsCreate, columnsUpdate } = useEditMatrixData(params, editData);

    return(
        
        <section>
            <Nav version='2022-08-04' />
            <div className="container">
                <div class="row">
                    <div class="col-11">
                        <Link to={`/root/procesos/maestros-matrix`} ><button><MdArrowBack size={'1.5rem'} /></button></ Link>
                    </div>
                    <div className='col-1'>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#OverallCreate">
                            <MdCreateNewFolder size={'1.7rem'} />
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                           tableInfo.columns && tableInfo.info && 
                           (
                               <DynamicDataTable title={params.tableOption} data={tableInfo.info} pending={pending} columns={tableInfo.columns}/>
                            )  
                        }
                    </div>
                
                </div>
            </div>
            <OverallCreate 
                tableName={params.tableName}
                columns={columnsCreate}
                />
            <OverallUpdate 
                tableName={params.tableName}
                columns={columnsUpdate}
                data={state}
            />

        </section>
        );
}

export default EditMatrixData;

