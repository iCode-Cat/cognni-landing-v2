import { format } from 'path';
import React from 'react';
import styled from 'styled-components';

interface InputType {
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  setForm: React.Dispatch<any>;
  form: any;
  required: boolean;
}

const InputComponent = styled.input`
  width: 100%;
  height: 35px;
  padding: 1.8rem;
  border-radius: 8px;
  border: solid 1px #3333335c;
  color: #092543;
  font-size: 1.6rem;
  height: 57.2px;
  font-weight: 400;
`;

const Input = ({
  placeholder,
  type,
  name,
  setForm,
  form,
  required,
}: InputType) => {
  return (
    <InputComponent
      required={required}
      onChange={(e) => {
        setForm({
          ...form,
          [name]: e.target.value,
        });
      }}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default Input;
