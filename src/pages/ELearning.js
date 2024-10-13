import MainHeader from "../components/MainHeader";
import FrameComponent4 from "../components/FrameComponent4";
import LearningPaths from "../components/LearningPaths";
import PlatformOverview from "../components/PlatformOverview";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import SmartNotesCard from "../components/SmartNotesCard";
import DiscussionScreenshot from "../components/DiscussionScreenshot";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import Testimonials from "../components/Testimonials";
import LatestUpdates from "../components/LatestUpdates";
import Footer from "../components/Footer";
import { useRef, useState } from "react";

const ELearning = () => {
  const coursesRef = useRef(null);
  const articleRef = useRef(null);
  const featuresRef = useRef(null);
  const exploreRef=useRef(null);
  const aboutRef=useRef(null);

  const [refreshDate, setRefreshDate] = useState(null);
  
  const componentAClicked = () => setRefreshDate(new Date())
  return (
    <div className="w-full items-center relative bg-white overflow-hidden flex flex-col items-end justify-start px-0 pb-0 box-border gap-[160px] leading-[normal] tracking-[normal] mq850:gap-[40px] mq1225:gap-[80px] overflow-y-scroll " style={{height: "125vh",scrollbarWidth: "none"}}>
      <MainHeader  refreshDate={refreshDate}
      coursesRef={coursesRef}
      articleRef={articleRef}
      featuresRef={featuresRef}
      exploreRef={exploreRef}
      aboutRef={aboutRef}
      />
      <FrameComponent4 componentAClicked={componentAClicked}/>
      <section className="w-[1779px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-17xl text-navy font-poppins">
        <div className="w-[837px] flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[90px] mq450:pl-5 mq450:box-border mq850:pl-[45px] mq850:box-border">
            <h2 className="m-0 relative text-inherit leading-[65px] font-semibold font-inherit mq450:text-3xl mq450:leading-[39px] mq850:text-10xl mq850:leading-[52px]">
              All-in-One E-Learning Platform
            </h2>
          </div>
          <b className="self-stretch relative text-5xl leading-[180%] text-slategray-100 text-center mq450:text-lgi mq450:leading-[35px]">
            Experience the future of education with our cloud-based e-learning
            platform powered by artificial intelligence.
          </b>
        </div>
      </section>
      <LearningPaths />
      <PlatformOverview ref={aboutRef}/>
      <FrameComponent3 />
      <FrameComponent2 ref={exploreRef}/>
      <SmartNotesCard />
      <section className="w-[1901.2px] flex flex-row items-start justify-center pt-0 px-5 pb-[33px] box-border max-w-full">
        <div className="w-[1649.2px] flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[33.8px] w-[35px] absolute !m-[0] top-[78.1px] left-[701.5px] object-contain"
            alt=""
            src="/polygon-3.svg"
          />
          <div className="h-[193px] w-[196.8px] absolute !m-[0] bottom-[7.9px] left-[-18.8px] rounded-[18.83px] bg-deepskyblue-100" />
          <DiscussionScreenshot />
          <GroupComponent />
        </div>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-8">
        <button className="cursor-pointer pt-[17px] pb-4 pr-[31px] pl-[38px] bg-[transparent] rounded-61xl flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-navy hover:bg-darkblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkblue-100">
          <div className="h-20 w-[280px] relative rounded-61xl box-border hidden border-[1px] border-solid border-navy" />
          <b className="relative text-5xl tracking-[0.02em] leading-[180%] font-nunito-sans text-navy text-left z-[1]">
            See more features
          </b>
        </button>
      </div>
      <FrameComponent ref={coursesRef}/>
      <Testimonials />
      <LatestUpdates ref={articleRef}/>
      <section className="w-full flex justify-center h-[1130px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[-230px] left-[-98px] w-[300%] h-[1360px] -scale-x-100 mq850:w-[600%]"
          alt=""
          src="/tilt.svg"
        />
        <div className="relative top-[104px] left-[477px] w-[845px] max-w-[845px  ] h-[1026px] bg-[url('/public/pngtransparentgirlusinglaptopthumbnailremovebgpreview-1-1-1@2x.png')] bg-cover bg-no-repeat bg-[top] z-[3]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
            alt=""
            src="/pngtransparentgirlusinglaptopthumbnailremovebgpreview-1-1-1@2x.png"
          />
          <div className="absolute top-[263px] left-[642px] w-[69px] h-[69px] z-[4] flex items-center justify-center">
            <img
              className="w-full h-full z-[4] object-contain absolute left-[0px] top-[8px] [transform:scale(2.159)]"
              loading="lazy"
              alt=""
              src="/group-9.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[50px] left-[74px] w-[93.8px] h-[83.2px] z-[1]"
          loading="lazy"
          alt=""
          src="/group-453.svg"
        />
      </section>
      <Footer />
    </div>
  );
};

export default ELearning;
