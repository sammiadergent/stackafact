import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/Back.module.css';

export default function BackButton() {
  const router = useRouter();

  return (
    <div className={styles.text} onClick={() => router.back()}>
      <Image src="Vector.svg" width={20} height={20} alt="Back" /> <p>back</p>
    </div>
  );
}
