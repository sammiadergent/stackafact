// pages/game.js
import React from 'react';
import Header from '@/components/header';
import Player from '@/components/player';
import styles from '@/styles/Game.module.css';
import { useRouter } from 'next/router';

export default function GamePage() {
  const router = useRouter();
  const { aantal } = router.query;
  const aantalSpelers = parseInt(aantal, 10);

  // Wacht tot de query-parameter beschikbaar is
  if (!aantal || isNaN(aantalSpelers)) {
    return <div>Laden...</div>;
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.big_text}>who’s turn?</h1>
        <Player aantalSpelers={aantalSpelers} />
      </div>
    </div>
  );
}
