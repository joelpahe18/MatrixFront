import React from "react";
import { Image } from "semantic-ui-react";
import "./Nav.scss";
import PropType from "prop-types";

export default function Nav({ version = "" }) {
  return (
    <>
      <nav className="nav justify-content-center">
        <div className="col-1">
          <Image src="http://matrix.lasamericas.com.co/matrix/images/medical/root/cliame.jpg" />
        </div>
        <div className="col-11">
          <li className="nav-item nav-matrix-master mx-auto">
            <h2 className="title">EDITAR DATOS TABLA</h2>
          </li>
          <li className="nav-item nav-last-modification">
            <span className="version">versión: {version}</span>
          </li>
        </div>
      </nav>
    </>
  );
}

Nav.prototype = {
  value: PropType.string,
};
