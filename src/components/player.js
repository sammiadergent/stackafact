// components/Player.js
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Styles from '@/styles/Player.module.css';

const Player = ({ aantalSpelers }) => {
  // Voorbeeld-array met 4 spelers (als er minder spelers zijn, tonen we alleen de eerste 'aantalSpelers')
  const players = [
    { name: "cherry charm", turnText: "cherry charm’s turn to prove the fact", playerIndex: 0, questionIndex: 0 },
    { name: "spicy pumpkin", turnText: "spicy pumpkin’s turn to prove the fact", playerIndex: 1, questionIndex: 1 },
    { name: "moody blue", turnText: "moody blue’s turn to prove the fact", playerIndex: 2, questionIndex: 2 },
    { name: "funky avocado", turnText: "funky avocado’s turn to prove the fact", playerIndex: 3, questionIndex: 3 },
  ];

  // We tonen enkel de spelers die nodig zijn (bijv. 2, 3 of 4)
  const visiblePlayers = players.slice(0, aantalSpelers);

  return (
    <div className={Styles.container}>
      {visiblePlayers.map((player) => (
        <Link 
          key={player.playerIndex} 
          href={{
            pathname: '/quiz',
            query: { 
              playerIndex: player.playerIndex, 
              questionIndex: player.questionIndex,
              aantal: aantalSpelers
            },
          }}
          className={`${Styles.gridItem} ${Styles[`item${player.playerIndex + 1}`]}`}
        >
          <div className={Styles.text}>
            {player.turnText}
          </div>
          <div className={Styles.align}>
            <Image src="/arrow.svg" width={30} height={30} alt="arrow" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Player;
