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
    <b className="relative tracking-[0.2em] text-base text-darkslateblue-400">
      TESTIMONIAL
    </b>
  </div>
  
  <div className="absolute top-[59px] left-0 w-full flex flex-col items-start justify-start gap-4 max-w-full text-darkslateblue-300">
  <h1 className="m-0 relative text-inherit font-bold inline-block max-w-full text-4xl md:text-5xl lg:text-6xl text-center mb-4">
    What They Say?
  </h1>
  <div className="self-stretch flex flex-row items-start justify-start py-4 pr-4 pl-4 box-border max-w-full text-2xl text-slategray-100 font-poppins">
    <b className="flex-1 relative tracking-[0.02em] leading-[160%] inline-block max-w-full transition-transform duration-300 hover:scale-105">
      While VLearnUp is new, we’re excited to hear from students and educators who are exploring our platform.
    </b>
  </div>
</div>
  
  <div className="absolute top-[288px] left-0 w-full flex flex-row items-start justify-between max-w-full gap-6 text-2xl text-slategray-100 font-poppins mq1500:flex-wrap">
    <div className="w-[661px] flex flex-col items-start justify-start pt-6 px-0 box-border min-w-[661px] max-w-full mq850:min-w-full mq1500:flex-1">
      <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full mq850:gap-6">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-6 max-w-full">
            <div className="w-full flex flex-row items-start justify-start py-0 px-2 box-border max-w-full">
              <b className="flex-1 relative tracking-[0.02em] leading-[160%] inline-block max-w-full mq450:text-xl mq450:leading-[33px]">
                We’re committed to providing an exceptional learning experience and would love to hear your feedback.
              </b>
            </div>
            <b className="relative tracking-[0.02em] leading-[42px] mq450:text-xl mq450:leading-[33px]">
              Share your thoughts and be part of our journey!
            </b>
          </div>
        </div>

        <div className="rounded-3xl border border-lightseagreen flex flex-row items-center justify-start py-2 px-4 gap-4 max-w-full text-3xl text-lightseagreen font-nunito-sans">
          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
            <b className="relative tracking-[0.02em] leading-[36px] z-[1] text-lg">
              Write your assessment
            </b>
          </div>
          <img
            className="h-20 w-20"
            loading="lazy"
            alt=""
            src="/group-32.svg"
          />
        </div>
      </div>
    </div>

    <div className="w-[700px] flex flex-col items-start justify-start gap-20 min-w-[700px] max-w-full text-3xl text-slategray-300 font-nunito-sans mq450:gap-6 mq850:gap-12 mq850:min-w-full mq1500:flex-1">
      <div className="w-[640px] h-20 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="h-20 w-20 flex items-center justify-center">
          <img
            className="h-full w-full object-contain"
            loading="lazy"
            alt=""
            src="/group-51.svg"
          />
        </div>
      </div>

      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[779px] w-[560px] absolute !m-0 top-[-475px] left-[-280px] rounded-xl object-cover"
          loading="lazy"
          alt=""
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
              <blockquote className="m-0 w-full relative tracking-[0.02em] leading-[180%] font-bold inline-block max-w-full z-2 mq450:text-lg mq450:leading-[32px]">
                “I love how VLearnUp combines personalized learning with the feel of offline classes. It’s truly a game-changer for online education.”
              </blockquote>
              <div className="self-stretch h-[68px] relative text-5xl">
                <div className="absolute top-0 left-[414px] flex flex-row items-start justify-start gap-1.5">
                  <img
                    className="h-6 w-6 min-h-[24px] z-2"
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className="h-6 w-6 min-h-[24px] z-2"
                    loading="lazy"
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className="h-6 w-6 min-h-[24px] z-2"
                    loading="lazy"
                    alt=""
                    src="/star-3.svg"
                  />
                  <img
                    className="h-6 w-6 min-h-[24px] z-2"
                    alt=""
                    src="/stars.svg"
                  />
                  <img
                    className="h-6 w-6 min-h-[24px] z-2"
                    alt=""
                    src="/stars1.svg"
                  />
                </div>
                <div className="absolute top-[12px] left-0 leading-[180%] font-semibold z-2">
                  Amber Shaw
                </div>
                <div className="absolute top-[36px] left-[394px] text-lg tracking-[0.02em] leading-[180%] font-semibold text-lightslategray z-2">
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
