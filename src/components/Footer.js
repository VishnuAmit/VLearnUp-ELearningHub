import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-darkslategray flex flex-col items-start justify-start pt-[74px] pb-10 pr-[586px] pl-[661px] box-border gap-[95.5px] max-w-full text-center text-13xl text-white font-poppins mq850:gap-[24px] mq850:pt-12 mq850:pb-[26px] mq850:pr-[146px] mq850:pl-[165px] mq850:box-border mq1225:gap-[48px] mq1225:pl-[330px] mq1225:pr-[293px] mq1225:box-border ${className}`}
    >
      <div className="w-[1920px] h-[593px] relative bg-darkslategray hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-left">
        <div className="w-[576px] flex flex-row flex-wrap items-start justify-start gap-[29px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start relative">
              <img
                className="h-[83.2px] w-[93.8px] absolute !m-[0] bottom-[-18.2px] left-[-34px] z-[3]"
                alt=""
                src="/group-453.svg"
              />
              <h3 className="m-0 relative text-inherit tracking-[0.04em] font-bold font-inherit z-[4] mq450:text-lgi mq850:text-7xl">
                VLearnUp
              </h3>
            </div>
          </div>
          <div className="h-[83px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
            <div className="w-px flex-1 relative box-border z-[1] border-r-[1px] border-solid border-slategray-200" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[218px] max-w-full text-3xl">
            <div className="self-stretch relative tracking-[0.04em] font-semibold z-[1] mq450:text-lg">
              All-in-One E-Learning Platform
            </div>
          </div>
        </div>
      </div>
      <div className="w-[599px] flex flex-col items-end justify-start gap-[20px] max-w-full text-7xl">
        <div className="flex flex-row items-start justify-end py-0 pr-[74px] pl-[75px] mq850:pl-[37px] mq850:pr-[37px] mq850:box-border">
          <b className="relative tracking-[0.04em] z-[1] mq450:text-2xl">
            Subscribe to get our Newsletter
          </b>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] max-w-full">
          <div className="flex-1 rounded-61xl box-border flex flex-row items-start justify-start pt-[13px] px-7 pb-3 min-w-[118px] max-w-full z-[1] border-[1px] border-solid border-white">
            <div className="h-[60px] w-[400px] relative rounded-61xl box-border hidden max-w-full border-[1px] border-solid border-white" />
            <input
              className="w-[118px] [border:none] [outline:none] inline-block font-poppins text-xl bg-[transparent] h-[31px] relative tracking-[0.04em] font-bold text-white text-center p-0 z-[2] mq450:text-base"
              placeholder="Your Email"
              type="text"
            />
          </div>
          <button className="cursor-pointer [border:none] pt-3.5 pb-[13px] pr-8 pl-[33px] bg-dimgray rounded-41xl flex flex-row items-start justify-start z-[1]">
            <div className="h-[29px] w-[151px] relative [filter:blur(54px)] rounded-41xl bg-gray-500 hidden" />
            <div className="h-[60px] w-[179px] relative rounded-41xl bg-dimgray hidden" />
            <b className="relative text-3xl inline-block font-poppins text-white text-left min-w-[114px] z-[2] mq450:text-lg">
              Subscribe
            </b>
          </button>
        </div>
      </div>
      <div className="w-[601px] flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full text-3xl">
        <div className="h-[86px] flex-1 relative max-w-full mq850:h-auto mq850:min-h-[86]">
          <div className="absolute top-[8px] left-[115px] box-border w-px h-[18px] z-[1] border-r-[1px] border-solid border-slategray-200" />
          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] inline-block min-w-[97px] z-[1] mq450:text-lg">
            Careers
          </b>
          <div className="absolute top-[0px] left-[115px] flex flex-col items-start justify-start gap-[19px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[15px] box-border max-w-full">
              <div className="flex flex-row items-start justify-start gap-[15.5px] max-w-full mq850:flex-wrap">
                <b className="relative tracking-[0.04em] z-[1] mq450:text-lg">
                  Privacy Policy
                </b>
                <div className="h-[25px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                  <div className="w-px h-[18px] relative box-border z-[1] border-r-[1px] border-solid border-slategray-200" />
                </div>
                <b className="relative tracking-[0.04em] z-[1] mq450:text-lg">{`Terms & Conditions`}</b>
              </div>
            </div>
            <b className="relative tracking-wide inline-block max-w-full text-center text-lg text-white z-[1]">
  {`© 2024 E-Class Learning Inc.`}
</b>

          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
