import React from "react";

interface Props {
  onChange: Function;
  onSubmit: Function;
  name: string;
  value: any;
}

const ChangeSize: React.FC<Props> = (props) => {
  const { onChange, onSubmit, name, value } = props;
  return (
    <div>
      <input
        type='number'
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder='Insert size here'
      ></input>
      <button onClick={(e) => onSubmit(e)}>Change Size</button>
    </div>
  );
};

export default ChangeSize;
