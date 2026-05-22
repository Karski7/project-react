import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getAllColumns } from '../../redux/store';

const List = () => {
  const columns = useSelector(getAllColumns);

  return (
    <>
      <section style={{ display: 'flex', gap: 12, marginTop: 20 }}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
    </>
  );
};

export default List;
