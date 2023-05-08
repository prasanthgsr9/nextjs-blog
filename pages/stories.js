import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Testimonials } from '../components/Testimonials.tsx'
import Footer from '../components/Footer'
import Script from "next/script";

export default function Home({ allPostsData }) {
  return (
    <><Layout home>
      <Head>

<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-GD0RYEYMM3`} />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GD0RYEYMM3', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>

        <title>{siteTitle}</title>
          <meta name="description" content="Offer actionable resources and support to school principals and administrators who are ready to adopt AI-driven Agile and Lean methodologies at their schools. Provide training, guidance, and ongoing assistance to ensure successful implementation and positive outcomes. Encourage them to join a network of like-minded professionals to share experiences and best practices." />
        <meta name="keywords" content="School principals, administrators, AI-driven education, Agile and Lean methodologies, implementation guide, training and support" />

      </Head>
      <section className={utilStyles.headingMd}>
        <Testimonials />

      </section>
    </Layout>
    <Footer /></>
    
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
