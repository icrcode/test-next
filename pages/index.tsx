// pages/index.tsx

import React, { useState, useEffect } from 'react';
import styles from '../styles.module.css';

const Page = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className={styles.container}>
      <h1 className={styles.clock}>Horário de Brasília: {currentTime}</h1>
    </div>
  );
};

export default Page;
