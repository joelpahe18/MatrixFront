import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import './LoginForm.scss';

export default function LoginForm() {
    return (
        <Form
            className="login-form"
        >
            <h1>Iniciar sesión</h1>

            <div className="input-box">
                <input 
                    type="text"
                />
                <label>Ingresa tu código</label>
            </div>

            <div className="input-box">
                <input 
                    type="text"
                />
                <label>Ingresa tu contraseña</label>
            </div>

            <Button
                type="submit"
                className="btn-submit"
            >Entrar</Button>
            
        </Form>
    )
}
