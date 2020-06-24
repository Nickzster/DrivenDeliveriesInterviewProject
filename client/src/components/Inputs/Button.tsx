import React from "react";

interface Props {
  label: string;
  cb: Function;
}

const Button: React.FC<Props> = (props) => {
  const { label, cb } = props;
  return (
    <div>
      <button onClick={(e) => cb(e)}>{label}</button>
    </div>
  );
};

export default Button;
