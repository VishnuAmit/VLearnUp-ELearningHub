import { css } from "@emotion/css";
import PropTypes from "prop-types";

const FrameComponent6 = ({
  className = "",
  propGap,
  group15,
  workshop,
  propPadding,
}) => {
  return (
    <div
      className={[
        css`
          width: 274px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 13.7px 13px 13.6px;
          box-sizing: border-box;
          position: relative;
          gap: 41px;
          text-align: left;
          font-size: 10px;
          color: #303030;
          font-family: Manrope;
          @media screen and (max-width: 450px) {
            gap: 20px;
          }
          gap: ${propGap};
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          height: 100%;
          width: 100%;
          position: absolute;
          margin: 0 !important;
          top: 73px;
          right: -274px;
          bottom: -73px;
          left: 274px;
          border-radius: 16px;
          background-color: #f7f7f7;
          transform: rotate(180deg);
          transform-origin: 0 0;
          z-index: 3;
        `}
      />
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 13.6px;
        `}
      >
        <img
          className={css`
            height: 45.7px;
            width: 45.7px;
            position: relative;
            flex-shrink: 0;
            z-index: 4;
          `}
          loading="lazy"
          alt=""
          src={group15}
        />
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 5.3px 0px 0px;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 4px;
              flex-shrink: 0;
            `}
          >
            <b
              className={css`
                align-self: stretch;
                position: relative;
                z-index: 4;
              `}
            >
              {workshop}
            </b>
            <div
              className={css`
                position: relative;
                color: #bdbdbd;
                display: inline-block;
                min-width: 96px;
                white-space: nowrap;
                z-index: 4;
              `}
            >
              8:00 AM - 12:00 PM
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 14.3px 0px 0px;
          padding: ${propPadding};
        `}
      >
        <img
          className={css`
            width: 4px;
            height: 17px;
            position: relative;
            overflow: hidden;
            flex-shrink: 0;
            z-index: 4;
          `}
          alt=""
          src="/morevertical-3.svg"
        />
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  group15: PropTypes.string,
  workshop: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FrameComponent6;
