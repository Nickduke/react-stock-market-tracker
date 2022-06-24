import { useState } from 'react';

const Form = () => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === '') {
      alert(
        `Input field cannot be empty - please enter a stock ticker symbol.`
      );
    } else {
      setUserInput('');
    }
  };

  return (
    <form
      action='submit'
      onSubmit={() => {
        handleSubmit(userInput);
      }}
    >
      <label htmlFor='userSymbol'>
        Search for your favourite stock by ticker symbol:
      </label>
      <input type='text' onChange={handleInputChange} value={userInput} />
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      ></button>
    </form>
  );
};

export default Form;
