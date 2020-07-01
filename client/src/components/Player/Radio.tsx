import React from "react";

interface Props {
  value: string;
  name: string;
  placeholder: string;
  cb: Function;
}

const Radio: React.FC<Props> = (props) => {
  const { name, value, placeholder, cb } = props;
  return (
    <>
      <label>{placeholder}</label>
      <input name={name} value={value} type='radio' onChange={(e) => cb(e)} />
    </>
  );
};

export default Radio;
