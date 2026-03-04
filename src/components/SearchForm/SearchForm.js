import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => (
  <form style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <TextInput placeholder="Search..." />
    <Button>Search</Button>
  </form>
);

export default SearchForm;