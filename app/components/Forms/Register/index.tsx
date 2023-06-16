import React from 'react';
import {Formik} from 'formik';
import {useState, useContext} from 'react';
import {FormWrapper} from './styled';
import Submit from '../Inputs/Submit';

function RegisterForm() {
  const handleSubmit = async (values: any) => {};

  return (
    <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit}>
      {({handleSubmit, errors, touched}) => (
        <FormWrapper>
          <Submit handleSubmit={handleSubmit} />
        </FormWrapper>
      )}
    </Formik>
  );
}

export default RegisterForm;
