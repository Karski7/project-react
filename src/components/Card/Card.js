import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import styles from './Card.module.scss';
import { removeCard, toggleCardFavorite } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.card}>
      <span>{props.title}</span>
      <div className={styles.actions}>
        <button
          className={clsx(styles.button, props.isFavorite && styles.favorite)}
          type="button"
          aria-label="Toggle favorite"
          onClick={() => dispatch(toggleCardFavorite(props.id))}
        >
          <span className="fa fa-star-o" />
        </button>
        <button
          className={styles.button}
          type="button"
          aria-label="Remove card"
          onClick={() => dispatch(removeCard(props.id))}
        >
          <span className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default Card;
