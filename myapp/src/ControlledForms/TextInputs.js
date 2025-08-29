const TextInputs = ({ value, setValue }) => {
  const handleNameChange = event => {
    const name = event.target.value;

    setValue(prevState => ({ ...prevState, name }));
  };

  const handleEmailChange = event => {
    const email = event.target.value;
    setValue(prevState => ({ ...prevState, email }));
  };
  return (
    <>
      <div>
        <label style={{ marginRight: '10px' }} htmlFor='firstName'>
          Name
        </label>
        <input
          onChange={handleNameChange}
          value={value.name}
          type='text'
          name='firstName'
          id='firstName'
        />
      </div>

      <div>
        <label style={{ marginRight: '10px' }} htmlFor='email'>
          Email
        </label>
        <input
          onChange={handleEmailChange}
          value={value.email}
          type='email'
          name='email'
          id='email'
        />
      </div>
    </>
  );
};

export default TextInputs;
