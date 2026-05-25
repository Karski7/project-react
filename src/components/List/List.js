import { shallowEqual, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import PageTitle from '../PageTitle/PageTitle';
import SearchForm from '../SearchForm/SearchForm';
import { getColumnsByList } from '../../redux/columnsRedux';
import { getListById } from '../../redux/listsRedux';

const List = () => {
  const { listId } = useParams();
  const listData = useSelector((state) => getListById(state, listId));
  const columns = useSelector(
    (state) => getColumnsByList(state, listId),
    shallowEqual
  );

  if (!listData) return <Navigate to="/" />;

  return (
    <>
      <PageTitle>{listData.title}</PageTitle>
      <p>{listData.description}</p>
      <SearchForm />
      <section style={{ display: 'flex', gap: 12, marginTop: 20 }}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </>
  );
};

export default List;
