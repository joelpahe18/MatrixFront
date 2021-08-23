import React, { useEffect, } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../pages/Auth';
import GetAuna from './GetAuna';
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { startChecking } from '../actions/auth';
import DashboardRoutes from './DashboardRoutes';

export default function AppRouter() {

    const dispatch = useDispatch();
    
    const {checking, res} = useSelector(state => state.auth)

    useEffect(() => {     
        dispatch(startChecking())
      }, [dispatch])

    if (checking){
        return <h1>Cargando...</h1>
    }  

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact
                        path="/login"
                        component={Auth}
                        isAuthenticated={!!res}
                    />

                    <Route 
                        exact
                        path="/login/:acces_token"
                        component={GetAuna}
                    /> 

                    <PrivateRoute                         
                        path="/"
                        component={DashboardRoutes}
                        isAuthenticated={!!res}
                    />
                    
                                    
                </Switch>
            </div>
        </Router>
    )
}
