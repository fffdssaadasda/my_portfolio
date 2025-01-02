import DownloadCv from "@/components/Buttons/DownloadCv";
import SkillsWrapper from "@/components/home/SkillsWrapper";
import WhoMe from "@/components/home/WhoMe";
import HoverLink from "@/components/HoverLink";
import PageTransition from "@/components/PageTransition";

const Page = () => {
  return <>
    <PageTransition href={`/`}>
      <WhoMe />
      <SkillsWrapper />
      <DownloadCv />
    </PageTransition>
  </>
};

export default Page;
