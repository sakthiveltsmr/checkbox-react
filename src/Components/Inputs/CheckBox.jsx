import React from "react";
import { Label } from "reactstrap";

const CheckBox = ({
  label,
  id,
  name,
  onChange,
  data,
  forceChecked,
  checked,
}) => {
  const isChecked = () => {
    return forceChecked ? forceChecked : !!checked;
  };
  return (
    <Label>
      <input
        type="checkbox"
        name={name}
        checked={isChecked()}
        onChange={() => onChange(data)}
        disabled={forceChecked}
      />
      {label}
    </Label>
  );
};

export default CheckBox;
