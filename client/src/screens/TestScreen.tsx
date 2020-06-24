import React, { useState, useEffect } from "react";
import Button from "../components/Inputs/Button";
import TextInput from "../components/Inputs/TextInput";

const TestScreen = () => {
  const [form, updateForm] = useState({
    id: "",
    message: "",
  });
  const [errors, updateErrors] = useState({
    id: "",
    message: "",
  });
  const [messages, updateMessages] = useState({});
  const onChange = (e: any) => {
    updateForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: any) => {
    console.log("Hooray!");
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div className='new-message'>
        <p>Enter an id and a message! </p>
        <TextInput
          placeholder='Name'
          name='id'
          value={form.id}
          error={errors.id}
          cb={onChange}
        />
        <TextInput
          placeholder='Message'
          name='message'
          value={form.message}
          error={errors.message}
          cb={onChange}
        />
        <Button label='Submit' cb={onSubmit} />
      </div>
      <div className='messages'></div>
    </div>
  );
};

export default TestScreen;
