import PropTypes from "prop-types";


const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`w-[1851px] flex flex-row items-start justify-end pt-0 px-[65px] pb-[136px] box-border max-w-full text-left text-35xl text-darkorange font-poppins mq850:pb-[88px] mq850:box-border mq1225:pl-8 mq1225:pr-8 mq1225:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-center gap-[62px] max-w-full mq450:gap-[15px] mq850:gap-[31px] mq1500:flex-wrap">
        <div className="w-[681px] flex flex-col items-start justify-start gap-[34px] min-w-[681px] max-w-full mq850:gap-[17px] mq1225:min-w-full mq1500:flex-1">
          <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit z-[1] mq450:text-13xl mq850:text-24xl">
            <span>{`Personalized `}</span>
            <span className="text-white">
              learning for your unique journey.
            </span>
          </h1>
          <div className="w-[613px] flex flex-col items-start justify-start gap-[14px] max-w-full text-5xl text-white font-nunito-sans">
            <b className="w-[523px] relative leading-[160%] inline-block max-w-full z-[1] mq450:text-lgi mq450:leading-[31px]">
              VLearnUp delivers interactive, tailored education that adapts to
              your unique learning style.
            </b>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] font-poppins mq850:flex-wrap">
              <button className="cursor-pointer [border:none] py-[22px] px-[38px] bg-gray-200 rounded-61xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-gainsboro-300">
                <div className="h-20 w-[220px] relative rounded-61xl bg-gray-200 hidden" />
                <div className="relative text-5xl font-semibold font-poppins text-white text-left z-[1]">
                  Join for free
                </div>
              </button>
              <div className="flex flex-col items-start justify-start pt-8 pb-6 px-4">
                <b className="relative z-[1] mq450:text-lgi">
                  Watch how it works
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[74px] px-0 pb-0 box-border min-w-[636px] max-w-full text-5xl text-darkslategray font-nunito-sans mq850:pt-12 mq850:box-border mq850:min-w-full">
  <div className="self-stretch flex flex-col items-start justify-start gap-[95px] max-w-full mq850:gap-[24px] mq1225:gap-[47px]">
    
    {/* Card Section */}
    <div className="w-[324px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
      <div className="flex-1 backdrop-blur-lg rounded-xl bg-gray-300 flex flex-row items-start justify-start py-[15px] px-[26px] gap-[28px] z-[4] mq450:flex-wrap transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <img
            className="w-14 h-14 relative overflow-hidden shrink-0 z-[5]"
            loading="lazy"
            alt="AI Icon"
            src="/fluentemojirobot.svg"
          />
        </div>
        
        <div className="flex flex-col items-start justify-start">
          <div className="h-[34px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
            <b className="mb-[-9px] relative tracking-[0.02em] leading-[180%] inline-block min-w-[26px] shrink-0 z-[1] mq450:text-lg mq450:leading-[35px]">
              AI
            </b>
          </div>
          <div className="relative text-xl tracking-[0.02em] leading-[180%] font-semibold shrink-0 z-[1] mq450:text-base mq450:leading-[29px]">
            Personalization
          </div>
        </div>
      </div>
    </div>
    
    {/* Notification Section */}
    <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="flex flex-row items-start justify-start py-5 pr-4 pl-[26px] box-border relative gap-[24px] max-w-full z-[4] mq850:flex-wrap transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          
          <div className="h-full w-full absolute m-0 top-0 right-0 bottom-0 left-0 backdrop-blur-lg rounded-xl bg-gray-300" />
          
          <div className="w-[50px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
            <div className="self-stretch h-[50px] relative rounded-lg bg-chocolate z-[1]">
              <img
                className="absolute top-[10px] left-[10px] w-[30px] h-[30px] overflow-hidden z-[2]"
                loading="lazy"
                alt="Email Icon"
                src="/email-2-1.svg"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-start justify-start max-w-full">
            <div className="w-[254px] h-[34px] flex flex-row items-start justify-between shrink-0 gap-[20px]">
              <b className="relative tracking-[0.02em] leading-[44px] z-[1] mq450:text-lg mq450:leading-[35px]">
                Congratulations
              </b>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="w-5 h-5 relative">
                  <div className="absolute top-0 left-0 rounded-[50%] bg-silver w-full h-full z-[1]" />
                  <img
                    className="absolute top-0 left-0 w-full h-full z-[2]"
                    alt="Group Icon"
                    src="/group-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="relative text-xl tracking-[0.02em] leading-[180%] font-semibold shrink-0 z-[1] mq450:text-base mq450:leading-[29px]">
              Welcome to the VLearnUp family!
            </div>
          </div>
        </div>
      </div>

      {/* Class Card Section */}
      <div className="w-[390px] backdrop-blur-lg rounded-xl bg-gray-300 flex flex-row items-start justify-start pt-5 px-[26px] pb-7 box-border gap-[22px] max-w-full z-[4] mq450:flex-wrap transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        
        <div className="w-[57px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
          <div className="self-stretch h-[59px] relative">
            <img
              className="absolute top-0 left-0 w-14 h-14 object-cover z-[1]"
              loading="lazy"
              alt="Ellipse"
              src="/ellipse@2x.png"
            />
            <div className="absolute top-[39px] left-[37px] rounded-[50%] bg-mediumseagreen box-border w-5 h-5 z-[2] border border-antiquewhite" />
          </div>
        </div>
        
        <div className="flex flex-col items-start justify-start gap-[19px]">
          <div className="flex flex-col items-start justify-start">
            <b className="relative tracking-[0.02em] leading-[44px] z-[1] mq450:text-lg mq450:leading-[35px]">
              JavaScript Class
            </b>
            <div className="relative text-xl tracking-[0.02em] leading-[180%] font-semibold z-[1] mt-[-10px] mq450:text-base mq450:leading-[29px]">
              Today at 10.00 AM
            </div>
          </div>
          <button className="cursor-pointer border-none pt-3 pb-[11px] pr-[47px] pl-12 bg-palevioletred-100 rounded-full flex flex-row items-start justify-start whitespace-nowrap z-[1] transition-transform duration-300 hover:bg-palevioletred-200 hover:scale-105">
            <b className="relative text-xl inline-block font-nunito-sans text-white text-left min-w-[85px] z-[1]">
              Join Now
            </b>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
