import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
// import SideBar from '../components/SideBar/SideBar';
import Manual from '../pages/Manual';
import MatrixMaster from '../components/Root/procesos/MaestrosMatrix/index';
// import Inicio from '../pages/Inicio';


export default function DashboardRoutes() {

return (
        <>     
            {/* <SideBar />  */}
            <div className="home-section">
                <Switch>
                    <Route exact path="/manual" component={Manual} /> 
                    <Route exact patch="/root/procesos/maestros-matrix" component={MatrixMaster} />
                    <Redirect to="/root/procesos/maestros-matrix" />
                    {/* <Route exact patch="/inicio" component={Inicio} /> */}
                </Switch>
            </div>
        </>  
    )
}
