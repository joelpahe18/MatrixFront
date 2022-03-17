import React, { useState } from 'react';
import DataTable from '../../../General/DataTable';
import './MatrixMaster.scss';
import useMatrixMaster from './useMatrixMaster';


function MatrixMaster() {
 const { info, columns, pending, } = useMatrixMaster();

    return(
        <section>
            <nav className="nav justify-content-center">
                <li className="nav-item">
                    Editar datos tabla 
                </li>
            </nav>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="Tabopc">Tabopc</option>
                    <option value="Tabtab">Tabtab</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
            <div className="container">
                <div className="row">
                    <div className="col">
                            <DataTable 
                                title="Opciones"
                                columns={columns}
                                info={info} 
                                progressPending={pending}
                            />
                    </div>
                </div>
            </div>
        </section>
        );
}

export default MatrixMaster;

