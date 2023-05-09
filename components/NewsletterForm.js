import { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = 'ac7b6fd68f15f3655df14a68ab7656ca-us10';
  const LIST_ID = 'a0f7b5d259';
  const API_URL = `https://${API_KEY.split('-')[1]}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `apikey ${API_KEY}`,
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe.');
      }

      setSubmitted(true);
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="newsletter-form">
      <h3 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h3>
      {submitted ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded border border-gray-300 mb-4"
            placeholder="Your Email Address"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded font-bold"
          >
            Subscribe
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
