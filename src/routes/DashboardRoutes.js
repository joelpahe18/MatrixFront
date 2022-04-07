import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MatrixMaster from '../components/Root/procesos/MaestrosMatrix/index';
import EditMatrixData from '../components/Root/procesos/MaestrosMatrix/EditMatrixData';
import Inicio from '../pages/Inicio';


export default function DashboardRoutes() {

return (
        <div>     
            <Router>
                {/* <SideBar />  */}
                <div className="home-section">
                    <Switch>
                        <Route exact path="/root/procesos/maestros-matrix" component={MatrixMaster} />,
                        <Route exact path="/root/procesos/maestros-matrix/editar-datos-matrix/:tableName" component={EditMatrixData} />
                        <Route exact path="/inicio" component={Inicio} />
                        <Redirect to="/inicio" />
                    </Switch>
                </div>
            </Router>
        </div>  
    )
}
