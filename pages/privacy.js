// pages/privacy.js
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
    <div className="container mx-auto px-4">
      {hasAgreed && (
        <Navbar />
      )}
            <h1 className="text-4xl font-bold mb-8">MyWebClass Privacy Policy</h1>
      <p class="text-xl mb-4">Effective Date: 04-18-2023</p>

<p>Welcome to MyWebClass ("we," "us," or "our"). This Privacy Policy outlines our data processing practices and your options regarding the ways in which your personal data is used. If you have any requests concerning your personal information or any questions about these practices, please contact us.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
<p>We are committed to protecting your privacy and ensuring that your personal information is collected and used appropriately, transparently, and according to applicable laws.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
<p>We collect personal information from you through the use of forms, such as your name, email address, school information, and potentially other contact details. We also collect information automatically about your visit to our site, which may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views, and website navigation paths.</p>

<h3 class="text-xl font-semibold mt-4 mb-2">2.1 Privacy Policy for Email Subscriptions</h3>
<p>When you subscribe to our email communications, we may collect the following personal information:</p>
<ul class="list-disc list-inside ml-4">
  <li>Contact Information: This includes your name and email address.</li>
  <li>Subscription Preferences: This includes the types of email communications you have opted to receive from us.</li>
  <li>Usage Information: We may also collect information about how you interact with our email communications, such as whether you open the emails or click on any links.</li>
</ul>

<h2 class="text-2xl font-bold mt-8 mb-4">3. How We Collect Information</h2>
<p>We collect information directly from you when you choose to participate in our offers, create an account on our website, call or email us, or otherwise provide information directly to us. We also use cookies and other standard web technology to collect information indirectly from you.</p>

<h2 class="text-2xl font-bold mt-8 mb-4">4. How We Use Information</h2>
<p>We process personal information collected via MyWebClass for the purposes of:</p>
<ul class="list-disc list-inside ml-4">
  <li>Providing and personalizing our services</li>
  <li>Dealing with your inquiries and requests</li>
  <li>Providing you with information about products and services</li>
  <li>Conducting market research</li>
</ul>

<h3 class="text-xl font-semibold mt-4 mb-2">4.1 How We Use Informationfor Email Subscriptions</h3>
<p>We use your personal information for the following purposes related to email subscriptions:</p>
<ul class="list-disc list-inside ml-4">
<li>To send you email communications that you have subscribed to, including newsletters, promotions, and updates.</li>
<li>To personalize and tailor our email communications based on your preferences.</li>
<li>To analyze and improve our email marketing strategies, ensuring that our communications are relevant and engaging.</li>
<li>To comply with any applicable laws and regulations related to email subscriptions, including the CAN-SPAM Act and the General Data Protection Regulation (GDPR).</li>
</ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">5. How We Share Information</h2>
        <p>We will not share your personal information with third parties without your prior consent, except as publicly
            stated in this policy or as required by law.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. User Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside ml-4">
            <li>Request a copy of your personal data, free of charge, in an electronic or portable format.</li>
            <li>Request that we amend or change your personal information if it is incorrect or out of date.</li>
            <li>Request the deletion of your personal data or restrict its processing, subject to applicable laws.</li>
            <li>Withdraw your consent to the processing of your personal data at any time, where applicable.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Security Measures</h2>
        <p>We are committed to the security of your personal information. We use various security technologies and
            procedures to protect your personal information from unauthorized access, use, or disclosure.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookie Policy</h2>
        <p>We use cookies to store and collect information about your use of our site. Cookies are small text files
            stored on the device you are using to access this website. For more information on how we use cookies,
            please refer to our Cookie Policy.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. Children's Privacy</h2>
        <p>We do not knowingly collect personal information from children under the age of 13. If we learn that we have
            personal information on a child under the age of 13, we will delete that information from our systems.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to the Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We encourage you to periodically review this policy to
            stay informed about how we are protecting your information. Your continued use of our services after any
            changes to this Privacy Policy constitutes your acceptance of the updated Privacy Policy.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Information</h2>
        <p>If you have any questions about this Privacy Policy, our email subscription practices, or our treatment of
            your personal data, please write to us by email at gs2366@njitedu or by mail to 115 logan ave Jersey city NJ USA.</p>

        <p className="mt-8">Last Updated: 05-08-2023</p>


        {!hasAgreed && (
        <div className="flex mt-8">
          <button onClick={handleAgree} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">
            Agree
          </button>
          <button onClick={handleDisagree} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Disagree
          </button>
        </div>
      )}
      {hasAgreed && (
        <Footer />
      )}
    </div>
  );
};

export default PrivacyPage;
