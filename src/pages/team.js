// pages/team.js
import Link from 'next/link';
import React from 'react';
import Header from '@/components/header';
import styles from '@/styles/Team.module.css';
import Image from 'next/image';

export default function TeamPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.big_text}>[START]</h1>
        <p className={styles.medium_titel}>number of players:</p>
        <div className={styles.grid_container}>
          <Link 
            href={{ pathname: '/game', query: { aantal: 2 } }} 
            className={`${styles.item} ${styles.item1}`}
          >
            <div className={styles.rondje}>2</div>
          </Link>
          <Link 
            href={{ pathname: '/game', query: { aantal: 3 } }} 
            className={`${styles.item} ${styles.item2}`}
          >
            <div className={styles.rondje}>3</div>
          </Link>
          <Link 
            href={{ pathname: '/game', query: { aantal: 4 } }} 
            className={`${styles.item} ${styles.item3}`}
          >
            <div className={styles.rondje}>4</div>
          </Link>
        </div>
        <p className={styles.medium_titel}>
          Choose your team of tower builders: 2, 3, or 4; The more, the wobblier!
        </p>
      </div>
    </div>
  );
}
