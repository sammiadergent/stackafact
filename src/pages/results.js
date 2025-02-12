import Link from 'next/link';
import React from 'react';
import Header from '@/components/header'
import styles from '@/styles/Results.module.css'
import Image from 'next/image';

export default function IntroPage() {
  return (
    <div className={styles.padding}>
      <Header />
      <div className={styles.container}>
              <h1 className={styles.big_text}>404:we are out of facts </h1>
              <div className={styles.align}>
                  <a className={styles.medium_titel}>Thank You for playing</a>
                 <Link href={"/team"}> <div className={styles.button}>Go back</div></Link>
              </div>

      </div>
    </div>
  );
}