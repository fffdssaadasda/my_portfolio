import Loader from '@/components/Loader'
import PortfolioPage from '@/components/PortfolioPage'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Loader color='#fff' />}>
      <PortfolioPage />
    </Suspense>
    // <div>page</div>
  )
}

export default page