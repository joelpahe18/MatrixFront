import React, { useEffect, useState } from 'react';
import { overallCreate } from '../hooks/useCRUD';
import "./OverallCreate.scss";
import {Form, Button, Select, Dropdown} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { httpConToken } from "../../helpers/http";

export default function OverallCreate(props) {

    const [descriptions, setDescriptions] = useState([]);
    const [types, setTypes] = useState([]);
    const [options, setOptions] = useState({})
    const columns = props.columns.filter(column => column !== 'Medico' && column !== 'Fecha_data' && column !== 'Hora_data' && column !== 'Seguridad' && column !== 'id');
    
    
    const [formData, setFormData] = useState(initialValues(columns))
    
    const formik = useFormik({
        initialValues: initialValues(columns),
        validationSchema: Yup.object( validation(columns, types) ),
        onSubmit: (formValue) => {
            console.log({
                ...formData,
                ...formValue
            });
        
        },
    });

    const columnDescription = async () => {
        try {
          const { data } = await httpConToken.post(
            "/root/procesos/maestros-matrix/descripcion-columna",
            {
              columns: props.columns,
              tableName: props.tableName,
            }
          );
          setDescriptions(data.data);
        } catch (error) {
          console.log(error);
          return error;
        }
    };

    const columnsTypes = async () => {
        try {
          const { data } = await httpConToken.post(
            "/root/procesos/maestros-matrix/tipos-columnas",
            {
              tableName: props.tableName,
            }
          );
          setTypes(data.data);      
        } catch (error) {
          console.log(error);
          return error;
        }
    };

    const getOptions = async (comentarios, index) => {
        try {
          const { data } = await httpConToken.post(
            "/root/procesos/maestros-matrix/selecciones",
            {
              tableName: props.tableName,
              comentarios: comentarios
            }
          );
          setOptions(data.data)
          
        } catch (error) {
          console.log(error);
          return error;
        }
    };

    const genderOptions = (object, index) => {

        if (object && options.length != 0) {
            return options[index+1];
        }
        return [
            {
                key: 'No', text: 'No hay opciones', value: 'No'
            }
        ];
    }

    useEffect( async() => {
        await getOptions(props.tableName);
        await columnDescription();
        await columnsTypes();
    }, [props.columns])

    return (
        <section>
            <div className="modal fade" id="OverallCreate" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Crear registro en la tabla {props.tableName}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <Form onSubmit={formik.handleSubmit}>
                            <div className="modal-body">
                                
                                    <div className="container">
                                        {
                                            props && props.columns ? props.columns.filter(column => column !== 'Medico' && column !== 'Fecha_data' && column !== 'Hora_data' && column !== 'Seguridad' && column !== 'id').map( (column, index) => (
                                                <div className="row ml-auto" key={column}>
                                                    <h1 className="col-6 label form-label">({descriptions[index]}) <br /> {column}</h1>
                                                    <div className='col-6 right-field'>

                                                        {
                                                            {
                                                                '0' : <Form.Input 
                                                                        type='text'
                                                                        name = {column}
                                                                        value={formik.values[column]}
                                                                        onChange={formik.handleChange}
                                                                        error={formik.errors[column]}
                                                                        
                                                                    />,
                                                                '1' :  <Form.Input 
                                                                            type='number'
                                                                            name = {column}
                                                                            value={formik.values[column]}
                                                                            onChange={formik.handleChange}
                                                                            error={formik.errors[column]}
                                                                        />,  
                                                                '2' :  <Form.Input 
                                                                            type='number'
                                                                            name = {column}
                                                                            value={formik.values[column]}
                                                                            onChange={formik.handleChange}
                                                                            error={formik.errors[column]}
                                                                        />,  
                                                                '3' :  <Form.Input 
                                                                            type='text'
                                                                            name = {column}
                                                                            value={formik.values[column]}
                                                                            onChange={formik.handleChange}
                                                                            error={formik.errors[column]}
                                                                        />,
                                                                '5' :   <Dropdown
                                                                            placeholder='Select Country'
                                                                            fluid
                                                                            search
                                                                            selection
                                                                            lazyLoad
                                                                            onChange={(e,data) => {
                                                                                formData[column] = data.value
                                                                                setFormData(formData)
                                                                            }}
                                                                            options={genderOptions(types[index]?.comentarios, index)}
                                                                        />
                                                            }[types[index]?.tipo] || <Form.Input 
                                                                                        type='text'
                                                                                        name = {column}
                                                                                        value={formik.values[column]}
                                                                                        onChange = {formik.handleChange}
                                                                                        disabled
                                                                                    />
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            )) : 'Loading...'
                                        }
                                    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <Button
                                    type="submit"
                                    className="btn-submit"
                                >Entrar</Button>
                                
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
}


function initialValues(columns) {

    let values = new Object();

    columns.map( (column) => {
        values[column] = ""
    });

    return values;
}

function validation(columns, types) {
    let values = new Object();
    columns.map( (column, index) => {
        switch(types[index]?.tipo) {
            case '0':
                values[column] = Yup.string("El valor debe ser un String").required("El campo debe estar lleno");
                break;
            case '1':
                values[column] = Yup.number("Debe ser un numero").integer("debe ser entero").positive("debe ser positivo").required("El campo debe estar lleno");
                break;
            case '2':
                values[column] = Yup.number("Debe ser un numero Real").required("El campo debe estar lleno");
                break;
            case '3':
                values[column] = Yup.string().matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/, "Debe estar en formato YYYY-MM-DD").required("El campo debe estar lleno");
                break;
            default:
                break;
        }
    });
    return values;
}

