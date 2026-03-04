import { useState } from 'react';
import shortid from 'shortid';

import Column from '../Column/Column';

const List = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { id: 1, title: 'This is Going to Hurt' },
        { id: 2, title: 'Interpreter of Maladies' },
      ],
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'Star Wars' },
      ],
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' },
      ],
    },
  ]);

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          cards: [...column.cards, { id: shortid(), title: newCard.title }],
        };
      }
      return column;
    });

    setColumns(columnsUpdated);
  };

  return (
    <section style={{ display: 'flex', gap: 12, marginTop: 20 }}>
      {columns.map((column) => (
        <Column
          key={column.id}
          id={column.id}
          title={column.title}
          icon={column.icon}
          cards={column.cards}
          addCard={addCard}
        />
      ))}
    </section>
  );
};

export default List;