import React from "react";

interface Props {
  values: string[];
  name: string;
  cb: Function;
}

const DropDown: React.FC<Props> = (props) => {
  const { values, name, cb } = props;
  return (
    <select name={name} onChange={(e) => cb(e)}>
      {values.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
};

export default DropDown;
