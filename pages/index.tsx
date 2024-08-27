import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles.module.css';
import cookieImage from '../public/cookie.png';

export default function Page() {
  const [clickCount, setClickCount] = useState(0);

  const handleImageClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cookie Clicker em Next.js</h1>
      <br />
      <Image
        src={cookieImage}
        alt="Clique na imagem"
        width={200}
        height={200}
        onClick={handleImageClick}
        className={`${styles['clickable-image']} ${clickCount > 0 ? styles['clicked'] : ''}`}
        loading="lazy"
      />
      <br />
      <div className={styles['flex']}>
        <p className={styles['click-quant']}>Quantidade de Cliques:</p> 
        <p className={styles['click-count']}>{clickCount}</p>
      </div>
      
    </div>
  );
}
