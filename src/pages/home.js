import Link from 'next/link';
import React from 'react';
import Header from '@/components/header'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

export default function IntroPage() {
  return (
    <div className={styles.padding}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.big_text}>WELCOME TO [STACK A FACT]. AN INTERACTIVE GAME TO LEARN, GUESS AND CURSE. </h1>
              <Link href={"/tutorial"}>
        <div className={styles.container_pink}>
          <div>
            <div className={styles.button}>How to play</div>
          </div>
          <div className={styles.button_rond}><Image src="play.svg" width={20} height={20} />  </div>
                  </div>
        </Link>
        <Link href={"/team"}> 
        <div className={styles.container_red}>
         <div className={styles.button}>start</div>
          <div className={styles.button_rond_person}><Image src="person.svg" width={34} height={24} />  </div>
          </div>
          </Link>
      </div>
    </div>
  );
}