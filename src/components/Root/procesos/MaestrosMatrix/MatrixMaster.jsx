import React from 'react';
import DataTable from '../../../General/DataTable';
import './MatrixMaster.scss';
import useInfo from './useInfo';
import { Link } from 'react-router-dom';


function MatrixMaster() {
 const { info, columns, pending, getTableName, } = useInfo();


    return(
        <section>
            <nav className="nav justify-content-center">
                <li className="nav-item">
                    Editar datos tabla 
                </li>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col">
                            <DataTable 
                                title="Opciones"
                                columns={columns}
                                info={info} 
                                progressPending={pending}
                                getTableName={getTableName}
                            />
                    </div>
                    <Link to="/root/procesos/maestros-matrix/editar-datos-matrix">
                    Return
                    </Link>
                </div>
            </div>
        </section>
        );
}

export default MatrixMaster;

