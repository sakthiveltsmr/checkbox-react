import React from "react";
import { Form } from "reactstrap";

const FormWrapper = ({ Children }) => {
  return <Form>{Children}</Form>;
};

export default FormWrapper;
