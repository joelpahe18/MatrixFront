import React, { useEffect, useState } from 'react';
import {httpConToken} from "../../../../../helpers/http";
import { Input } from 'semantic-ui-react';
import DatePicker from 'react-date-picker';

export default function DinamicField ({column, tableName, saveInput}) {

    const [tipo, setTipo] = useState("");

    const columnDescription = async () => {
        try {
          const { data } = await httpConToken.post(
            "/root/procesos/maestros-matrix/tipo-columna",
            {
              tableName: tableName,
              column: column
            }
          );
          setTipo(data.data);
        } catch (error) {
          console.log(error);
          return error;
        }
      };

    useEffect(() => {
        columnDescription();
    }, [])

    switch(tipo.tipo) {
        case '0':
            return (
        
                <>
                    <input type="text" required autoComplete='off' className="form-control" id={column} name={column} onChange={saveInput} />
                </>
            )
        case '1':
            return (
        
                <>
                    <input type="number" autoComplete='off' className="form-control" id={column} name={column} onChange={saveInput} />
                </>
            )
        case '2':
                return (
            
                    <>
                        <input type="number" autoComplete='off' className="form-control" id={column} name={column} onChange={saveInput} />
                    </>
                )
        case '3':
            return (
        
                <>
                    <input required type="number" placeholder='YYYY-MM-DD' autoComplete='off' className="form-control" id={column} name={column} onChange={saveInput} />
                </>
            )
        default:
            return (
                <>
                    <Input disabled placeholder='Este tipo de datos no es soportado por el programa'/>
                </>
            )
    }
    
    
}