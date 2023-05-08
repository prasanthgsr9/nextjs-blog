// pages/_app.js
import '../styles/global.css'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const privacyPolicyAccepted = Cookies.get('privacyPolicyAccepted');

    if (router.pathname !== '/disagree' && router.pathname !== '/privacy' && !privacyPolicyAccepted) {
      router.push('/privacy');
    }
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default App;
