// lib/mailchimp.js
import fetch from "isomorphic-unfetch";

const subscribe = async (email) => {
  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID;
  const DATACENTER = API_KEY.split("-")[1];
  const API_URL = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const res = await fetch(API_URL, {
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
    headers: {
      Authorization: `apikey ${API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const json = await res.json();

  if (res.status >= 400) {
    throw new Error(json.detail);
  }

  return json;
};

export default subscribe;
