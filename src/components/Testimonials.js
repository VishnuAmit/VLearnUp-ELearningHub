import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[146px] box-border max-w-full text-left text-xl text-darkslateblue-200 font-nunito-sans mq850:pb-[62px] mq850:box-border mq1225:pb-[95px] mq1225:box-border ${className}`}
    >
      <div className="h-[auto] w-full relative max-w-full mq1500:min-h-[785px] px-4">
        <div className="absolute top-0 left-0 flex flex-row items-center gap-6">
          <div className="w-20 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
            <div className="self-stretch h-px relative box-border border-t border-solid border-darkslateblue-200" />
          </div>
          <b className="relative tracking-[0.2em] mq450:text-base">
            TESTIMONIAL
          </b>
        </div>

        <div className="absolute top-[59px] left-[25px] w-[612px] flex flex-col items-start justify-start gap-[25px] max-w-full text-41xl text-darkslateblue-300">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-20xl mq850:text-29xl">
            What They Say?
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-7xl text-slategray-100 font-poppins">
            <b className="flex-1 relative tracking-[0.02em] leading-[160%] inline-block max-w-full">
              While VLearnUp is new, we’re excited to hear from students and educators who are exploring our platform.
            </b>
          </div>
        </div>

        <div className="absolute top-[288px] left-[25px] w-full flex flex-row items-start justify-between max-w-full gap-6 text-7xl text-slategray-100 font-poppins mq1500:flex-wrap">
          <div className="w-[661px] flex flex-col items-start justify-start pt-6 px-0 box-border min-w-[661px] max-w-full mq850:min-w-full mq1500:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq850:gap-6">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
                  <div className="w-full flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
                    <b className="flex-1 relative tracking-[0.02em] leading-[160%] inline-block max-w-full mq450:text-2xl mq450:leading-[33px]">
                      We’re committed to providing an exceptional learning experience and would love to hear your feedback.
                    </b>
                  </div>
                  <b className="absolute left-[10px] relative tracking-[0.02em] leading-[42px] mq450:text-xl mq450:leading-[33px]">
                    Share your thoughts and be part of our journey!
                  </b>
                </div>
              </div>

              <div className="rounded-3xl border border-lightseagreen bg-white shadow-md flex flex-row items-center justify-start py-3 px-5 gap-4 max-w-full text-3xl text-lightseagreen font-nunito-sans hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                  <b className="relative tracking-[0.02em] leading-[36px] z-[1] text-lg hover:text-lightseagreen-600 transition-colors duration-300">
                    Write your assessment
                  </b>
                </div>
                <img
                  className="h-16 w-16 transition-transform duration-300 transform hover:scale-110"
                  loading="lazy"
                  alt=""
                  src="/group-32.svg"
                />
              </div>

            </div>
          </div>

          <div className="w-[700px] flex flex-col items-start justify-start gap-20 min-w-[700px] max-w-full text-3xl text-slategray-300 font-nunito-sans mq450:gap-6 mq850:gap-12 mq850:min-w-full mq1500:flex-1">
            <div className="w-[640px] h-20 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-24 w-24 flex items-center justify-center rounded-full bg-lightgray shadow-md transition-all duration-300 hover:shadow-lg">
                <img
                  className="h-full w-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  alt="Logo"
                  src="/group-51.svg"
                />
              </div>

            </div>

            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[750px] w-[600px] absolute right-0 bottom-0 transform translate-x-[-6%] rounded-xl object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
                loading="lazy"
                alt="Description of the image"
                src="/image-15@2x.png"
              />

              <div className="flex-1 shadow-lg rounded-md bg-white flex flex-row items-start justify-center py-0 pr-6 pl-0 box-border gap-8 max-w-full z-1 mq850:flex-wrap mq850:gap-4 mq850:p-5">
                <div className="hidden max-w-full" />
                <div className="h-[329px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                  <div className="w-3.5 flex-1 relative shadow-lg rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-salmon z-2" />
                </div>

                <div className="h-[188px] flex flex-col items-start justify-start pt-12 px-0 pb-0 box-border">
                  <div className="w-px flex-1 relative box-border z-2 border-r border-solid border-lightsteelblue-300" />
                </div>

                <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[383px] max-w-full mq850:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-12 max-w-full mq450:gap-4 mq850:gap-8">
                  <blockquote className="m-0 w-full relative tracking-[0.02em] leading-[180%] font-bold inline-block max-w-full z-2 
                     p-4 border-l-4 border-blue-600 bg-blue-50 rounded-lg shadow-md 
                     mq450:text-lg mq450:leading-[32px] text-gray-800 italic transition-transform duration-300 
                     hover:scale-105">
  “I love how VLearnUp combines personalized learning with the feel of offline classes. It’s truly a game-changer for online education.”
</blockquote>

                    <div className="self-stretch relative flex flex-col items-start justify-center h-[100px] p-4 bg-white rounded-lg shadow-lg">
                      <div className="flex flex-row items-center justify-start gap-1 mb-2">
                        <img
                          className="h-6 w-6 "
                          loading="lazy"
                          alt=""
                          src="/star-1.svg"
                        />
                        <img
                          className="h-6 w-6 "
                          loading="lazy"
                          alt=""
                          src="/star-2.svg"
                        />
                        <img
                          className="h-6 w-6 "
                          loading="lazy"
                          alt=""
                          src="/star-3.svg"
                        />
                        <img
                          className="h-6 w-6 "
                          alt=""
                          src="/stars.svg"
                        />
                        <img
                          className="h-6 w-6 "
                          alt=""
                          src="/stars1.svg"
                        />
                      </div>
                      <div className="leading-[1.2] font-semibold text-gray-800 text-lg z-2">
                        Amber Shaw
                      </div>
                      <div className="text-base tracking-[0.02em] leading-[1.5] font-semibold text-gray-500 z-2">
                        2 reviews at VLearnUp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;



/**
 *       <div className="h-[785px] w-[1728px] relative max-w-full mq1500:h-auto mq1500:min-h-[785]">
        <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[30px]">
          <div className="w-20 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border">
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-darkslateblue-200" />
          </div>
          <b className="relative tracking-[0.2em] mq450:text-base">
            TESTIMONIAL
          </b>
        </div>
        <div className="absolute top-[59px] left-[0px] w-[612px] flex flex-col items-start justify-start gap-[22px] max-w-full text-41xl text-darkslateblue-300">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-17xl mq850:text-29xl">
            What They Say?
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[5px] box-border max-w-full text-7xl text-slategray-100 font-poppins">
            <b className="flex-1 relative tracking-[0.02em] leading-[160%] inline-block max-w-full mq450:text-2xl mq450:leading-[33px]">
              While VLearnUp is new, we’re excited to hear from students and
              educators who are exploring our platform.
            </b>
          </div>
        </div>
        <div className="absolute top-[288px] left-[0px] w-full flex flex-row items-start justify-between max-w-full gap-[20px] text-7xl text-slategray-100 font-poppins mq1500:flex-wrap">
          <div className="w-[661px] flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border min-w-[661px] max-w-full mq850:min-w-full mq1500:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full mq850:gap-[18px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[25px] max-w-full">
                  <div className="w-[613px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
                    <b className="flex-1 relative tracking-[0.02em] leading-[160%] inline-block max-w-full mq450:text-2xl mq450:leading-[33px]">
                      We’re committed to providing an exceptional learning
                      experience and would love to hear your feedback.
                    </b>
                  </div>
                  <b className="relative tracking-[0.02em] leading-[42px] mq450:text-2xl mq450:leading-[33px]">
                    Share your thoughts and be part of our journey!
                  </b>
                </div>
              </div>
              <div className="rounded-61xl box-border flex flex-row items-start justify-start py-0 pr-0 pl-9 gap-[14px] max-w-full text-3xl text-lightseagreen border-[1px] border-solid border-lightseagreen mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:pb-5 mq450:box-border">
                <div className="self-stretch w-[403px] relative rounded-61xl box-border hidden max-w-full border-[1px] border-solid border-lightseagreen" />
                <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
                  <b className="relative tracking-[0.02em] leading-[36px] z-[1] mq450:text-lg mq450:leading-[28px]">
                    Write your assessment
                  </b>
                </div>
                <img
                  className="h-20 w-20 relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-32.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[700px] flex flex-col items-start justify-start gap-[88px] min-w-[700px] max-w-full text-3xl text-slategray-300 font-nunito-sans mq450:gap-[22px] mq850:gap-[44px] mq850:min-w-full mq1500:flex-1">
            <div className="w-[640px] h-20 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="h-20 w-20 relative z-[1] flex items-center justify-center">
                <img
                  className="h-full w-full z-[1] object-contain absolute left-[0px] top-[4px] [transform:scale(2.5)]"
                  loading="lazy"
                  alt=""
                  src="/group-51.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[779px] w-[560px] absolute !m-[0] top-[-475px] left-[-280px] rounded-xl object-cover"
                loading="lazy"
                alt=""
                src="/image-15@2x.png"
              />
              <div className="flex-1 shadow-[2px_4px_60px_rgba(41,_44,_124,_0.1)] rounded-mid bg-white flex flex-row items-start justify-center py-0 pr-6 pl-0 box-border gap-[31px] max-w-full z-[1] mq850:flex-wrap mq850:gap-[15px] mq850:p-5 mq850:box-border">
                <div className="self-stretch w-[700px] relative shadow-[2px_4px_60px_rgba(41,_44,_124,_0.1)] rounded-mid bg-white hidden max-w-full" />
                <div className="h-[329px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                  <div className="w-3.5 flex-1 relative shadow-[2px_4px_60px_rgba(41,_44,_124,_0.1)] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-salmon z-[2]" />
                </div>
                <div className="h-[188px] flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border">
                  <div className="w-px flex-1 relative box-border z-[2] border-r-[1px] border-solid border-lightsteelblue-300" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border min-w-[383px] max-w-full mq850:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[71px] max-w-full mq450:gap-[18px] mq850:gap-[35px]">
                    <blockquote className="m-0 w-[534px] relative tracking-[0.02em] leading-[180%] font-bold inline-block max-w-full z-[2] mq450:text-lg mq450:leading-[32px]">
                      “I love how VLearnUp combines personalized learning with
                      the feel of offline classes. It’s truly a game-changer for
                      online education.”
                    </blockquote>
                    <div className="self-stretch h-[68px] relative text-5xl">
                      <div className="absolute top-[0px] left-[414px] flex flex-row items-start justify-start gap-[4.3px]">
                        <img
                          className="h-6 w-6 relative min-h-[24px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/star-1.svg"
                        />
                        <img
                          className="h-6 w-6 relative min-h-[24px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/star-2.svg"
                        />
                        <img
                          className="h-6 w-6 relative min-h-[24px] z-[2]"
                          loading="lazy"
                          alt=""
                          src="/star-3.svg"
                        />
                        <img
                          className="h-6 w-6 relative min-h-[24px] z-[2]"
                          alt=""
                          src="/stars.svg"
                        />
                        <img
                          className="h-6 w-6 relative min-h-[24px] z-[2]"
                          alt=""
                          src="/stars1.svg"
                        />
                      </div>
                      <div className="absolute top-[12px] left-[0px] leading-[180%] font-semibold z-[2] mq450:text-lgi mq450:leading-[35px]">
                        Amber Shaw
                      </div>
                      <div className="absolute top-[36px] left-[394px] text-lg tracking-[0.02em] leading-[180%] font-semibold text-lightslategray z-[2]">
                        2 reviews at VLearnUp
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 */