// pages/disagree.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/disagree.module.css';

const DisagreePage = () => {
  return (
    <div className={styles.container}>
      <h1>We're sorry to see you go...</h1>
      <p>Unfortunately, to use our website, you must agree to our privacy policy.</p>
      <p>If you change your mind, you can <Link href="/nextjs-blog/privacy"><div className={styles.a}> <a>return to the privacy policy page</a></div></Link> and accept our privacy policy.</p>
    </div>
  );
};

export default DisagreePage;
