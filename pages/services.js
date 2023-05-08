import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Footer from '../components/Footer'
import Services from '../components/Services'

export default function Home({ allPostsData }) {
  return (
    <><Layout home>
      <Head>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-GD0RYEYMM3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-GD0RYEYMM3');
</script>
        <title>{siteTitle}</title>
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
