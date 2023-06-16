import {Formik} from 'formik';
import {useState, useContext} from 'react';
import {LogInWrapper} from './styled';
import Submit from '../Inputs/Submit';

function LogInForm() {
  async function saveValue(key: any, value: any) {
    //   await SecureStore.setItemAsync(key, value);
  }

  const handleSubmit = async (values: any) => {};

  return (
    <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit}>
      {({handleSubmit, errors, touched}) => (
        <LogInWrapper>
          <Submit handleSubmit={handleSubmit} />
        </LogInWrapper>
      )}
    </Formik>
  );
}

export default LogInForm;
