import React from "react";
import CheckBox from "../Inputs/CheckBox";

const ScopeItem = ({
  scopes,
  scope,
  selectedScopeCategories,
  onChange,
  forceChecked,
}) => {
  //   console.log(selectedScopeCategories);
  const { item, resourceIndex, scopeIndex } = scope;
  const { label, value, category, id, type, checked } = item;
  console.log("items:", scope);

  const handleChange = (data) => {
    onChange && onChange(data);
  };

  const isReadScope = () => {
    // value=== "read" && selectedScopeCategories
  };
  const isForceChecked = () => {
    if (forceChecked || isReadScope()) return true;
    return false;
  };
  return (
    <div>
      <CheckBox
        label={label}
        id={id}
        checked={checked}
        data={{ selectedScope: item, resourceIndex, scopeIndex }}
        name="scope"
        onChange={handleChange}
        forceChecked={isForceChecked()}
      />
    </div>
  );
};

export default ScopeItem;
