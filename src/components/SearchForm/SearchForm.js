import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import {
  getSearchString,
  updateSearchString,
} from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(getSearchString);
  const [inputValue, setInputValue] = useState(searchString);

  useEffect(() => {
    setInputValue(searchString);
  }, [searchString]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(inputValue));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: 10, alignItems: 'center' }}
    >
      <TextInput
        placeholder="Search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button>Search</Button>
    </form>
  );
};

export default SearchForm;
