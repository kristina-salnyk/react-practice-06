import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    onSubmit(inputText);
    setInputText('');
  };

  const onInputChange = event => {
    setInputText(event.target.value);
  };

  return (
    <SearchFormStyled onSubmit={onFormSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={inputText}
        onChange={onInputChange}
      />
    </SearchFormStyled>
  );
};
