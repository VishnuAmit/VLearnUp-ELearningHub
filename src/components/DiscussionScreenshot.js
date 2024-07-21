import GroupComponent2 from "./GroupComponent2";
import GroupComponent1 from "./GroupComponent1";
import PropTypes from "prop-types";

const DiscussionScreenshot = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-4xs-4 text-white font-nunito-sans mq1500:flex-wrap ${className}`}
    >
      <div className="w-[658.1px] flex flex-col items-start justify-end pt-0 px-0 pb-[27.4px] box-border min-w-[658.1px] max-w-full mq850:min-w-full mq1500:flex-1">
        <div className="self-stretch h-[365.5px] relative z-[1]">
          <div className="absolute top-[-31.1px] right-[-34.9px] rounded-[50%] box-border w-[113px] h-[113px] border-[0px] border-solid border-deepskyblue-400" />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full"
            alt=""
            src="/group-67.svg"
          />
          <div className="absolute top-[295.8px] left-[36.1px] shadow-[0px_6.4px_15.47px_rgba(52,_101,_225,_0.3)] rounded-[38.67px] bg-royalblue-200 flex flex-row items-start justify-start pt-[7.8px] px-[27px] pb-[7.9px] z-[1] text-base-8">
            <div className="h-[38.7px] w-[116px] relative shadow-[0px_6.4px_15.47px_rgba(52,_101,_225,_0.3)] rounded-[38.67px] bg-royalblue-200 hidden" />
            <b className="relative inline-block min-w-[60px] z-[1]">Present</b>
          </div>
          <button className="cursor-pointer [border:none] pt-[7.8px] pb-[7.9px] pr-[31px] pl-8 bg-crimson-200 absolute top-[295.8px] left-[177.9px] shadow-[0px_6.4px_15.47px_rgba(202,_47,_93,_0.3)] rounded-[38.67px] flex flex-row items-start justify-start gap-[7px] z-[1]">
            <div className="h-[38.7px] w-[116px] relative shadow-[0px_6.4px_15.47px_rgba(202,_47,_93,_0.3)] rounded-[38.67px] bg-crimson-200 hidden" />
            <div className="flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0">
              <img
                className="w-[12.9px] h-[12.9px] relative overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/phone-1.svg"
              />
            </div>
            <b className="relative text-base-8 inline-block font-nunito-sans text-white text-left min-w-[32px] z-[1]">
              Call
            </b>
          </button>
          <GroupComponent2
            maskGroup="/mask-group-6@2x.png"
            adamLevin="Adam Levin"
          />
          <GroupComponent2
            maskGroup="/mask-group-7@2x.png"
            adamLevin="Tamara Clarke"
            propLeft="347.5px"
          />
          <div className="absolute top-[69.6px] left-[35.8px] w-[193.4px] h-48 z-[1] flex items-center justify-center">
            <img
              className="w-full h-full z-[1] object-contain absolute left-[0px] top-[10px] [transform:scale(1.32)]"
              alt=""
              src="/group-101@2x.png"
            />
          </div>
          <GroupComponent1
            maskGroup="/mask-group-8@2x.png"
            humbertHolland="Humbert Holland"
          />
          <GroupComponent1
            maskGroup="/mask-group-9@2x.png"
            humbertHolland="Patricia Mendoza"
            propLeft="499.9px"
          />
          <div className="absolute top-[1.9px] left-[0px] [backdrop-filter:blur(9.42px)] rounded-[18.83px] bg-cornflowerblue w-full h-full z-[2]" />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[84px] min-w-[722px] max-w-full text-21xl text-navy mq450:gap-[21px] mq850:gap-[42px] mq850:min-w-full mq1500:flex-1">
        <h2 className="m-0 relative text-inherit leading-[160%] font-bold font-inherit mq450:text-5xl mq450:leading-[38px] mq850:text-13xl mq850:leading-[51px]">
          <span>Enhanced Communication</span>
          <span className="text-darkslateblue-300">{` `}</span>
          <span className="text-orange">and Support</span>
        </h2>
        <b className="w-[540px] relative text-3xl tracking-[0.02em] leading-[180%] inline-block font-poppins text-slategray-100 max-w-full mq450:text-lg mq450:leading-[32px]">
          {" "}
          Private discussion rooms for personalized support and mentorship.
          Schedule and conduct office hours seamlessly within the platform.
        </b>
      </div>
    </div>
  );
};

DiscussionScreenshot.propTypes = {
  className: PropTypes.string,
};

export default DiscussionScreenshot;
