import React, { useState, useEffect} from 'react';
import DataTable from '../../../General/DataTable';
import useData from '../../../hooks/useData';
import './MatrixMaster.scss';
import URL from '../../../../utils/config';



function MyComponent() {
    const [columns, setColumns] = useState([]);
	const [pending, setPending] = useState(true);
    let info = useData(URL.BASE_URL+"/root/procesos/maestros-matrix/permisos");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setColumns([
				{
					name: 'Tabopc',
					selector: row => row.Tabopc,
					sortable: true,
				},
                {
					name: 'Tabtab',
					selector: row => row.Tabtab,
					sortable: true,
				},
			]);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);


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