import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import MatrixMaster from '../components/Root/procesos/MaestrosMatrix/index';


export default function DashboardRoutes() {

return (
        <section>     
            {/* <SideBar />  */}
            <div className="home-section">
                <Switch>
                    <Route exact patch="/root/procesos/maestros-matrix" component={MatrixMaster} />
                    <Route exact patch="/root/procesos/maestros-matrix/editar-datos-matrix" component={MatrixMaster} />
                    <Redirect to="/root/procesos/maestros-matrix" />
                </Switch>
            </div>
        </section>  
    )
}
