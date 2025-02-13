import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '@/styles/PinkBox.module.css';
import YouTubePlayer from './YouTubePlayer';

export default function PinkBox() {
  const router = useRouter();

  return (
    <div className={styles.container_pink}>
    <div className={styles.video}>
        <YouTubePlayer videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
    </div>
    <div className={styles.container}>
    <div>
   <div className={styles.button}>Video tutorial</div>
    </div>
        <div className={styles.button_rond}><Image src="play.svg" width={20} height={20} />  </div> 
    </div>     
   </div>
  );
}
