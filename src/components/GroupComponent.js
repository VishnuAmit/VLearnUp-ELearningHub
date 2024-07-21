import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[591.3px] !m-[0] absolute bottom-[-75px] left-[103.6px] shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-[18.83px] bg-white flex flex-col items-end justify-start pt-0 px-0 pb-[18.8px] box-border gap-[36.7px] max-w-full z-[3] text-left text-sm-3 text-white font-nunito-sans ${className}`}
    >
      <div className="self-stretch h-[368.1px] relative shadow-[0px_18.8px_47.08px_rgba(47,_50,_125,_0.1)] rounded-[18.83px] bg-white hidden" />
      <div className="self-stretch rounded-t-[18.83px] rounded-b-none bg-whitesmoke flex flex-row items-start justify-start pt-[6.1px] px-7 pb-[6.2px] box-border max-w-full z-[1]">
        <div className="h-[24.5px] w-[591.3px] relative rounded-t-[18.83px] rounded-b-none bg-whitesmoke hidden max-w-full" />
        <img
          className="h-[12.2px] w-[49px] relative z-[2]"
          alt=""
          src="/group-102.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[37px] pl-[38px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[23.9px] max-w-full">
          <div className="w-[504px] flex flex-row items-start justify-end py-0 px-[15px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[23px] max-w-full mq850:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-[10.9px] px-0 pb-0 box-border min-w-[135px] mq850:flex-1">
                <img
                  className="self-stretch h-[193px] relative rounded-xl max-w-full overflow-hidden shrink-0 object-cover z-[4]"
                  alt=""
                  src="/image-21@2x.png"
                />
              </div>
              <div className="h-[197.7px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
                <div className="w-[0.9px] flex-1 relative box-border z-[1] border-r-[0.9px] border-solid border-lavender-200" />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0 box-border min-w-[135px] mq850:flex-1">
                <div className="self-stretch flex flex-row items-start justify-start pt-[159px] px-3.5 pb-[8.1px] relative z-[1]">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-contain"
                    alt=""
                    src="/image-22@2x.png"
                  />
                  <div className="w-[131.9px] [backdrop-filter:blur(13.26px)] rounded-[6.63px] bg-lightsteelblue-400 flex flex-row items-end justify-start py-1 px-1.5 box-border gap-[1.4px] z-[1]">
                    <div className="h-[25.9px] w-[131.9px] relative [backdrop-filter:blur(13.26px)] rounded-[6.63px] bg-lightsteelblue-400 hidden" />
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1">
                      <div className="w-[5.3px] h-[7px] relative">
                        <div className="absolute top-[2.4px] left-[0px] rounded-[0.66px] bg-white w-0.5 h-[4.6px] z-[1]" />
                        <div className="absolute top-[0px] left-[3.3px] rounded-[0.66px] bg-white w-0.5 h-[7px] z-[1]" />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[6.6px]">
                      <div className="flex flex-col items-start justify-start pt-[4.6px] px-0 pb-0">
                        <div className="w-0.5 h-[9.3px] relative rounded-[0.66px] bg-white z-[1]" />
                      </div>
                      <div className="flex-1 relative font-semibold z-[1]">
                        Natasha Evans
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[55.5px] text-3xl-6 text-slategray-100">
            <div className="flex-1 flex flex-col items-start justify-start min-w-[171px]">
              <div className="h-[33px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                <b className="mb-[-2.8px] relative leading-[160%] inline-block shrink-0 z-[1] mq450:text-lg mq450:leading-[29px]">
                  Private Discussion
                </b>
              </div>
              <b className="self-stretch relative text-base-9 leading-[160%] text-darkgray shrink-0 z-[1]">
                Your video is not visible to others.
              </b>
            </div>
            <div className="w-[197.7px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border text-xl-7 text-white font-poppins">
              <div className="self-stretch rounded-[56.49px] [background:linear-gradient(105.5deg,_#f55454,_#e6422b)] flex flex-row items-start justify-start pt-[12.3px] pb-[11.2px] pr-[18px] pl-[19px] z-[1]">
                <div className="h-[27.3px] w-[172.3px] relative [filter:blur(50.84px)] rounded-[56.49px] bg-tomato hidden" />
                <div className="h-[54.6px] w-[197.7px] relative rounded-[56.49px] [background:linear-gradient(105.5deg,_#f55454,_#e6422b)] hidden" />
                <b className="h-[31.1px] flex-1 relative inline-block z-[2] mq450:text-mid">
                  End Discussion
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
