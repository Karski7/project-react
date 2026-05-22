import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addColumn } from '../../redux/store';

const ColumnForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    dispatch(
      addColumn({
        title: title.trim(),
        icon: icon.trim() || 'list',
      })
    );

    setTitle('');
    setIcon('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 20 }}
    >
      <TextInput
        placeholder="Column title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextInput
        placeholder="Icon name..."
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
