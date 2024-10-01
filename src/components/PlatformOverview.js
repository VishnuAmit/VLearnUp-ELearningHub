import PropTypes from "prop-types";

const PlatformOverview = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-8 box-border max-w-full text-center text-25xl text-navy font-poppins ${className}`}
    >
      <div className="w-[1300px] flex flex-col items-start justify-start gap-[32px] max-w-full mq850:gap-[16px]">
        <div className="w-[1288px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1090px] flex flex-col items-end justify-start gap-[21px] max-w-full">
            <div className="w-[1077px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-[429px] relative text-inherit leading-[180%] font-semibold font-inherit inline-block max-w-full mq450:text-7xl mq450:leading-[48px] mq850:text-16xl mq850:leading-[63px]">
                <span>What is</span>
                <span className="text-darkslateblue-300">{" "}</span>
                <span className="text-orange">VLearnUp?</span>
                <span className="text-turquoise"></span>
              </h1>
            </div>
            <b className="self-stretch relative text-5xl tracking-[0.02em] leading-[180%] text-slategray-100 mq450:text-lgi mq450:leading-[35px]">
              VLearnUp is a comprehensive platform that empowers educators to
              create and manage online classes. It allows them to store course
              materials, handle assignments, quizzes, and exams, track due
              dates, grade student work, and provide detailed feedback—all
              seamlessly integrated in one place
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-center gap-[88px] max-w-full text-13xl text-white mq450:gap-[22px] mq850:gap-[44px] mq1225:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-start pt-[135px] pb-32 pr-8 pl-5 box-border gap-[17px] bg-[url('/public/image-23@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[398px] max-w-full mq450:pt-[88px] mq450:pb-[83px] mq450:box-border mq850:min-w-full">
            <img
              className="w-[612px] h-[408px] relative object-cover hidden max-w-full"
              alt=""
              src="/image-23@2x.png"
            />
            <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-lgi mq850:text-7xl">
              FOR INSTRUCTORS
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pr-1 pl-[5px]">
              <button className="cursor-pointer pt-[22px] px-9 pb-[21px] bg-[transparent] rounded-61xl flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-400 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                <div className="h-20 w-[283px] relative rounded-61xl box-border hidden border-[1px] border-solid border-white" />
                <b className="relative text-3xl font-poppins text-white text-center z-[1]">
                  Start a class today
                </b>
              </button>
            </div>
          </div>
          <div className="w-[600px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[600px] max-w-full mq850:min-w-full mq1225:flex-1">
            <div className="self-stretch flex flex-col items-center justify-start pt-[132px] pb-[126px] pr-5 pl-[21px] relative gap-[17px] mq450:pt-[86px] mq450:pb-[82px] mq450:box-border">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[3px] left-[0px] rounded-xl bg-silver">
                  <div className="absolute top-[0px] left-[0px] rounded-xl bg-silver w-full h-full hidden" />
                </div>
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full [mix-blend-mode:linear-burn] z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-[25px]">
                <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq450:text-lgi mq850:text-7xl">
                  FOR STUDENTS
                </h3>
              </div>
              <button className="cursor-pointer [border:none] pt-6 px-[39px] pb-[23px] bg-midnightblue rounded-61xl flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-darkslateblue-400">
                <div className="h-20 w-[283px] relative rounded-61xl bg-midnightblue hidden" />
                <b className="relative text-3xl font-poppins text-white text-center z-[1]">
                  Enter access code
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PlatformOverview.propTypes = {
  className: PropTypes.string,
};

export default PlatformOverview;
