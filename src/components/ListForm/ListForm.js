import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(addList({ title: title.trim(), description: description.trim() }));
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
      }}
    >
      <TextInput
        placeholder="List title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextInput
        placeholder="List description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
