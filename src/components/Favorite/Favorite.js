import { shallowEqual, useSelector } from 'react-redux';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCards } from '../../redux/cardsRedux';
import styles from '../Column/Column.module.scss';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards, shallowEqual);

  return (
    <>
      <PageTitle>Favorite cards</PageTitle>
      {cards.length === 0 ? (
        <p>No cards...</p>
      ) : (
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </ul>
        </article>
      )}
    </>
  );
};

export default Favorite;
