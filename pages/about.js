import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Footer from '../components/Footer'
import Blog from '../components/Blog'

export default function Home({ allPostsData }) {
  return (
    <><Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <div class="bg-white py-24 sm:py-32">
  <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
    </div>
    <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://media.licdn.com/dms/image/C5603AQHPYimhtGp_lg/profile-displayphoto-shrink_800_800/0/1618802079582?e=1689206400&v=beta&t=RSjjW74CdMbHfAPqaXlcy8EoGmak3SAw0nzJIfcwQE0" alt="" />
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Prashanth</h3>
            <p class="text-sm font-semibold leading-6 text-indigo-600">Pichi pukes</p>
          </div>
        </div>
        <br></br>
        <div class="flex items-center gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://media.licdn.com/dms/image/C5103AQHqIlYY9_JCzw/profile-displayphoto-shrink_800_800/0/1541942682349?e=1689206400&v=beta&t=4AE2YpU-yAaxEyc1qI_0BIDnoVpU54zHXtX_vRS_Fuo" alt="" />
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">Pro shit</h3>
            <p class="text-sm font-semibold leading-6 text-indigo-600">NO:1 Jaffa</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
        </section>
        <Blog />
      
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
