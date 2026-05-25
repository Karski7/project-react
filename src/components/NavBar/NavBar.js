import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const activeClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.content}>
          <Link to="/" className={styles.logo} aria-label="Home">
            <span className="fa fa-tasks" />
          </Link>
          <ul className={styles.links}>
            <li>
              <NavLink to="/" className={activeClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/favorite" className={activeClass}>
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeClass}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
