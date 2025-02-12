import Link from 'next/link';
import React from 'react';
import Header from '@/components/header'
import Player from '@/components/player'
import styles from '@/styles/Game.module.css'
import Image from 'next/image';

export default function GamePage() {
  return (
    <div >
          <Header />
          <div className={styles.container}>
              <h1 className={styles.big_text}>who’s turn? </h1>
              <Player/>
        
          </div>
            
    </div>
  );
}