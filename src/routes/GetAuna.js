import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { setToken } from '../utils/token';


export default function GetAuna() {
    const {acces_token} = useParams();    

    setToken(acces_token); 

    return (
        <Redirect 
            to='/entrar'
        />
    )
}
