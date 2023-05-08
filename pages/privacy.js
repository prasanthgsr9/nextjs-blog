// pages/privacy.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/privacy.module.css';
import Cookies from 'js-cookie';

const PrivacyPage = () => {
  const router = useRouter();
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    setHasAgreed(Cookies.get('privacyPolicyAccepted') === 'true');
  }, []);

  const handleAgree = () => {
    Cookies.set('privacyPolicyAccepted', 'true', { expires: 365 });
    router.push('/');
  };

  const handleDisagree = () => {
    Cookies.set('privacyPolicyAccepted', 'false', { expires: 365 });
    router.push('/disagree');
  };

  return (
    <div className={styles.container}>
      <h2>Privacy Policy</h2>
      {/* Your privacy policy content here */}
      <p>...</p>
      {!hasAgreed && (
        <div className={styles.actions}>
          <div className={styles.button}>
            <button onClick={handleAgree}>Agree</button>
          </div>
          <div className={styles.button}>
            <button onClick={handleDisagree}>Disagree</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivacyPage;
