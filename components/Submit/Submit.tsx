import React from 'react';
import styled from 'styled-components';
import { ButtonStyle } from '../Card';
import Input from '../Input';

const SubmitStyle = styled.form`
  display: grid;

  grid-template-columns: 1fr;
  gap: 22px;
  background: #0096f5;
  width: 100%;
  padding: 4rem;
  border-radius: 8px;
  justify-self: center;
  @media (min-width: 40em) {
    max-width: 500px;
    justify-self: flex-end;
    grid-template-columns: 1fr 1fr;
    input:nth-child(1) {
      grid-column: 1 / 2;
    }
    input:nth-child(2) {
      grid-column: 2/ 3;
    }
    input,
    button {
      grid-column: 1 / 3;
      justify-self: center;
    }
  }
`;

const Submit = () => {
  return (
    <SubmitStyle>
      <Input name='test' placeholder='test' type='text' />
      <Input name='test' placeholder='test' type='text' />
      <Input name='test' placeholder='test' type='text' />
      <ButtonStyle>Submit</ButtonStyle>
    </SubmitStyle>
  );
};

export default Submit;
