import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import matrix from '../../assets/png/Matrix.png';
import './Entrar.scss'

export default function Entrar({history}) {

    const handleEntrar = () => {
        history.go(0);
    }

    return (
        <Container className="entrar">
            <div className="content mt-auto">
                <Image src={matrix} />

                <button 
                    className="btn-submit"
                    to="/"
                    onClick={handleEntrar}
                >
                    Entrar
                </button>
            </div>            
        </Container>
    )
}
