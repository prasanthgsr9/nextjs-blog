// pages/_app.js
import '../styles/global.css'
// pages/_app.js
// pages/_app.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/disagree' && router.pathname !== '/privacy' && !localStorage.getItem('privacyPolicyAccepted')) {
      router.push('/privacy');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default App;
