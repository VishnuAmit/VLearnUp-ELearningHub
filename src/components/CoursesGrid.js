import PropTypes from "prop-types";

const CoursesGrid = ({ className = "" }) => {
  return (
    <div
      className={`w-[328.4px] flex flex-col items-end justify-start gap-[24px] max-w-full shrink-0 text-left text-sm text-slategray-100 font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
          <div className="w-[93px] flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="w-[21px] h-[21px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-sm bg-gainsboro-500 box-border w-2.5 h-2.5 z-[2] border-[1px] border-solid border-gainsboro-200" />
                <div className="absolute top-[11px] left-[0px] rounded-sm bg-gainsboro-500 box-border w-2.5 h-2.5 z-[2] border-[1px] border-solid border-gainsboro-200" />
                <div className="absolute top-[11px] left-[11px] rounded-sm bg-gainsboro-500 box-border w-2.5 h-2.5 z-[2] border-[1px] border-solid border-gainsboro-200" />
                <div className="absolute top-[0px] left-[11px] rounded-sm bg-gainsboro-500 box-border w-2.5 h-2.5 z-[2] border-[1px] border-solid border-gainsboro-200" />
              </div>
            </div>
            <b className="flex-1 relative tracking-[0.02em] leading-[22px] z-[2]">
              Design
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[10px] text-5xl text-gainsboro-200 font-font-awesome-5-free">
            <div className="relative inline-block min-w-[24px] z-[2] mq450:text-lgi">
              
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-sm text-slategray-100 font-poppins">
              <b className="relative tracking-[0.02em] leading-[22px] inline-block min-w-[62px] z-[2]">
                3 Month
              </b>
            </div>
          </div>
        </div>
        <b className="self-stretch relative text-5xl text-gray-100 z-[1] mq450:text-lgi">
          AWS Certified solutions Architect
        </b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[17px] text-lg">
        <b className="self-stretch h-[102px] relative tracking-[0.02em] leading-[180%] inline-block shrink-0 z-[1]">
          Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod
          tempor
        </b>
        <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-black mq450:flex-wrap">
          <div className="w-[113.3px] flex flex-row items-start justify-start gap-[17.8px]">
            <div className="h-[44.2px] w-[44.4px] relative rounded-[22.12px] bg-gainsboro-200 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-[22.12px] bg-gainsboro-200 w-full h-full hidden" />
              <img
                className="absolute top-[0px] left-[0.4px] rounded-3xl w-full h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[12.8px] px-0 pb-0">
              <b className="self-stretch relative tracking-[0.02em] leading-[18.7px] z-[1]">
                Lina
              </b>
            </div>
          </div>
          <div className="w-[107px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.2px] box-border text-gray-400">
            <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
              <i className="h-[19px] flex-1 relative [text-decoration:line-through] tracking-[0.02em] flex font-bold items-center z-[1]">
                $100
              </i>
              <b className="h-[19px] relative text-5xl tracking-[0.02em] flex text-orange items-center min-w-[51px] whitespace-nowrap z-[1] mq450:text-lgi">
                $80
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoursesGrid.propTypes = {
  className: PropTypes.string,
};

export default CoursesGrid;
