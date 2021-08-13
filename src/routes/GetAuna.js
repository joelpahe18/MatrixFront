import React, { useEffect } from 'react'
import { Redirect, useParams} from 'react-router-dom'
import { setToken } from '../utils/token';

export default function GetAuna() {

    const {acces_token} = useParams();

    console.log(acces_token);

    useEffect(() => {
        setToken(acces_token)
      }, [acces_token])

    return (
        <Redirect 
            to="/"
        />
    )
}
