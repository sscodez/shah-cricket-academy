import React from "react";
import "./Form.css";
import { Link } from "react-router-dom";
const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img className="form-img-2" src="img/checkbox.png" alt="success-image" />
    </div>
  );
};

export default FormSuccess;
