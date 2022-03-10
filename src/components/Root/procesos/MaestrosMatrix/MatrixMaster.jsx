import React, { useState, useEffect} from 'react';
import DataTable from '../../../General/DataTable';
import useData from '../../../hooks/useData';
import './MatrixMaster.scss';


const API = 'http://localhost:8000/api/root/procesos/maestros-matrix/permisos';


// const info = [
//     {
//         Tabopc: 1,
//         Tabtab: 2222,
//     },
// ]



function MyComponent() {
    const [columns, setColumns] = useState([]);
	const [pending, setPending] = useState(true);
    let info = useData(API);

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