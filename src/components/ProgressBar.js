import { css } from "@emotion/css";
import PropTypes from "prop-types";
import Label from "./Label";

const ProgressBar = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          height: 12px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px 0px;
          box-sizing: border-box;
          z-index: 3;
          text-align: center;
          font-size: 12px;
          color: #000;
          font-family: Roboto;
        `,
        className,
      ].join(" ")}
    >
      <Label
        propPadding="0px 0px 24px"
        propFlex="1"
        propBorderRadius="6px 0px 0px 6px"
        propFlex1="1"
        propPadding1="unset"
        propHeight="unset"
        progressBar="/progress-bar.svg"
        progressBarIcon
        propAlignSelf="unset"
        propWidth="unset"
        propMaxHeight="unset"
        propMinHeight="unset"
        propHeight1="12px"
        propFlex2="1"
        propOverflow="hidden"
        showSpacer={false}
        propFlex3="unset"
        propWidth1="40px"
        propWidth2="unset"
        propFlex4="0.6748"
        text="Ideation"
        showText={false}
      />
      <Label
        propPadding="unset"
        propFlex="unset"
        propBorderRadius="unset"
        propFlex1="unset"
        propPadding1="0px 31px 0px 0px"
        propHeight="unset"
        progressBar="/progress-bar-1.svg"
        progressBarIcon
        propAlignSelf="unset"
        propWidth="30.8px"
        propMaxHeight="unset"
        propMinHeight="unset"
        propHeight1="12px"
        propFlex2="unset"
        propOverflow="unset"
        showSpacer={false}
        propFlex3="unset"
        propWidth1="31px"
        propWidth2="80px"
        propFlex4="unset"
        text="DESIGN"
        showText
      />
      <Label
        propPadding="unset"
        propFlex="1"
        propBorderRadius="unset"
        propFlex1="1"
        propPadding1="unset"
        propHeight="12px"
        progressBar="/progress-bar1.svg"
        progressBarIcon={false}
        propAlignSelf="unset"
        propWidth="40px"
        propMaxHeight="unset"
        propMinHeight="unset"
        propHeight1="12px"
        propFlex2="unset"
        propOverflow="unset"
        showSpacer={false}
        propFlex3="unset"
        propWidth1="61px"
        propWidth2="80px"
        propFlex4="unset"
        text="HANDOFF"
        showText
      />
      <Label
        progressBar="/progress-bar1.svg"
        progressBarIcon
        showSpacer
        text="READY"
        showText
      />
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
};

export default ProgressBar;
