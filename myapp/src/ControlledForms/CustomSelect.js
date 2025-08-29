const CustomSelect = ({ value, setValue }) => {
  const selectOptions = [
    { id: 1, value: 'Polina' },
    { id: 2, value: 'Tony' },
    { id: 3, value: 'Mark' },
    { id: 4, value: 'German' },
  ];
  const handleSelectChange = event => {
    const select = event.target.value;
    setValue(prevState => ({ ...prevState, select }));
  };
  return (
    <div>
      <label style={{ marginRight: '10px' }} htmlFor='select'>
        Select
      </label>
      <select onChange={handleSelectChange} name='select' id='select'>
        {selectOptions.map(option => (
          <option key={option.id}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
