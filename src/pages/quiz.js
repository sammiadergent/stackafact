import Link from 'next/link';
import React from 'react';
import Header from '@/components/header'
import styles from '@/styles/Quiz.module.css'
import Image from 'next/image';

export default function QuizPage() {
  return (
    <div className={styles.achtergrond}>
      <div className={styles.container}>
        <div className={styles.small_text}>(Name of player) turn</div>
        <div className={styles.big_text}>(De vraag komt hier te staan)</div>
        <div className={styles.container}>
          <div className={styles.item}>(hier zou antwoord 1 staan)</div>
          <div className={styles.item}>(hier zou antwoord 2 staan)</div>
          <div className={styles.item}>(hier zou antwoord 3 staan)</div>
          <div className={styles.item}>(hier zou antwoord 4 staan)</div>
        </div>
        <div className={styles.button}>solve</div>  
        <div className={styles.footer}><Image src="logo.svg" width={176.78} height={24.72}/> </div>
      </div>
    </div>
  );
}