import React from 'react'

 const tableHead = (props) => {
        return (
            props && props.columns ? props.columns.filter(column => column !== 'Medico' && column !== 'Fecha_data' && column !== 'Hora_data' && column !== 'Seguridad' && column !== 'id').map(column => (
                <th key={column}>
                    {column}
                </th>
            )) : 'Loading...'
        );
    }

export { 
    tableHead, 
};