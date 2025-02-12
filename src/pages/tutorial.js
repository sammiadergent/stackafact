import Link from 'next/link';
import React from 'react';
import Header from '@/components/header'
import styles from '@/styles/Tutorial.module.css'
import Image from 'next/image';

export default function TutorialPage() {
  return (
    <div className={styles.padding}>
      <Header />
            <div className={styles.container}>
             <h1 className={styles.big_text}>[TUTORIAL] HOW TO PLAY AND ENJOY THE GAME. </h1>
            <div className={styles.container_pink}>
             <div>
            <div className={styles.button}>Video tutorial</div>
             </div>
            <div className={styles.button_rond}><Image src="play.svg" width={20} height={20} />  </div>  
            </div>
            <div className={styles.container_green}>
                  <div>
                      <div className={styles.big_text_2}>NEEDS</div>
                      <div className={styles.small_text}>2-4 players</div>
                      <div className={styles.small_text}>1 game master</div>
                  </div>
                  <div><Image src="arrow.svg" width={30} height={30} /></div>
              </div>
              <div className={styles.container_red}>
                  <div>
                      <div className={styles.big_text_2}>WHAT'S IN <br/>THE BOX</div>
                      <div className={styles.small_text}>4 sets of factstackers</div>
                      <div className={styles.small_text}>1 qr code to the webside</div>
                      <div className={styles.small_text}>1 rulebook</div>
                  </div>
                  <div><Image src="arrow.svg" width={30} height={30} /></div>
              </div>
              <Link className={styles.buttonwutton} href={"/team"}>
                  <div className={styles.start} >START</div>
              </Link>
              <h1 className={styles.big_text}>[HOW TO PLAY] </h1>
              <a className={styles.smaller_text}>SETUP PHASE </a>
              <div className={styles.list}>
                  <ul>
                      <li>Scan the qr code or go to the website [playstackafact.io] and start the gamemaster</li>
                      <li>Each player grabs their own set of Fact Stackers.</li>
                  </ul>
              </div>
              <a className={styles.smaller_text}>START OF THE GAME</a>
              <a className={styles.kleine_titel}>Let's Get Stacking!</a>
              <div className={styles.list}>
                  <ul>
                    <li>Enter the number of players in the app</li>
                    <li>Toss the box away!</li>
                    <li>The youngest player starts the question randomizer in the app</li>
                    <li>A trivia question pops up—answer it if you dare!</li>
                  </ul>
              </div>
              <a className={styles.kleine_titel}>Building Your Tower of Knowledge!</a>
              <div className={styles.list}>
                  <ul>
                      <li> Got it right? Pick up your first box and stack it on top of the biggest one.</li>
                      <li>Missed it? No worries! The player to your right gets a shot (if they miss, the next person tries—until someone gets it right or everyone gives up).</li>
                      <li>After each right answer, a quick explanation will reveal why the correct answer is the answer.</li>
                  </ul>
              </div>
              <a className={styles.kleine_titel}>Winning!</a>
              <div className={styles.list}>
                  <ul>
                      <li> The first player to stack all their boxes without toppling over wins!</li>
                      <li>If your tower crashes, you have to rebuild from the last stable.</li>
                  </ul>
              </div>
              <div className={styles.red_text} >So, do you have the brains and the balance to win Stack-A-Fact? Let's find out!</div>
              <Link className={styles.buttonwutton} href={"/team"}>
                  <div className={styles.start} >START</div>
              </Link>
          </div>
          
    </div>
  );
}