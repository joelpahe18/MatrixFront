import React from 'react';
import DataTable from '../../../General/DataTable';
import useMatrixMaster from './useMatrixMaster';
import './MatrixMaster.scss';


function MatrixMaster() {
 const { info, columns, pending, } = useMatrixMaster();

    return(
        <section>
            <nav className="nav justify-content-center">
                <li className="nav-item">
                    <h2>Editar datos tabla </h2>
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
                            />
                    </div>
                </div>
            </div>
        </section>
        );
}

export default MatrixMaster;

