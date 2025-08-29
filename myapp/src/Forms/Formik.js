import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikComponent = () => {
  const onSubmit = values => {
    console.log(values);
  };

  const validateForm = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Your Name';
    }

    if (!values.email) {
      errors.email = 'Your Email';
    }

    return errors;
  };

  return (
    <div>
      <h1>Form with Formik</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validate={validateForm}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor='name'>Name:</label>
            <Field type='text' id='name' name='name' />
            <ErrorMessage name='name' component='div' />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <Field type='text' id='email' name='email' />
            <ErrorMessage name='email' component='div' />
          </div>
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikComponent;
