import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { Testimonials } from '../components/testimonials'
import Footer from '../components/Footer'

export default function Home({ allPostsData }) {
  return (
    <><Layout home>
      <Head>
        <title>Success Stories</title>
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
