import React, { useEffect, useState } from 'react';
import { overallUpdate } from '../hooks/useCRUD';
import { httpConToken } from "../../helpers/http";
import { Form, Button, Dropdown, Checkbox } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



export default function OverallCreate(props) {
    
    const [descriptions, setDescriptions] = useState([]);
    const [types, setTypes] = useState([]);
    const [options, setOptions] = useState({});
    const [relations, setRelations] = useState({});
    const columns = props.columns.filter(column => column !== 'Medico' && column !== 'Fecha_data' && column !== 'Hora_data' && column !== 'Seguridad' && column !== 'id');
    
    
    const [formData, setFormData] = useState({})
    const formik = useFormik({
        initialValues: initialValues(props),
        validationSchema: Yup.object( validation(columns, types) ),
        onSubmit: (formValue) => {
            console.log('formData', formData)
            const state = {
                ...formData,
                ...formValue
            }
            // overallUpdate({props, state});
            console.log('state', state)
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

    const getRelations = async() => {
        try {
            const { data } = await httpConToken.post(
              "/root/procesos/maestros-matrix/relaciones",
              {
                tableName: props.tableName,
              }
            );
            setRelations(data.data)
            
          } catch (error) {
            console.log(error);
            return error;
          }
    }

    const getOptions = async () => {
        try {
          const { data } = await httpConToken.post(
            "/root/procesos/maestros-matrix/selecciones",
            {
              tableName: props.tableName,
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

    const genderRelations = (object, index) => {

        if (object && relations.length != 0) {
            return relations[index+1];
        }
        return [
            {
                key: 'No', text: 'No hay opciones', value: 'No'
            }
        ];
    }


    useEffect(() => {
      setFormData(props.data)
      }, [props.data]);

    useEffect( async() => {
        await getOptions();
        await getRelations();
        await columnDescription();
        await columnsTypes();
        setFormData(props.data)
    }, [props.columns])


    return (
        <section>
            <div className="modal fade" id="OverallUpdate" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualizar registro en la tabla {props.tableName}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form className='form-modal' onSubmit={formik.handleSubmit}>
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
                                                                        defaultValue={formik.values[column] = props.data ? props.data[column] : null}
                                                                        onChange={formik.handleChange}
                                                                        error={formik.errors[column]}                                                                        
                                                                    />,
                                                                '1' :  <Form.Input 
                                                                            type='number'
                                                                            name = {column}
                                                                            defaultValue={formik.values[column] = props.data ? props.data[column] : null}
                                                                            onChange={formik.handleChange}
                                                                            error={formik.errors[column]}
                                                                        />,  
                                                                '2' :  <Form.Input 
                                                                            type='number'
                                                                            name = {column}
                                                                            defaultValue={props.data ? props.data[column] : null}
                                                                            value={formik.values[column]}
                                                                            onChange={formik.handleChange}
                                                                            error={formik.errors[column]}
                                                                        />,  
                                                                '3' :  <Form.Input 
                                                                            type='text'
                                                                            name = {column}
                                                                            defaultValue={formik.values[column] = props.data ? props.data[column] : null}
                                                                            onChange={formik.handleChange}
                                                                            error={formik.errors[column]}
                                                                        />,
                                                                '5' :   <Dropdown
                                                                            placeholder='Seleccione una opcion'
                                                                            fluid
                                                                            search
                                                                            selection
                                                                            lazyLoad
                                                                            onChange={(e,data) => {
                                                                                formData[column] = data.value
                                                                                setFormData(formData)
                                                                            }}
                                                                            options={genderOptions(types[index]?.comentarios, index)}
                                                                        />,
                                                                '9' :   <Dropdown
                                                                            placeholder='Seleccione una opcion'
                                                                            fluid
                                                                            search
                                                                            selection
                                                                            lazyLoad
                                                                            onChange={(_,data) => {
                                                                                formData[column] = data.value
                                                                                setFormData(formData)
                                                                            }}
                                                                            options={genderRelations(types[index]?.comentarios, index)}
                                                                        />,
                                                                '10' :  <Checkbox
                                                                        toggle
                                                                        // defaultValue={formData[column] = props.data ? props.data[column] : 'on'} 
                                                                        onChange={(_,data) => {
                                                                            data.checked ? formData[column] = 'on' : formData[column] = 'off'
                                                                            setFormData(formData)
                                                                        }}
                                                                    />,
                                                                '11' :  <Form.Input 
                                                                    type='text'
                                                                    name = {column}
                                                                    defaultValue={formik.values[column] = props.data ? props.data[column] : null}
                                                                    onChange={formik.handleChange}
                                                                    error={formik.errors[column]}
                                                                />,
                                                                '18' :   <Dropdown
                                                                    placeholder='Seleccione una opcion'
                                                                    defaultValue={formik.values[column] = props.data ? props.data[column] : null}
                                                                    fluid
                                                                    search
                                                                    selection
                                                                    lazyLoad
                                                                    onChange={(_,data) => {
                                                                        console.log(column, 'Eres el mejor',data)
                                                                        formData[column] = data.value
                                                                        setFormData(formData)
                                                                    }}
                                                                    options={genderRelations(types[index]?.comentarios, index)}
                                                                />,
                                                            }[types[index]?.tipo] || <Form.Input 
                                                                                        type='text'
                                                                                        name = {column}
                                                                                        defaultValue={formik.values[column] = props.data ? props.data[column] : null}
                                                                                        onChange = {formik.handleChange}
                                                                                        disabled
                                                                                    />
                                                        }
                                                        
                                                    </div>
                                                </div>
                                            )) : 'Loading...'
                                        }
                                    
                                </div>
                            </Form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary"  onClick={() => overallUpdate({props, state})}>Save changes</button> */}
                            <Button
                                    type="submit"
                                    className="btn-submit"
                                    onClick={formik.handleSubmit}
                                >Registrar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function initialValues(props) {

    let values = new Object();

    props && props.columns ? props.columns.map( (column) => {
        values[column] = ''
    }) : values = ''
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
            case '11':
                values[column] = Yup.string().matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/, "Debe estar en formato hh:mm:ss").required("El campo debe estar lleno");
                break;
            default:
                break;
        }
    });
    return values;
}


