import PropTypes from "prop-types";
import { forwardRef } from "react";
const LatestUpdates = forwardRef(({ className = "" }, ref) => {
  return (
    <section ref={ref}
      className={`w-[1907px] flex flex-row items-start justify-center pt-0 px-5 pb-[106px] box-border max-w-full text-left text-17xl text-darkslateblue-300 font-nunito-sans mq850:pb-[45px] mq850:box-border mq1225:pb-[69px] mq1225:box-border ${className}`}
    >
      <div className="w-[1557px] flex flex-col items-start justify-start gap-[100px] max-w-full mq450:gap-[25px] mq850:gap-[50px]">
        <div className="w-[1520px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1086px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[29px] pl-5">
              <h2 className="m-0 relative text-inherit leading-[65px] font-bold font-inherit mq450:text-3xl mq450:leading-[39px] mq850:text-10xl mq850:leading-[52px]">
                Latest Updates and Insights
              </h2>
            </div>
            <b className="relative text-5xl leading-[180%] text-slategray-100 text-center mq450:text-lgi mq450:leading-[35px]">
              Stay updated with the latest developments in educational
              technology and e-learning innovations.
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[151px] max-w-full text-xl text-white font-poppins mq450:gap-[19px] mq850:gap-[38px] mq1225:gap-[75px] mq1500:flex-wrap">
          <div className="w-[609px] flex flex-col items-start justify-start gap-[47px] min-w-[609px] max-w-full mq850:gap-[23px] mq850:min-w-full mq1500:flex-1">
            <img
              className="self-stretch h-[333px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/image-16@2x.png"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start py-0.5 pr-[34px] pl-[35px]">
                <div className="h-10 w-[130px] relative rounded-61xl bg-lightseagreen hidden" />
                <b className="relative tracking-[0.02em] leading-[180%] inline-block min-w-[61px] z-[1] mq450:text-base mq450:leading-[29px]">
                  NEWS
                </b>
              </div>
              <b className="self-stretch relative text-7xl leading-[180%] text-gray-100 mq450:text-2xl mq450:leading-[37px]">
                Innovative E-Learning Platform Secures $20 Million in Funding
              </b>
              <div className="self-stretch flex flex-col items-start justify-start text-slategray-100">
                <b className="self-stretch relative tracking-[0.02em] leading-[180%] mq450:text-base mq450:leading-[29px]">
                  EduTech Innovations, known for its groundbreaking virtual
                  classroom tools, has just secured $20 million in Series B
                  funding to enhance interactive learning experiences...
                </b>
                <b className="relative [text-decoration:underline] tracking-[0.02em] leading-[180%] inline-block min-w-[116px] z-[1] mt-[-28px] mq450:text-base mq450:leading-[29px]">
                  Read more
                </b>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[40px] min-w-[518px] max-w-full text-lg mq450:gap-[20px] mq850:flex-wrap mq850:min-w-full">
            <div className="w-[280px] flex flex-col items-start justify-start gap-[50px] min-w-[280px] mq450:gap-[25px] mq850:flex-1">
              <div className="self-stretch rounded-xl flex flex-row items-start justify-end pt-[146px] px-5 pb-5 relative bg-[url('/public/press-items@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="h-[200px] w-[280px] relative rounded-xl object-cover hidden z-[0]"
                  alt=""
                  src="/rectangle-331@2x.png"
                />
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-17@2x.png"
                />
                <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start pt-1 pb-0.5 pr-1 pl-3 whitespace-nowrap z-[2]">
                  <div className="h-[34px] w-[154px] relative rounded-61xl bg-lightseagreen hidden" />
                  <b className="relative tracking-[0.02em] z-[1]">
                    PRESS RELEASE
                  </b>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-row items-start justify-end pt-[146px] px-5 pb-5 relative bg-[url('/public/rectangle-341@2x.png')] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="h-[200px] w-[280px] relative rounded-xl object-cover hidden z-[0]"
                  alt=""
                  src="/rectangle-341@2x.png"
                />
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-darkslateblue-500 z-[1]" />
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-18@2x.png"
                  />
                </div>
                <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start pt-1 pb-[3px] pr-[19px] pl-[26px] z-[3]">
                  <div className="h-[34px] w-[100px] relative rounded-61xl bg-lightseagreen hidden" />
                  <b className="relative tracking-[0.02em] inline-block min-w-[55px] z-[1]">
                    NEWS
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end pt-[146px] px-5 pb-5 relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/single-image@2x.png"
                  />
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-darkslateblue-500 z-[1]" />
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-19@2x.png"
                  />
                </div>
                <div className="rounded-61xl bg-lightseagreen flex flex-row items-start justify-start pt-1 pb-[3px] pr-[19px] pl-[26px] z-[3]">
                  <div className="h-[34px] w-[100px] relative rounded-61xl bg-lightseagreen hidden" />
                  <b className="relative tracking-[0.02em] inline-block min-w-[55px] z-[1]">
                    NEWS
                  </b>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[78px] min-w-[310px] max-w-full text-3xl text-gray-100 mq850:gap-[39px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <b className="self-stretch relative leading-[180%] mq450:text-lg mq450:leading-[32px]">
                  Breakthrough AI Tool Revolutionizes Personalized Learning
                </b>
                <b className="w-[447px] relative text-xl tracking-[0.02em] leading-[180%] inline-block text-slategray-100 max-w-full mq450:text-base mq450:leading-[29px]">
                  EduAI has introduced a new AI-driven tool that customizes...
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <b className="self-stretch relative leading-[180%] mq450:text-lg mq450:leading-[32px]">
                  Major Partnership Announced Between EdTech Giants
                </b>
                <b className="w-[447px] relative text-xl tracking-[0.02em] leading-[180%] inline-block text-slategray-100 max-w-full mq450:text-base mq450:leading-[29px]">
                  LearningTech Inc. and TeachPlus have announced a strategic
                  partnership...
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <b className="self-stretch relative leading-[180%] mq450:text-lg mq450:leading-[32px]">
                  Virtual Reality Enhances Remote Learning Experiences
                </b>
                <b className="w-[447px] relative text-xl tracking-[0.02em] leading-[180%] inline-block text-slategray-100 max-w-full mq450:text-base mq450:leading-[29px]">
                  VR4Education has launched a new virtual reality solution that
                  brings...
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

LatestUpdates.propTypes = {
  className: PropTypes.string,
};

export default LatestUpdates;

