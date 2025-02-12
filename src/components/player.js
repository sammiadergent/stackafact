// components/player.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styles from '@/styles/Player.module.css';

const Player = ({ aantalSpelers }) => {
  // Array met alle spelers en bijbehorende styling
  const players = [
    { id: 1, name: "cherry charm’s turn to prove the fact", itemClass: Styles.item1 },
    { id: 2, name: "spicy pumpkin’s turn to prove the fact", itemClass: Styles.item2 },
    { id: 3, name: "moody blue’s turn to prove the fact", itemClass: Styles.item3 },
    { id: 4, name: "funky avocado’s turn to prove the fact", itemClass: Styles.item4 },
  ];

  // Toon enkel de eerste `aantalSpelers` spelers
  const visiblePlayers = players.slice(0, aantalSpelers);

  return (
    <div className={Styles.container}>
      {visiblePlayers.map((player) => (
        <Link 
          key={player.id} 
          href={"/team"} 
          className={`${Styles.gridItem} ${player.itemClass}`}
        >
          <div className={Styles.text}>{player.name}</div>
          <div className={Styles.align}>
            <Image src="arrow.svg" width={30} height={30} alt="arrow" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Player;
