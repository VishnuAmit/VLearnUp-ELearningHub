import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  maskGroup,
  humbertHolland,
  propLeft,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`absolute top-[210.9px] left-[347.5px] w-[126px] flex flex-row items-start justify-start pt-[98.7px] px-1.5 pb-[6.7px] box-border z-[1] text-left text-4xs-4 text-white font-nunito-sans ${className}`}
      style={groupDiv1Style}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={maskGroup}
      />
      <div className="[backdrop-filter:blur(8.4px)] rounded-8xs-2 bg-lightsteelblue-400 flex flex-row items-start justify-start pt-[2.5px] pb-[1.9px] pr-[3px] pl-1 gap-[4.1px] z-[1]">
        <div className="h-[16.4px] w-[85.7px] relative [backdrop-filter:blur(8.4px)] rounded-8xs-2 bg-lightsteelblue-400 hidden" />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="w-[5.5px] h-[5.9px] relative z-[1]">
            <div className="absolute top-[2.9px] left-[0px] rounded-[0.42px] bg-white w-[1.3px] h-[2.9px]" />
            <div className="absolute top-[1.5px] left-[2.1px] rounded-[0.42px] bg-white w-[1.3px] h-[4.4px]" />
            <div className="absolute top-[0px] left-[4.2px] rounded-[0.42px] bg-white w-[1.3px] h-[5.9px]" />
          </div>
        </div>
        <div className="relative font-semibold inline-block min-w-[68px] z-[1]">
          {humbertHolland}
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  humbertHolland: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default GroupComponent1;
