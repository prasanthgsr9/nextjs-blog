import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Add the rest of the code for the contact us section */}
      {/* ... */}
      {/* Add the newsletter form after the contact us section */}
      <div className="container mx-auto px-6 py-12">
        <NewsletterForm />
      </div>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
