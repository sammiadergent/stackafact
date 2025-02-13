import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Intro.module.css';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();
  const pink2Ref = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      // Navigate to the next page after the animation completes
      router.push('/home'); // Replace '/next-page' with your target route
    };

    const pink2Element = pink2Ref.current;
    if (pink2Element) {
      pink2Element.addEventListener('animationend', handleAnimationEnd);
    }

    // Clean up the event listener on unmount
    return () => {
      if (pink2Element) {
         pink2Element.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [router]);

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.pink_1}></div>
        <div className={styles.red}></div>
        <div className={styles.green}></div>
        <div className={styles.blue}></div>
        {/* Attach the ref to the element with the longest animation */}
        <div ref={pink2Ref} className={styles.pink_2}></div>
      </div>
      <div className={styles.container_image}>
        <Image src="logo.svg" width={382} height={179} alt="Logo" />
      </div>
    </div>
  );
}
