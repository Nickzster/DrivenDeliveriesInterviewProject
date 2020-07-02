import React from "react";

interface Props {
  values: string[];
  name: string;
  onChange: Function;
  repaint: Function;
  pretty: string;
}

const DropDown: React.FC<Props> = (props) => {
  const { values, name, onChange, repaint, pretty } = props;
  return (
    <>
      <p>{pretty}</p>
      <select name={name} onChange={(e) => onChange(e)}>
        {values.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
      <button onClick={(e) => repaint(e)}>Update</button>
    </>
  );
};

export default DropDown;
