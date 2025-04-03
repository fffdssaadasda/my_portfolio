import AboutMeContent from "@/components/AboutMeContent";
import DownloadCv from "@/components/Buttons/DownloadCv";
import SkillsWrapper from "@/components/home/SkillsWrapper";
import WhoMe from "@/components/home/WhoMe";
import PortfolioPage from "@/components/PortfolioPage";
import Testmonials from "@/components/Testmonials";
import { projects } from "@/constants/Projects";
const Page = () => {
  return <>
    <WhoMe />
    {/* <SkillsWrapper /> */}
    {/* <DownloadCv /> */}
    <AboutMeContent />
    <PortfolioPage projects={projects} />
    <Testmonials />
  </>
};

export default Page;
