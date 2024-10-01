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
                <span className="text-darkslateblue-300">{` `}</span>
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
          <div className="flex-1 flex flex-col items-center justify-start pt-[135px] pb-32 pr-8 pl-5 box-border gap-[17px] bg-[url('/public/image-23@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[398px] max-w-full mq450:pt-[88px] mq450:pb-[83px] hover:shadow-xl hover:bg-opacity-70 transition-all duration-300 ease-in-out">
            <img
              className="w-[612px] h-[408px] rounded-lg relative object-cover hidden max-w-full"
              alt="VLearnUp Platform Overview"
              src="/image-23@2x.png"
            />
            <h3 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq450:text-lgi mq850:text-7xl">
              FOR INSTRUCTORS
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pr-1 pl-[5px]">
              <button className="cursor-pointer flex items-center justify-center pt-4 px-8 pb-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 active:scale-95 duration-300 ease-in-out">
                <b className="relative text-xl font-poppins text-white text-center z-1">
                  Start a class today
                </b>
              </button>
            </div>
          </div>
          <div className="w-[600px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border min-w-[600px] max-w-full mq850:min-w-full mq1225:flex-1">
            <div className="self-stretch flex flex-col items-center justify-start pt-[132px] pb-[126px] pr-5 pl-[21px] relative gap-[17px] mq450:pt-[86px] mq450:pb-[82px] mq450:box-border hover:shadow-2xl hover:bg-opacity-60 transition-all duration-300 ease-in-out bg-white rounded-lg">
              <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
                <div className="absolute h-full w-full top-0 right-0 bottom-3 left-0 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 shadow-md" />
                <img
                  className="absolute h-full w-full top-0 right-0 bottom-0 left-0 object-cover rounded-xl z-1"
                  loading="lazy"
                  alt="Vector illustration"
                  src="/vector.svg"
                />
              </div>

              <div className="flex flex-row items-start justify-start py-0 pr-[26px] pl-[25px]">
                <h3 className="m-0 relative font-semibold text-4xl text-midnightblue text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:text-blue-600 z-2">
                  FOR STUDENTS
                </h3>

              </div>

              <button className="cursor-pointer flex items-center justify-center pt-4 px-8 pb-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600 active:scale-95 duration-300 ease-in-out">
                <b className="relative text-xl font-poppins text-white text-center z-1">
                  Enter Access Code
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
