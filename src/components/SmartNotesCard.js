import PropTypes from "prop-types";

const SmartNotesCard = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[88.6px] pr-[66px] pl-5 box-border max-w-full text-left text-21xl text-navy font-nunito-sans mq850:pb-[38px] mq850:box-border mq1225:pr-[33px] mq1225:pb-[58px] mq1225:box-border ${className}`}
    >
      <div className="w-[1515.5px] flex flex-col items-start justify-start pt-0 pb-[45px] pr-0 pl-[13px] box-border relative gap-[47px] max-w-full mq850:gap-[23px] mq850:pb-5 mq850:box-border mq1225:pb-[29px] mq1225:box-border">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1500:flex-wrap">
            <div className="w-[568px] flex flex-col items-start justify-start pt-[157px] px-0 pb-0 box-border min-w-[568px] max-w-full mq450:pt-[102px] mq450:box-border mq850:min-w-full mq1500:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[84px] max-w-full mq450:gap-[21px] mq850:gap-[42px]">
                <h2 className="m-0 w-[393px] relative text-inherit leading-[160%] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[38px] mq850:text-13xl mq850:leading-[51px]">
                  <span>Smart Notes</span>
                  <span className="text-darkslateblue-300">{` &`}</span>
                  <span className="text-orange"> OCR</span>
                </h2>
                <b className="self-stretch relative text-3xl tracking-[0.09em] leading-[180%] font-poppins text-slategray-100 mq450:text-lg mq450:leading-[32px]">
                  Upload class resources and handwritten notes and detect
                  missing parts in your notes. Enhance learning with quizzes on
                  your handwritten material.
                </b>
              </div>
            </div>
            <div className="h-[707px] w-[697.1px] relative min-w-[697.1px] max-w-full mq850:min-w-full mq1500:flex-1">
              <div className="absolute top-[0px] left-[0px] w-[697.1px] h-[536px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[12px] top-[0px] [transform:scale(1.034)]"
                  alt=""
                  src="/group-122.svg"
                />
              </div>
              <img
                className="absolute top-[81px] left-[124px] w-[523px] h-[626px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/pngtransparentgirlusinglaptopthumbnailremovebgpreview-1-1-2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1415px] flex flex-col items-start justify-start gap-[21.1px] max-w-full text-12xl text-darkslateblue-100 font-poppins">
          <div className="flex flex-row items-start justify-start py-0 px-[71px]">
            <div className="h-[23px] w-[23px] relative rounded-[50%] bg-sandybrown" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1225:flex-wrap">
            <div className="w-[522.2px] flex flex-row items-end justify-start gap-[40.3px] min-w-[522.2px] max-w-full mq850:flex-wrap mq850:gap-[20px] mq850:min-w-full mq1225:flex-1">
              <div className="flex-1 flex flex-row items-start justify-start relative min-w-[303px] max-w-full">
                <div className="h-[99.6px] w-[99.6px] absolute !m-[0] top-[-18.2px] left-[-46px] rounded-[50%] bg-royalblue-100" />
                <div className="flex-1 shadow-[0px_9.1px_43.69px_rgba(40,_43,_110,_0.1)] rounded-[18.21px] bg-white flex flex-col items-start justify-start pt-[38.3px] pb-[315.5px] pr-3 pl-[38px] box-border gap-[11.7px] max-w-full z-[1] mq850:pt-[25px] mq850:pb-[205px] mq850:box-border mq1225:flex-1">
                  <div className="w-[465.6px] h-[562.4px] relative shadow-[0px_9.1px_43.69px_rgba(40,_43,_110,_0.1)] rounded-[18.21px] bg-white hidden max-w-full" />
                  <button className="cursor-pointer [border:none] pt-[6.7px] pb-[7.7px] pr-8 pl-[33px] bg-lightsteelblue-100 rounded-[72.82px] flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-lightsteelblue-200">
                    <div className="h-[47.9px] w-[174.4px] relative rounded-[72.82px] bg-lightsteelblue-100 hidden" />
                    <b className="relative text-xl leading-[33.5px] inline-block font-poppins text-steelblue-100 text-left min-w-[108.3px] z-[3]">
                      Question 1
                    </b>
                  </button>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0.5 box-border max-w-full">
                    <h3 className="m-0 flex-1 relative text-inherit leading-[160%] font-semibold font-inherit inline-block max-w-full z-[2] mq450:text-lgi mq450:leading-[30px] mq850:text-6xl mq850:leading-[40px]">
                      True or false? Water boils at 100°C under standard
                      atmospheric pressure.
                    </h3>
                  </div>
                </div>
                <div className="h-[140.7px] w-[148.4px] absolute !m-[0] top-[-21.1px] right-[-43px]">
                  <img
                    className="absolute top-[0px] left-[0px] w-[89.8px] h-[89.8px] object-contain z-[2]"
                    alt=""
                    src="/group-90@2x.png"
                  />
                  <img
                    className="absolute top-[47.9px] left-[55.6px] w-[92.8px] h-[92.8px] object-contain z-[3]"
                    loading="lazy"
                    alt=""
                    src="/group-88@2x.png"
                  />
                </div>
                <div className="h-[258.7px] w-[457px] absolute !m-[0] right-[-25.4px] bottom-[35.8px]">
                  <div className="absolute top-[31px] left-[37.8px] w-[406.2px] h-[227.7px] z-[2] flex items-center justify-center">
                    <img
                      className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(1.8)]"
                      alt=""
                      src="/mask-group-4@2x.png"
                    />
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-full h-full">
                    <img
                      className="absolute top-[0.3px] left-[0.5px] w-full h-full"
                      alt=""
                      src="/mask-group-5.svg"
                    />
                    <img
                      className="absolute top-[0px] left-[0px] rounded-xl w-full h-full object-cover z-[4]"
                      alt=""
                      src="/image-20@2x.png"
                    />
                  </div>
                </div>
                <div className="w-[365px] !m-[0] absolute right-[-105.4px] bottom-[-39.3px] shadow-[0px_18.2px_52.8px_rgba(40,_43,_110,_0.08)] rounded-[18.21px] bg-white flex flex-row items-start justify-start pt-[27px] pb-[25.8px] pr-3 pl-10 box-border gap-[25.4px] max-w-full z-[5] text-xl text-mediumaquamarine mq450:flex-wrap">
                  <div className="h-[119.8px] w-[365px] relative shadow-[0px_18.2px_52.8px_rgba(40,_43,_110,_0.08)] rounded-[18.21px] bg-white hidden max-w-full z-[0]" />
                  <div className="h-[65.9px] w-[59.4px] flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 box-border">
                    <div className="self-stretch flex-1 relative rounded-[50%] bg-lightcyan-100 z-[1]" />
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start relative min-w-[148px]">
                    <div className="h-[38.3px] w-[37.4px] absolute !m-[0] right-[17.7px] bottom-[-4.6px] rounded-[50%] bg-lightcyan-100 z-[1]" />
                    <div className="flex-1 relative leading-[160%] font-semibold z-[2] mq450:text-base mq450:leading-[26px]">
                      Your answer was recorded successfully
                    </div>
                  </div>
                  <img
                    className="h-[76.4px] w-[88.3px] absolute !m-[0] bottom-[21.4px] left-[28.7px] object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group-86@2x.png"
                  />
                </div>
              </div>
              <div className="h-[248.2px] flex flex-col items-start justify-start">
                <div className="w-[16.3px] h-[16.3px] relative rounded-[50%] bg-hotpink" />
              </div>
            </div>
            <div className="w-[596px] flex flex-col items-start justify-start pt-[91.9px] px-0 pb-0 box-border min-w-[596px] max-w-full text-21xl text-navy font-nunito-sans mq450:pt-[60px] mq450:box-border mq850:min-w-full mq1225:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <h2 className="m-0 w-[347px] relative text-inherit leading-[160%] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[38px] mq850:text-13xl mq850:leading-[51px]">
                  <span>Gamified Learning</span>
                  <span className="text-darkslateblue-300">{` `}</span>
                  <span className="text-orange">Experience</span>
                </h2>
                <b className="self-stretch relative text-3xl tracking-[0.02em] leading-[180%] font-poppins text-slategray-100 mq450:text-lg mq450:leading-[32px]">
                  Prompts quizzes and interactive challenges based on the
                  student’s learning journey. Offers badges, points, and rewards
                  to boost motivation and engagement.
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[19.2px] h-[19.2px] absolute !m-[0] bottom-[0px] left-[0px] rounded-[50%] bg-mediumspringgreen" />
      </div>
    </section>
  );
};

SmartNotesCard.propTypes = {
  className: PropTypes.string,
};

export default SmartNotesCard;
