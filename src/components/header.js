import styles from '@/styles/Header.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = () => {
    return(
        <div className={styles.container}>  
            <Image src="logo.svg" width={83} height={89} />  
        </div >
    )  
};
export default Header;