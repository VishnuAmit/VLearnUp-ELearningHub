import PropTypes from "prop-types";

const LearningPaths = ({ className = "" }) => {
  return (
    <section
      className={`w-[1786px] flex flex-row items-start justify-center pt-0 px-5 pb-[9px] box-border max-w-full text-center text-11xl text-darkslateblue-300 font-poppins ${className}`}
    >
      <div className="w-[1470px] flex flex-row flex-wrap items-start justify-center gap-[60px] max-w-full mq850:gap-[30px]">
        <div className="flex-1 shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white flex flex-col items-end justify-start pt-[122px] pb-[50px] pr-[37px] pl-9 box-border gap-[24px] min-w-[337px] max-w-full mq450:pt-[79px] mq450:pb-8 mq450:box-border mq450:min-w-full">
          <div className="w-[450px] h-[430px] relative shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-4 pl-[18px]">
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit z-[1] mq450:text-lg mq850:text-5xl">
              <p className="m-0">Personalized Learning</p>
              <p className="m-0">{"Paths "}</p>
            </h3>
          </div>
          <b className="self-stretch relative text-xl leading-[180%] text-slategray-100 z-[1] mq450:text-base mq450:leading-[29px]">
            AI creates personalized learning paths to fit each student’s unique
            needs, enhancing engagement and overall success.
          </b>
        </div>
        <div className="flex-1 shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white flex flex-col items-end justify-start pt-[122px] pb-[50px] pr-[37px] pl-9 box-border relative gap-[24px] min-w-[337px] max-w-full mq450:pt-[79px] mq450:pb-8 mq450:box-border mq450:min-w-full">
          <div className="w-[450px] h-[430px] relative shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white hidden max-w-full z-[0]" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[13px] pl-[21px] box-border max-w-full">
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-lg mq850:text-5xl">{"Virtual Classrooms & Collaboration"}</h3>
          </div>
          <b className="self-stretch relative text-xl leading-[180%] text-slategray-100 z-[1] mq450:text-base mq450:leading-[29px]">
            Participate in live video sessions, join discussion forums, and
            collaborate on projects from anywhere in the world.
          </b>
          <div className="w-[1109px] h-[100px] !m-[0] absolute top-[-57px] right-[-335px] flex flex-row items-start justify-between gap-[20px] z-[2]">
            <div className="h-[100px] w-[100px] relative min-h-[100px] flex items-center justify-center">
              <img
                className="h-full w-full object-contain absolute left-[0px] top-[10px] [transform:scale(1.8)]"
                loading="lazy"
                alt=""
                src="/group-455.svg"
              />
            </div>
            <div className="h-[100px] w-[111px] relative">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[100px] z-[1] flex items-center justify-center">
                <img
                  className="h-full w-full z-[1] object-contain absolute left-[0px] top-[16px] [transform:scale(1.8)]"
                  alt=""
                  src="/group-459.svg"
                />
              </div>
              <img
                className="absolute top-[24px] left-[23px] w-[55px] h-11 overflow-hidden"
                loading="lazy"
                alt=""
                src="/users-1.svg"
              />
            </div>
            <div className="w-[100px] flex flex-row items-start justify-start">
              <div className="h-[100px] flex-1 relative">
                <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_40px_rgba(54,_61,_136,_0.06)] rounded-[50%] bg-deepskyblue-500 w-full h-full" />
                <img
                  className="absolute top-[27px] left-[33px] w-[33px] h-[46px] overflow-hidden z-[1]"
                  loading="lazy"
                  alt=""
                  src="/fileinvoice-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white flex flex-col items-end justify-start pt-[122px] pb-[50px] pr-[37px] pl-9 box-border gap-[24px] min-w-[337px] max-w-full mq450:pt-[79px] mq450:pb-8 mq450:box-border mq450:min-w-full">
          <div className="w-[450px] h-[430px] relative shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[17px] pl-[18px] box-border max-w-full">
            <b className="flex-1 relative inline-block max-w-full z-[1] mq450:text-lg mq850:text-5xl">{"Real-Time Feedback & Assessments"}</b>
          </div>
          <b className="self-stretch relative text-xl leading-[180%] text-slategray-100 z-[1] mq450:text-base mq450:leading-[29px]">
            Instant feedback on assignments with AI-powered automated grading
            ensures consistency, accuracy, and saves valuable time.
          </b>
        </div>
      </div>
    </section>
  );
};

LearningPaths.propTypes = {
  className: PropTypes.string,
};

export default LearningPaths;
