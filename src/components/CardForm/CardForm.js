import { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = (props) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    props.action({ title }, props.columnId);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        placeholder="Add new card..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;