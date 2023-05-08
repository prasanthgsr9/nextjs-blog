// pages/privacy.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/privacy.module.css';

const PrivacyPage = () => {
  const router = useRouter();
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    setHasAgreed(localStorage.getItem('privacyPolicyAccepted') === 'true');
  }, []);

  const handleAgree = () => {
    localStorage.setItem('privacyPolicyAccepted', 'true');
    router.push('/nextjs-blog');
  };

  const handleDisagree = () => {
    localStorage.setItem('privacyPolicyAccepted', 'false');
    router.push('/nextjs-blog/disagree');
  };

  return (
    <div className={styles.container}>
      <h2>Privacy Policy</h2>
      {/* Your privacy policy content here */}
      <p>...</p>
      {!hasAgreed && (
        <div className={styles.actions}>
          <div className={styles.button}> <button onClick={handleAgree}>Agree</button> </div>
          <div className={styles.button}> <button onClick={handleDisagree}>Disagree</button> </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPage;
