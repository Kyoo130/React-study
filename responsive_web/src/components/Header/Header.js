import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <h1 className={styles.header__start}>
          <button className={styles.header__hamburger}>&#9776;</button>
          <span className={styles.header__title}>YouTube</span>
        </h1>
        <div className={styles.header__center}>
          <form className={styles.header__form} onSubmit="return false;">
            <input className={styles.header__text} placeholder="보고싶은 동영상"/>
            <button className={styles.header__button}>검색</button>
          </form>
        </div>
        <div className={styles.header__end}>
          <button className={styles.header__search}>&#128269;</button>
          <img className={styles.header__profile} src="/assets/images/1.png" alt="프로필"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
