import PropTypes from "prop-types";
import { forwardRef } from "react";
const FrameComponent2 = forwardRef(({ className = "" }, ref) => {
  return (
    <section ref={ref}
      className={`w-[1853px] flex flex-row items-start justify-center pt-0 px-5 pb-[77.9px] box-border max-w-full text-left text-17xl text-navy font-poppins mq450:pb-[33px] mq450:box-border mq1225:pb-[51px] mq1225:box-border ${className}`}
    >
      <div className="w-[1536.3px] flex flex-col items-start justify-start gap-[132px] max-w-full mq450:gap-[16px] mq850:gap-[33px] mq1225:gap-[66px]">
        <div className="w-[1379px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[943px] flex flex-col items-start justify-start gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-7">
              <h2 className="m-0 w-[247px] relative text-inherit leading-[180%] font-bold font-inherit inline-block shrink-0 mq450:text-3xl mq450:leading-[39px] mq850:text-10xl mq850:leading-[52px]">
                <span>Our</span>
                <span className="text-darkslateblue-300 whitespace-pre-wrap">{`  `}</span>
                <span className="text-orange">Features</span>
              </h2>
            </div>
            <b className="relative text-5xl leading-[180%] text-slategray-100 text-center mq450:text-lgi mq450:leading-[35px]">
              This powerful features make learning activities more efficient and
              engaging.
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start max-w-full text-21xl font-nunito-sans">
          <div className="flex flex-row items-end justify-start gap-[23.9px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2.5">
              <div className="w-11 h-[43.9px] relative rounded-[50%] bg-lightskyblue" />
            </div>
            <div className="h-5 w-5 relative rounded-[50%] bg-lightskyblue" />
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[35px] pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-end justify-start gap-[137px] max-w-full mq450:gap-[17px] mq850:gap-[34px] mq1225:gap-[68px] mq1500:flex-wrap">
              <div className="w-[645.7px] flex flex-col items-start justify-start pt-0 px-0 pb-20 box-border min-w-[645.7px] min-h-[387px] max-w-full mq450:pb-[52px] mq450:box-border mq850:min-w-full mq1500:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[83.8px] max-w-full mq450:gap-[21px] mq850:gap-[42px]">
                  <h2 className="m-0 w-[420.8px] relative text-inherit leading-[160%] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[38px] mq850:text-13xl mq850:leading-[51px]">
                    <span>Data-Driven</span>
                    <span className="text-darkslateblue-300">{` `}</span>
                    <span className="text-orange">Insights</span>
                  </h2>
                  <b className="self-stretch relative text-3xl tracking-[0.02em] leading-[180%] font-poppins text-slategray-100 mq450:text-lg mq450:leading-[32px]">
                    <p className="m-0">
                      Detailed analytics to track student progress and identify
                      areas for improvement. Use data to predict student
                      performance and provide early interventions where needed.
                    </p>
                  </b>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_10px_48px_rgba(40,_43,_110,_0.1)] rounded-xl bg-white flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border relative gap-[77.8px] min-w-[467px] max-w-full z-[1] text-3xl text-cadetblue font-poppins mq450:gap-[19px] mq850:gap-[39px] mq850:min-w-full">
                <div className="self-stretch h-[479.2px] relative shadow-[0px_10px_48px_rgba(40,_43,_110,_0.1)] rounded-xl bg-white hidden z-[0]" />
                <button className="cursor-pointer [border:none] pt-[17.9px] pb-4 pr-5 pl-[21px] bg-deepskyblue-300 self-stretch rounded-t-xl rounded-b-none flex flex-row items-start justify-center box-border max-w-full z-[2] hover:bg-steelblue-300">
                  <div className="h-[69.9px] w-[717.7px] relative rounded-t-xl rounded-b-none bg-deepskyblue-300 hidden max-w-full" />
                  <div className="relative text-3xl leading-[36px] font-semibold font-poppins text-azure text-left inline-block min-w-[125px] z-[3] mq450:text-lg mq450:leading-[28px]">
                    GradeBook
                  </div>
                </button>
                <div className="w-[677.6px] flex flex-row items-end justify-center gap-[9px] max-w-full mq850:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[58px] box-border min-w-[301px] min-h-[307px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[41.9px] mq450:flex-wrap mq450:gap-[21px]">
                      <div className="h-[100.8px] flex-1 relative min-w-[155px]">
                        <div className="absolute top-[42.9px] left-[138.9px] rounded-41xl bg-lightcyan-200 w-[100px] flex flex-row items-start justify-start pt-2 px-[31px] pb-[7px] box-border z-[4]">
                          <div className="h-[49.9px] w-[100px] relative rounded-41xl bg-lightcyan-200 hidden" />
                          <b className="flex-1 relative leading-[160%] z-[5] mq450:text-lg mq450:leading-[28px]">
                            100
                          </b>
                        </div>
                        <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[163.1px]">
                          <div className="absolute top-[32px] left-[0px] bg-deepskyblue-200 w-[126.9px] h-[29.9px] z-[2]" />
                          <img
                            className="absolute top-[0px] left-[77.9px] w-[85.2px] h-[85.1px] object-contain z-[3]"
                            alt=""
                            src="/mask-group@2x.png"
                          />
                          <img
                            className="absolute top-[68.9px] left-[106.9px] w-8 h-[31.9px] z-[5]"
                            loading="lazy"
                            alt=""
                            src="/star-6.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[182px] flex flex-col items-start justify-start pt-[46.9px] px-0 pb-0 box-border min-w-[182px] text-steelblue-200 mq450:flex-1">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[73.9px]">
                          <div className="self-stretch flex flex-row items-start justify-end">
                            <div className="h-[77.9px] w-[100px] relative">
                              <div className="absolute top-[0px] left-[0px] rounded-41xl bg-lavender-300 w-[100px] h-[49.9px] z-[4]" />
                              <div className="absolute top-[8px] left-[36px] flex flex-row items-start justify-start">
                                <div className="h-[85.1px] w-[347.9px] absolute !m-[0] top-[-77.8px] right-[-290.9px]">
                                  <div className="absolute top-[27.9px] left-[43px] bg-dodgerblue w-[304.9px] h-[29.9px] z-[2]" />
                                  <img
                                    className="absolute top-[0px] left-[0px] w-[85.2px] h-[85.1px] object-cover z-[3]"
                                    alt=""
                                    src="/mask-group-1@2x.png"
                                  />
                                </div>
                                <b className="h-[69.9px] relative leading-[160%] inline-block min-w-[28px] z-[5] mq450:text-lg mq450:leading-[28px]">
                                  98
                                </b>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start relative text-seagreen">
                            <div className="h-[85.1px] w-[305.1px] absolute !m-[0] top-[-47.9px] left-[-280.8px]">
                              <input
                                className="[border:none] [outline:none] bg-limegreen absolute top-[32.9px] left-[0px] w-[259.9px] h-[29.9px] z-[2]"
                                type="text"
                              />
                              <img
                                className="absolute top-[0px] left-[219.9px] w-[85.2px] h-[85.1px] object-cover z-[3]"
                                alt=""
                                src="/mask-group-2@2x.png"
                              />
                            </div>
                            <div className="rounded-41xl bg-lightgoldenrodyellow flex flex-row items-start justify-start pt-2 pb-[7px] pr-[35px] pl-9 z-[4]">
                              <div className="h-[49.9px] w-[100px] relative rounded-41xl bg-lightgoldenrodyellow hidden" />
                              <b className="relative leading-[160%] inline-block min-w-[29px] z-[5] mq450:text-lg mq450:leading-[28px]">
                                85
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[205.8px] flex flex-col items-start justify-start gap-[48.9px] min-w-[205.8px] text-indianred mq850:flex-1">
                    <div className="w-[100px] flex flex-row items-start justify-start relative">
                      <div className="h-[85.1px] w-[181.9px] absolute !m-[0] top-[-54.9px] right-[-145.8px]">
                        <input
                          className="[border:none] [outline:none] bg-crimson-100 absolute top-[32.9px] left-[36px] w-[145.9px] h-[29.9px] z-[2]"
                          type="text"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] w-[85.2px] h-[85.1px] object-cover z-[3]"
                          alt=""
                          src="/mask-group-3@2x.png"
                        />
                      </div>
                      <div className="flex-1 rounded-41xl bg-pink flex flex-row items-start justify-start pt-[7.9px] px-[35px] pb-[7.1px] z-[4] mq850:flex-1">
                        <div className="h-[49.9px] w-[100px] relative rounded-41xl bg-pink hidden" />
                        <b className="relative leading-[160%] inline-block min-w-[27px] z-[5] mq450:text-lg mq450:leading-[28px]">
                          75
                        </b>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[35px]">
                      <button className="cursor-pointer [border:none] py-[13px] px-[50px] bg-[transparent] flex-1 rounded-41xl [background:linear-gradient(105.5deg,_#545ae7,_#393fcf)] flex flex-row items-start justify-start z-[1]">
                        <div className="h-[28.9px] w-[145.9px] relative [filter:blur(54px)] rounded-41xl bg-mediumslateblue hidden" />
                        <div className="h-[57.9px] w-[169.9px] relative rounded-41xl [background:linear-gradient(105.5deg,_#545ae7,_#393fcf)] hidden" />
                        <b className="w-[38.5px] relative text-3xl inline-block font-poppins text-white text-left shrink-0 z-[2] mq450:text-lg">
                          Export
                        </b>
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[158.8px] h-[158.5px] absolute !m-[0] top-[-60.9px] left-[-46px] object-contain z-[3]"
                  loading="lazy"
                  alt=""
                  src="/group-94@2x.png"
                />
                <img
                  className="w-[120.9px] h-[120.7px] absolute !m-[0] top-[28.9px] right-[-44.6px] object-contain z-[3]"
                  loading="lazy"
                  alt=""
                  src="/group-95@2x.png"
                />
                <div className="w-[311.9px] h-[207.6px] absolute !m-[0] bottom-[-19.9px] left-[-43px]">
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[23px] rounded-xl bg-lavender-100 w-[288.9px]" />
                  <img
                    className="absolute top-[131.7px] left-[0px] w-[82.2px] h-[34.8px] z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group-96.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
