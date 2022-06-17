import React from "react";
import { FormGroup } from "reactstrap";
import CheckBox from "../Inputs/CheckBox";

const Resource = ({ resource, onChange, forceChecked }) => {
  const { id, index, checked } = resource;

  const handleChange = (data) => {
    onChange && onChange(data);
  };
  return (
    <FormGroup check>
      <CheckBox
        label={index}
        id={id}
        checked={checked}
        name="resource"
        forceChecked={forceChecked}
        data={{ resourceIndex: index }}
        onChange={handleChange}
      />
    </FormGroup>
  );
};

export default Resource;
