import CodeTabs from "@/components/CodeArea";
import Loader from "@/components/Loader";
import BackgroundMeteors from "@/components/ui/backgroundmeteors";
import { projects } from "@/constants/Projects";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const SkillsWrapper = dynamic(() => import("@/components/home/SkillsWrapper"))
const PortfolioPage = dynamic(() => import("@/components/PortfolioPage"))
const AboutMeContent = dynamic(() => import("@/components/AboutMeContent"))
const WhoMe = dynamic(() => import("@/components/home/WhoMe"))
const Testmonials = dynamic(() => import("@/components/Testmonials"))
const Page = () => {
  return <>
    <Suspense fallback={<Loader color="#000" height="100px" width="100px" />}>
      <WhoMe />
      <AboutMeContent />
      <PortfolioPage projects={projects} />
      <Testmonials />
    </Suspense>
  </>
};

export default Page;
