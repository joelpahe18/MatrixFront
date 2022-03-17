import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MatrixMaster from '../components/Root/procesos/MaestrosMatrix/index';
import EditMatrixData from '../components/Root/procesos/MaestrosMatrix/EditMatrixData';


export default function DashboardRoutes() {

return (
        <div>     
            <Router>
                {/* <SideBar />  */}
                <div className="home-section">
                    <Switch>
                        <Route exact path="/root/procesos/maestros-matrix" component={MatrixMaster} />,
                        <Route exact path="/root/procesos/maestros-matrix/editar-datos-matrix/:tableName" component={EditMatrixData} />
                        <Redirect to="/root/procesos/maestros-matrix" />
                    </Switch>
                </div>
            </Router>
        </div>  
    )
}
