import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addCard } from '../../redux/cardsRedux';

const CardForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(addCard({ title: title.trim(), columnId: props.columnId }));
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
