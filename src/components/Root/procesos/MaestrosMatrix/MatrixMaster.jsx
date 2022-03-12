import React from 'react';
import DataTable from '../../../General/DataTable';
import './MatrixMaster.scss';
import useInfo from './useInfo';

function MyComponent() {
 const { info, columns, pending, handleButtonClick,} = useInfo();


    return(
        <section>
            <nav className="nav justify-content-center">
                <li className="nav-item">
                    Editar tablas 
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

export default MyComponent;