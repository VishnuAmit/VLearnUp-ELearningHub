import { css } from "@emotion/css";
import PropTypes from "prop-types";

const Label = ({
  className = "",
  propPadding,
  propFlex,
  propBorderRadius,
  propFlex1,
  propPadding1,
  propHeight,
  progressBar,
  progressBarIcon,
  propAlignSelf,
  propWidth,
  propMaxHeight,
  propMinHeight,
  propHeight1,
  propFlex2,
  propOverflow,
  showSpacer,
  propFlex3,
  propWidth1,
  propWidth2,
  propFlex4,
  text,
  showText,
}) => {
  return (
    <div
      className={[
        css`flex: 1;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: 10px;
text-align: center;
font-size: 12px;
color: #000;
font-family: Roboto;
padding: ${propPadding}
flex: ${propFlex}
`,
        className,
      ].join(" ")}
    >
      <div
        className={css`flex: 1;
border-radius: 0px 6px 6px 0px;
background-color: #ccc;
overflow: hidden;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
border-radius: ${propBorderRadius}
flex: ${propFlex1}
padding: ${propPadding1}
height: ${propHeight}
`}
      >
        {!progressBarIcon && (
          <img
            className={css`align-self: stretch;
width: 40px;
position: relative;
max-height: 100%;
min-height: 12px;
align-self: ${propAlignSelf}
width: ${propWidth}
max-height: ${propMaxHeight}
min-height: ${propMinHeight}
height: ${propHeight1}
flex: ${propFlex2}
overflow: ${propOverflow}
`}
            alt=""
            src={progressBar}
          />
        )}
        {showSpacer && (
          <div
            className={css`height: 12px;
flex: 1;
position: relative;
flex: ${propFlex3}
width: ${propWidth1}
`}
          />
        )}
      </div>
      <div
        className={css`height: 14px;
width: 80px;
display: none;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 0px 10px;
box-sizing: border-box;
width: ${propWidth2}
flex: ${propFlex4}
`}
      >
        {showText && (
          <div
            className={css`
              align-self: stretch;
              flex: 1;
              position: relative;
              text-transform: uppercase;
              font-weight: 500;
            `}
          >
            {text}
          </div>
        )}
      </div>
    </div>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  progressBar: PropTypes.string,
  progressBarIcon: PropTypes.bool,
  showSpacer: PropTypes.bool,
  text: PropTypes.string,
  showText: PropTypes.bool,

  /** Style props */
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propBorderRadius: PropTypes.any,
  propFlex1: PropTypes.any,
  propPadding1: PropTypes.any,
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propMaxHeight: PropTypes.any,
  propMinHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propFlex2: PropTypes.any,
  propOverflow: PropTypes.any,
  propFlex3: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
  propFlex4: PropTypes.any,
};

export default Label;
