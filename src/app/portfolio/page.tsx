import Loader from '@/components/Loader'
import PortfolioPage from '@/components/PortfolioPage'
import { projects } from '@/constants/Projects'
import Head from 'next/head'
import React, { Suspense } from 'react'
export const metadata = {
  title: "Projects Page"
}
const page = async () => {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="this is Yosef Arafa web developer portfolio page" />
      </Head>
      <Suspense fallback={<Loader color='#fff' />}>
        <PortfolioPage projects={projects} />
      </Suspense>
    </>
  )
}

export default page