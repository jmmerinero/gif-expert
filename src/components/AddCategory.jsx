import { useState } from 'react'

export const AddCategory = ({ setCategories, onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (ev) => {
    setInputValue(ev.target.value);
  };

  const emitEvent = (ev) => {
    ev.preventDefault();
    if (!inputValue.trim().length) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form
      // onSubmit={onInputSubmit}
      onSubmit={emitEvent}
    >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
