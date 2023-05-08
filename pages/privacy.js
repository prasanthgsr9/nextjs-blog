// pages/privacy.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/privacy.module.css';
import Cookies from 'js-cookie';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      {hasAgreed && (
        <Navbar/>
      )}
      <h1>Privacy Policy for Your Website Name</h1>
    <p>Last updated: Date</p>

    <h2>1. Introduction</h2>
    <p>Welcome to Your Website Name. This privacy policy outlines our data processing practices and your options regarding the ways in which your personal data is used. If you have any requests concerning your personal information or any questions about these practices, please contact us.</p>

    <h2>2. Information We Collect</h2>
    <p>We collect personal information from you through the use of forms, such as your name, email address, school information, and potentially other contact details. We also collect information automatically about your visit to our site, which may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views, and website navigation paths.</p>

    <h2>3. How We Collect Information</h2>
    <p>We collect information directly from you when you choose to participate in our offers, create an account on our website, call or email us, or otherwise provide information directly to us. We also use cookies and other standard web technology to collect information indirectly from you.</p>

    <h2>4. How We Use Information</h2>
    <p>We process personal information collected via Your Website Name for the purposes of:</p>
    <ul>
      <li>Providing and personalizing our services</li>
      <li>Dealing with your inquiries and requests</li>
      <li>Providing you with information about products and services</li>
      <li>Conducting market research</li>
    </ul>

    <h2>5. How We Share Information</h2>
    <p>We will not share your personal information with third parties without your prior consent, except as publicly stated in this policy or as required by law.</p>

    <h2>6. User Rights</h2>
    <p>You have the right to ask for a copy of your personal data, free of charge, in an electronic or portable format. You also have the right to ask us to amend or change your personal information if it is incorrect or out of date.</p>

    <h2>7. Security Measures</h2>
    <p>We are committed to the security of your personal information. We use various security technologies to protect your personal information from unauthorized access, use, or disclosure.</p>

    <h2>8. Cookie Policy</h2>
    <p>We use cookies to store and collect information about your use of our site. Cookies are small text files stored on the device you are using to access this website. For more information on how we use cookies, please refer to our Cookie Policy.</p>

    <h2>9. Children's Privacy</h2>
    <p>We do not knowingly collect personal information from children under the age of 13. If we learn that we have personal information on a child under the age of 13, we will delete that information from our systems.</p>

    <h2>10. Changes to the Privacy Policy</h2>
    <p>We may update this Privacy Policy from time to time. We encourage you to periodically review this policy to stay informed about how we are protecting your information.</p>
      <h2>11. Contact Information</h2>
<p>If you have any questions about this privacy policy or our treatment of your personal data, please write to us by email at [Your Email] or by mail to [Your Mailing Address].</p>

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
      {hasAgreed && (
        <Footer/>
      )}
    </div>
  );
};

export default PrivacyPage;
