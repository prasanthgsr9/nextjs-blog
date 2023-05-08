import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Footer from '../components/Footer'
import Services from '../components/Services'
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
          <meta name="description" content="Share content that helps school leaders compare and evaluate the impact of different AI-driven Agile and Lean education solutions on their schools. Present case studies, research findings, and success stories to demonstrate the positive effects and ROI of these methodologies on school performance and student outcomes." />
        <meta name="keywords" content="School principals, administrators, AI-driven education, Agile and Lean methodologies, evaluation, ROI" />

      </Head>
      <section className={utilStyles.headingMd}>
        <Services />
      </section>
    </Layout>
    <Footer />
    </>
    
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
