import React from "react";

interface Props {
  name: string;
  placeholder: string;
  value: string;
  error: string;
  cb: Function;
}

const TextInput: React.FC<Props> = (props) => {
  const { placeholder, name, value, error, cb } = props;
  return (
    <div>
      <p>{error}</p>
      <label>{placeholder}</label>
      <input type='text' name={name} value={value} onChange={(e) => cb(e)} />
    </div>
  );
};

export default TextInput;
