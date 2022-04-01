import React, {useState} from 'react';
import styles from './Thumbs.module.css'

const Thumbs = () => {
  const [items, setItems] = useState([
    {id: 1, content: "cat"},
    {id: 2, content: "cat"},
    {id: 3, content: "cat"},
    {id: 4, content: "cat"},
    {id: 5, content: "cat"},
    {id: 6, content: "cat"},
    {id: 7, content: "cat"},
    {id: 8, content: "cat"},
    {id: 9, content: "cat"},
    {id: 10, content: "cat"},
    {id: 11, content: "cat"},
    {id: 12, content: "cat"},
  ]);

  return (
    <section>
      <div className={styles.thumbs__wrapper}>
        {items.map((item, index) => {
          return (
            <div className={styles.thumbs__item} key={index}>
              <img className={styles.thumbs__thumbnail} src="/assets/images/thumbnail.jpeg" alt="thumbnail"/>
              <div className={styles.thumbs__info}>
                <img className={styles.thumbs__profile} src="/assets/images/1.png" alt="프로필"/>
                <div className={styles.thumbs__text}>
                  <h3 className={styles.thumbs__text__title}>영상 제목</h3>
                  <p className={styles.thumbs__text__owner}>게시자</p>
                  <p className={styles.thumbs__text__anal}>조회수 100회 &#183; 1시간 전</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Thumbs;
