import React, { useState, useEffect } from 'react';
import useData from '../../../hooks/useData';
import URL from '../../../../utils/config';
import './MatrixMaster.scss';


const useInfo = () => {
    const [columns, setColumns] = useState([]);
	const [pending, setPending] = useState(true);
	const [modal, setModal] = useState(false);
    const info = useData(URL.BASE_URL+"/root/procesos/maestros-matrix/permisos");
 
	
	
	

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
				{
					name: 'Acciones',
					cell: () => <button onClick={console.log('')}>Action</button>,
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

export default useInfo;