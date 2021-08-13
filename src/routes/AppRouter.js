import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Auth from '../pages/Auth';
import { getToken } from '../utils/token';
import GetAuna from './GetAuna';
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
                            component={Auth}
                            isAuthenticated={!!auth}
                        />

                        <PrivateRoute 
                            exact
                            path="/"
                            component={Inicio}
                            isAuthenticated={!!auth}
                        />
                        
                        <Route 
                            exact
                            path="/login/:acces_token"
                            component={GetAuna}
                        />                        

                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
