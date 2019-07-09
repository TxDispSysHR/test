import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Title() {
  return (
    <div align="right">
      <Link to="/spanish"><button type="button" id="btn" className="btn btn-primary">Español</button></Link>
    </div>
  );
}

export default Title