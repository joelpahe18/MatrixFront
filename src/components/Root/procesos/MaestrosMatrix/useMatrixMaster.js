import React, { useState, useEffect, } from 'react';
import useData from '../../../hooks/useData';
import URL from '../../../../utils/config';
import { Link } from 'react-router-dom';
import './MatrixMaster.scss';


const useMatrixMaster = () => {
    const [columns, setColumns] = useState([]);
	const [pending, setPending] = useState(true);
    const info = useData(URL.BASE_URL+"/root/procesos/maestros-matrix/permisos");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setColumns([
				{
					name: '#',
					selector: (row, key) => key=row.id,
					sortable: true,
				},
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
				{
					name: 'Acciones',
					cell: (row) => <Link to={`/root/procesos/maestros-matrix/editar-datos-matrix/${row.Tabtab}`} ><button>Ir</button></ Link>,
					ignoreRowClick: true,
					allowOverflow: true,
					button: true,
				},
			]);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

   return {
    info,
    columns,
    pending,
   }
};

export default useMatrixMaster;