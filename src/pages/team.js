import Link from 'next/link';
import React from 'react';
import Header from '@/components/header'
import styles from '@/styles/Team.module.css'
import Image from 'next/image';

export default function TeamPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.big_text}>[START]</h1>
        <a className={styles.medium_titel}>number of players:</a>
        <div className={styles.grid_container}>
          <div className={`${styles.item} ${styles.item1}`}><div className={styles.rondje}>2</div></div>
          <div className={`${styles.item} ${styles.item2}`}><div className={styles.rondje}>3</div></div>
          <div className={`${styles.item} ${styles.item3}`}><div className={styles.rondje}>4</div></div>
        </div>
        <a className={styles.medium_titel}>Choose your team of tower builders: 2, 3, or 4; The more, the wobblier!</a>
      </div>
    </div>
  );
}