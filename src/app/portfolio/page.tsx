import { getAllProjects } from '@/actions/getAllProjects'
import Loader from '@/components/Loader'
import PortfolioPage from '@/components/PortfolioPage'
import { Project } from '@/types/projectType'
import React, { Suspense } from 'react'
export const metadata = {
  title: "Projects Page"
}
const page = async () => {
  const projects: Project[] | undefined = await getAllProjects()

  return (
    <Suspense fallback={<Loader color='#fff' />}>
      <PortfolioPage projects={projects} />
    </Suspense>
    // <div>page</div>
  )
}

export default page