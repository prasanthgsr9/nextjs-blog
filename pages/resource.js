import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Footer from '../components/Footer'
import Video from '../components/Video'
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
          <meta name="description" content="Develop informative content that highlights the benefits of incorporating AI-driven Agile and Lean methodologies into school operations and learning environments. Address the concerns and questions school leaders may have and provide practical guidance and resources to help them navigate the challenges of implementing these approaches." />
        <meta name="keywords" content="School principals, administrators, AI-driven education, Agile and Lean methodologies, student success" />

      </Head>
      <section className={utilStyles.headingMd}>
      <Video />
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
