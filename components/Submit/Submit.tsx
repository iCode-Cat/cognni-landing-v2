import React from 'react';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { ButtonStyle } from '../Card';
import Input from '../Input';
import RichContent from '../RichContent';

const SubmitStyle = styled.form`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  background: #0096f5;
  width: 100%;
  padding: 4rem;
  border-radius: 8px;
  justify-self: center;

  .submit_result {
    display: grid;
    place-items: center;
    position: absolute;
    background: #ffffff78;
    height: 100%;
    width: 100%;
    font-size: 1.9rem;
    font-weight: 600;
    color: #333;
    padding: 2rem;
  }

  .submit_rich {
    grid-column: 1 / 3;
  }

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

const Submit = ({ submitForm, sanity }: any) => {
  const [form, setForm] = React.useState<any>({
    campaign_id: sanity.campaignId,
  });

  const { runAxios, loading, error, data } = useFetch(
    'http://localhost:3333/api/submit/save',
    'POST',
    form
  );

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [loading, error, data] = await runAxios();
  };

  return (
    <SubmitStyle onSubmit={submitHandler}>
      {submitForm.input.map((inp: any) => (
        <Input
          key={inp._key}
          name={inp.name}
          placeholder={`${inp.placeholder}${inp.required ? '*' : ''}`}
          type={inp.type}
          required={inp.required || false}
          setForm={setForm}
          form={form}
        />
      ))}
      <ButtonStyle disabled={loading}>{submitForm.buttonText}</ButtonStyle>
      <div className='submit_rich'>
        <RichContent content={sanity.submitForm.consent} />
      </div>
      {loading ||
        error ||
        (data && (
          <div className='submit_result'>
            {loading && <p>SENDING...</p>}
            {data.msg && !error && <p>Your data saved!</p>}
            {error && <p>An error occured.</p>}
          </div>
        ))}
    </SubmitStyle>
  );
};

export default Submit;
