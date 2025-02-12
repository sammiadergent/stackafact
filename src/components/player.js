import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Styles from '@/styles/Player.module.css';

const Player = () => {
    return(
        <div className={Styles.container}>  
            <Link href={"/team"} className={`${Styles.gridItem} ${Styles.item1}`}>
                <div className={Styles.text} >cherry charm’s turn to prove the fact</div>
                <div className={Styles.align}><Image src="arrow.svg" width={30} height={30} /></div>
            </Link>
            <Link href={"/team"} className={`${Styles.gridItem} ${Styles.item2}`}>
                <div className={Styles.text} >spicy pumpkin’s turn to prove the fact</div>
                <div className={Styles.align}><Image src="arrow.svg" width={30} height={30} /></div>
            </Link>
            <Link href={"/team"} className={`${Styles.gridItem} ${Styles.item3}`}>
                <div className={Styles.text} >moody blue’s turn to prove the fact</div>
                <div className={Styles.align}><Image src="arrow.svg" width={30} height={30} /></div>
            </Link>
            <Link href={"/team"} className={`${Styles.gridItem} ${Styles.item4}`}>
                <div className={Styles.text} >funky avocado’s turn to prove the fact</div>
                <div className={Styles.align}><Image src="arrow.svg" width={30} height={30} /></div>
            </Link>
        </div >
    )  
};
export default Player;