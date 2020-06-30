import React, { useState, useEffect } from "react";
import Button from "../components/Inputs/Button";
import TextInput from "../components/Inputs/TextInput";
import { getAllData, sendData } from "../lib/network/Test";

interface IMessage {
  id: string;
  message: string;
}

const TestScreen = () => {
  const [form, updateForm] = useState({
    id: "",
    message: "",
  });
  const [errors, updateErrors] = useState({
    id: "",
    message: "",
  });
  const [messages, updateMessages] = useState([
    {
      id: "",
      message: "",
    },
  ]);
  const onChange = (e: any) => {
    updateForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: any) => {
    console.log("Hooray!");
    sendData(form.id, form.message)
      .then((res) => {
        let newArr = [
          {
            id: res.id,
            message: res.message,
          },
        ];
        updateMessages(messages.concat(newArr));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllData()
      .then((data) => updateMessages(data))
      .catch(() => updateMessages([]));
  }, []);
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
      <div className='messages'>
        {!!messages &&
          messages.map((message: any) => (
            <p key={message.id}>
              {message.id} says {message.message}
            </p>
          ))}
      </div>
    </div>
  );
};

export default TestScreen;
