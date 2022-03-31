import React from 'react';
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__wrapper}>
        <li className={styles.nav__item}>
          <button className={styles.nav__icon}>&#9829;</button>
          <button className={styles.nav__menu}>메뉴 항목</button>
        </li>
        <li className={styles.nav__item}>
          <button className={styles.nav__icon}>&#9829;</button>
          <button className={styles.nav__menu}>메뉴 항목</button>
        </li>
        <li className={styles.nav__item}>
          <button className={styles.nav__icon}>&#9829;</button>
          <button className={styles.nav__menu}>메뉴 항목</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
