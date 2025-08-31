import InputData from './InputData';
import Checkbox from './Checkbox';
import TextInputs from './TextInputs';
import RadioButtons from './RadioButtons';
import CustomSelect from './CustomSelect';

import { useState } from 'react';

const ControledForms = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    checkbox: false,
    radio: '',
    select: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <h1 style={{ backgroundColor: 'lightpink' }}>Controlled Forms</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <TextInputs value={value} setValue={setValue} />
        <Checkbox value={value} setValue={setValue} />
        <RadioButtons value={value} setValue={setValue} />
        <CustomSelect value={value} setValue={setValue} />

        <button style={{ width: '100px' }} type='submit'>
          Submit
        </button>
      </form>

      <InputData value={value} />
    </>
  );
};

export default ControledForms;
