import Boxcard from '../components/Boxcard'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'
import Script from "next/script";

export default function Home({ allPostsData }) {
  return (
    <>
    <Layout />
    <div className='mx-auto md:max-w3xl md:px-4 min-h-screen'>
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
        <title>ai powered education</title>
        <link rel='icon' href='public/favicon.ico'></link>
          <meta name="description" content="Create content that raises awareness among school principals and administrators about the potential of AI-driven Agile and Lean methodologies in improving educational outcomes. Discuss their crucial role in driving the adoption of these approaches and emphasize the impact they can have on school performance and student success." />
        <meta name="keywords" content="School principals, administrators, AI-driven education, Agile and Lean methodologies, future of education" />
      </Head>
      <div class="w-full px-5 md:px-10 xl:px-16 pt-4 pb-8">
       <div className="text-center pb-12 md:pb-16">
      <h1 className="text-4xl md:text-6xl font-bold font-serif-garamond text-blue-600 leading-tighter tracking-tighter mb-4" >
        The Future of Education: AI-Driven Agile and Lean Methodologies for School Leaders</h1>
        <p className="text-3xl font-serif font-medium text-lime-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
        Transform your school and empower educators with cutting-edge technologies and innovative approaches</p>
        <br></br>
       </div>

      <main className='bg-blue-400 rounded-xl p-4'>
        <Boxcard />
      </main>
      <Content />
      <div>
</div>
    </div>
      </div>
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