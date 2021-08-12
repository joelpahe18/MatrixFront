import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import { getToken } from '../utils/token';
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute';

export default function AppRouter() {

    const [auth, setAuth] = useState(undefined);

    useEffect(() => {
        const token = getToken();
        if (!token) {
          setAuth(null);
        }else{
          setAuth(token);
        }
        console.log(auth);
      }, [auth])

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <PublicRoute 
                            exact
                            path="/login"
                            component={Login}
                            isAuthenticated={!!auth}
                        />

                        <PrivateRoute 
                            exact
                            path="/"
                            component={Inicio}
                            isAuthenticated={!!auth}
                        />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
