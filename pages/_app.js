// pages/_app.js
import '../styles/global.css'
// pages/_app.js
// pages/_app.js
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== '/nextjs-blog/disagree' && router.pathname !== '/nextjs-blog/privacy' && !localStorage.getItem('privacyPolicyAccepted')) {
      router.push('/nextjs-blog/privacy');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default App;
