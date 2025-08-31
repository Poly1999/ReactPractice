import { useRef } from 'react';

const UncontrolledForms = () => {
  const formRef = useRef(null);
  const handleSubmit = event => {
    event.preventDefault();

    console.log(formRef.current.firstName.value);
    console.log(formRef.current.email.value);

    formRef.current.reset();
  };
  return (
    <>
      <h1 style={{ backgroundColor: 'lightpink' }}>Uncontrolled Forms</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '200px',
        }}
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <label style={{ marginRight: '10px' }} htmlFor='firstName'>
          Name
        </label>
        <input type='text' name='firstName' id='firstName' />
        <label style={{ marginRight: '10px' }} htmlFor='email'>
          Email
        </label>
        <input type='email' name='email' id='email' />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForms;
