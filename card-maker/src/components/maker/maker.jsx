import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Kyoo',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'kyoo@abc.com',
      message: 'go for it',
      fileName: 'Kyoo',
      fileURL: null,
    },
    {
      id: '2',
      name: 'Kyoo2',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'kyoo@abc.com',
      message: 'go for it',
      fileName: 'Kyoo',
      fileURL: 'Kyoo.png',
    },
    {
      id: '3',
      name: 'Kyoo3',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'kyoo@abc.com',
      message: 'go for it',
      fileName: 'Kyoo',
      fileURL: null,
    },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = card => {
    console.log(card);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
