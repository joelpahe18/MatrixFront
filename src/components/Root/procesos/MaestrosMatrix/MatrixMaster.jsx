import React from 'react';
import DataTable from '../../../General/DataTable';
import useMatrixMaster from './useMatrixMaster';
import './MatrixMaster.scss';
import Nav from '../../../Nav';


function MatrixMaster() {
 const { info, columns, pending, } = useMatrixMaster();

    return(
        <section>
            <Nav version='2022-08-04' />
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

